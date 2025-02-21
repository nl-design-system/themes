// eslint-disable-next-line no-unused-vars
import {
  StyleDictionaryDesignToken,
  StyleDictionaryTree,
} from '@nl-design-system-unstable/tokens-lib/src/design-tokens';
import { useDropzone, type FileWithPath } from 'react-dropzone';
import {
  isFigmaTokens,
  MigratableToken,
  migrateTheme,
  migrateTokensFile,
  prepareMigration,
} from '@nl-design-system-unstable/tokens-lib/src/migrate-theme';
import { kebabName, tokenRef } from '@nl-design-system-unstable/tokens-lib/src/util';
import { useCallback, useEffect, useState } from 'react';
import utrechtTokens from '@utrecht/component-library-design-tokens/dist/tokens.json';
import { DropTarget } from './DropTarget';
import { ButtonLink, ButtonGroup, CodeBlock } from '@utrecht/component-library-react/dist/css-module';
import { Paragraph } from '@amsterdam/design-system-react';

export interface DesignTokensTableProps {
  tokens: StyleDictionaryTree;
}

export const DesignTokensMigration = ({ tokens }: DesignTokensTableProps) => {
  const metadataTokens = utrechtTokens as unknown as StyleDictionaryTree;
  const defaultFilename = 'tokens.json';
  let [inputTokens, setInputTokens] = useState(tokens);

  const [migratableTokens, setMigratableTokens] = useState<MigratableToken[]>([]);
  const [migrated, setMigrated] = useState<object | null>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [filename, setFilename] = useState<string>(defaultFilename);

  const deprecatedTokens: StyleDictionaryDesignToken[] = [];
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFilename(defaultFilename);
    // Do something with the files
    acceptedFiles
      .filter((file) => /\.json$/i.test(file.path || ''))
      .forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            const json = JSON.parse(reader.result);
            setInputTokens(json);

            if (typeof file.path === 'string') {
              setFilename(file.path);
            }
          }
        };
        reader.readAsText(file);
      });
  }, []);

  // React Dropzone documentation:
  // https://react-dropzone.js.org
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    const { migratableTokens } = prepareMigration(inputTokens, metadataTokens);

    const migrated = isFigmaTokens(inputTokens)
      ? migrateTokensFile(inputTokens, metadataTokens)
      : migrateTheme(inputTokens, metadataTokens);

    setMigratableTokens(migratableTokens);
    setMigrated(migrated);
    setBlobUrl(URL.createObjectURL(new Blob([JSON.stringify(migrated, null, 2)], { type: 'text/json' })));
  }, [inputTokens]);

  return (
    <>
      <h2>{filename}</h2>
      <DesignTokensMigrationPresentation migratableTokens={migratableTokens} deprecatedTokens={deprecatedTokens} />
      <div {...getRootProps()}>
        <DropTarget dropEffect={isDragActive ? 'copy' : undefined}>
          <input {...getInputProps()} />
          <Paragraph>Drop your own file here!</Paragraph>
        </DropTarget>
      </div>
      {migratableTokens.length ? (
        <>
          <h2>Your new design tokens file</h2>
          {blobUrl ? (
            <ButtonGroup>
              <ButtonLink appearance="primary-action" href={blobUrl} download={filename}>
                Download JSON
              </ButtonLink>
            </ButtonGroup>
          ) : null}
          <CodeBlock>{JSON.stringify(migrated, null, 2)}</CodeBlock>
        </>
      ) : null}
    </>
  );
};

export interface DesignTokensTablePresentationProps {
  migratableTokens: MigratableToken[];
  deprecatedTokens: StyleDictionaryDesignToken[];
}

export const DesignTokensMigrationPresentation = ({
  migratableTokens,
  deprecatedTokens,
}: DesignTokensTablePresentationProps) => {
  return (
    <>
      {migratableTokens.length ? (
        <table>
          <caption>Tokens that will migrated</caption>
          <thead>
            <tr>
              <th>Old name</th>
              <th>New name</th>
            </tr>
          </thead>
          <tbody>
            {migratableTokens.map(({ oldPath, newPath }, index) => {
              // const value = getTokenValue(token);
              return (
                <tr key={index}>
                  <th>
                    <code>{kebabName(oldPath)}</code>
                  </th>
                  <td>
                    <code>{kebabName(newPath)}</code>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>{'✅ This theme is to date! 0 tokens need to be migrated.'}</p>
      )}
      <h3>Deprecated tokens</h3>
      {deprecatedTokens.length ? (
        <>
          <p>The following tokens are deprecated without migration path. You should probably remove these tokens:</p>
          <ul>
            {deprecatedTokens.map((token, index) => (
              <li key={index}>
                <code>{tokenRef(token.path)}</code>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>{'✅ This theme is to date! 0 deprecated tokens are used.'}</p>
      )}
    </>
  );
};
