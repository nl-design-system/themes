FROM mhart/alpine-node:16.4.2

ARG TZ=Europe/Amsterdam
ENV TZ Europe/Amsterdam

# Use `--no-cache` to get a smaller image, by removing unused files afterwards.
# The packages are sorted, one per line, to have better diffs in Git.
RUN \
    apk add --no-cache \
        bash \
        nano \
    && command -v bash \
    && command -v nano \
    && echo "$TZ" > /etc/timezone

ARG NPM_REGISTRY
ARG NPM_STRICT_SSL

RUN    ( test "${NPM_STRICT_SSL}" && npm config set strict-ssl "${NPM_STRICT_SSL}" || true ) \
    && ( test "${NPM_REGISTRY}" && npm config set registry "${NPM_REGISTRY}" || true ) \
    && ( test "${HTTP_PROXY}" && npm config set proxy "${HTTP_PROXY}" || true ) \
    && ( test "${HTTP_PROXY}" && npm config set http-proxy "${HTTP_PROXY}" || true ) \
    && ( test "${HTTPS_PROXY}" && npm config set https-proxy "${HTTPS_PROXY}" || true ) \
    && npm cache clean --force 2> /dev/null

RUN mkdir -p /var/www \
    && addgroup -g 1000 node \
    && adduser \
        -D \
        -G node \
        -h /var/www \
        -s /bin/sh \
        -u 1000 \
        node \
    && chown -R node:node /var/www

USER node

WORKDIR /var/www

ADD --chown=node:node package.json package-lock.json ./

ARG NODE_ENV
ARG NPM_TOKEN
ARG HUSKY_SKIP_INSTALL=true

# For development, install `devDependencies`.

RUN if test "$NODE_ENV" = 'development'; \
then \
    npm config set "//registry.npmjs.org/:_authToken" "${NPM_TOKEN}" \
    && npm ci \
    && npm config set "//registry.npmjs.org/:_authToken" "" \
    && npm cache clean --force 2> /dev/null \
; fi

# Altering the build directories should not trigger `npm install`,
# that's why these are not in the same `mkdir` command.

RUN mkdir -p \
    /var/www/dist \
    /var/www/src

# A change in the codebase codebase should not cause a Docker cache miss during development,
# that would mean `npm install` runs after every tiny change. Only changes to `package-lock.json`
# are relevant for development builds.

ADD --chown=node:node ./ /var/www/

# After building the application, remove the `devDependencies`
# for when NODE_ENV is "production" using a production mode install,
# leaving only the packages needed for production.

RUN if test "$NODE_ENV" != 'development'; \
then \
    npm config set "//registry.npmjs.org/:_authToken" "${NPM_TOKEN}" \
    && NODE_ENV=development npm ci \
    && npm run build \
    && npm prune \
    && npm config set "//registry.npmjs.org/:_authToken" "" \
    && npm cache clean --force 2> /dev/null \
; fi

# Build and remove the devDependencies in one Docker layer to keep image size small
# For production, install `devDependencies` to be able to execute `npm run build`,
# but remove the `devDependencies` immediately afterwards to keep the Docker layer small.

ARG BUILD_DATE
ARG VCS_REF
ARG VERSION

# Add lowercase proxy settings for compatibility,
# but use uppercase exports for shellcheck compatibility.
# https://unix.stackexchange.com/a/212972
ENV \
    HTTP_PROXY=$HTTP_PROXY \
    HTTPS_PROXY=$HTTPS_PROXY \
    NO_PROXY=$NO_PROXY \
    http_proxy=$HTTP_PROXY \
    https_proxy=$HTTPS_PROXY \
    no_proxy=$NO_PROXY \
    SHELL=/bin/bash

ENTRYPOINT ["npm", "run"]

CMD ["start"]
