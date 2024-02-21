import { readFileSync } from "node:fs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));

export default {
  input: "src/index.mjs",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
    },
    {
      file: packageJson.module,
      format: "esm",
    },
  ],
  external: [/@babel\/runtime/, "react"],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
    }),
  ],
};
