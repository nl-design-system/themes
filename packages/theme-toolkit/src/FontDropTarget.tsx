// eslint-disable-next-line no-unused-vars
import { useDropzone, type FileWithPath } from 'react-dropzone';
import { PropsWithChildren, useCallback, useId, useState } from 'react';
import { DropTarget, DropTargetProps } from './DropTarget';
import { wakamaiFondueFromDataBuffer } from './vendor/wakamai-fondue.js';
import { uniq } from 'lodash';

export interface FontDropTargetProps extends Pick<DropTargetProps, 'appearance'> {
  cssProperty: string;
  defaultFontFamily?: string;
}

interface FontProps {
  filename?: string;
  fontFamily: string;
  url: string;
  fontStyle?: string;
  fontWeight?: number;
}

const createFontStylesheet = ({ fontFamily, fontStyle, fontWeight, url }: FontProps) => `@font-face {
  font-family: '${fontFamily}';
  font-style: ${fontStyle ? fontStyle : 'normal'};
  font-display: swap;
  font-weight: ${fontWeight ? fontWeight : 400};
  src: url(${url}) format('woff2');
}\n`;

export const FontDropTarget = ({
  appearance,
  children,
  cssProperty,
  defaultFontFamily,
}: PropsWithChildren<FontDropTargetProps>) => {
  const [fontStylesheet, setFontStylesheet] = useState<string>('');
  const [fontFamily, setFontFamily] = useState<string>(defaultFontFamily || '');
  const [fontFamilies, setFontFamilies] = useState<string[]>(defaultFontFamily ? [defaultFontFamily] : []);

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    // Do something with the files
    console.log(acceptedFiles);
    const all = acceptedFiles
      .filter((file) => /\.woff2$/i.test(file.path || ''))
      .map((file) => {
        return new Promise<FontProps>((resolve, reject) => {
          const reader = new FileReader();

          reader.onabort = (e) => {
            console.log('file reading was aborted');
            reject(e);
          };

          reader.onerror = (e) => {
            console.log('file reading has failed');
            reject(e);
          };

          reader.onload = async () => {
            if (reader.result instanceof ArrayBuffer) {
              const filename = file.path || '';
              const url = URL.createObjectURL(new Blob([reader.result], { type: 'font/woff2' }));

              const fontStyle = /italic/i.test(filename) ? 'italic' : undefined;
              const match = filename.match(/\d{3}/);
              const fontWeight = match ? parseInt(match[0], 10) : undefined;

              const fondue = await wakamaiFondueFromDataBuffer(reader.result); // as any as Fondue;
              const fontFamily = fondue.summary['Font name'];

              resolve({
                filename: filename || undefined,
                fontFamily,
                url,
                fontWeight,
                fontStyle,
              });
            }
          };
          reader.readAsArrayBuffer(file);
        });
      });
    Promise.all(all).then((fonts) => {
      const stylesheet = fonts.map((font) => createFontStylesheet(font)).join('\n');

      const fontFamilies = uniq([
        ...(defaultFontFamily ? [defaultFontFamily] : []),
        ...fonts.map(({ fontFamily }) => fontFamily),
      ]);

      console.log(fontFamilies);
      setFontFamilies(fontFamilies.sort());

      setFontStylesheet(stylesheet);
      setFontFamily('Example Font');
      if (fontFamilies[0]) {
        setFontFamily(fontFamilies[0]);
      }
    });
  }, []);

  // React Dropzone documentation:
  // https://react-dropzone.js.org
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const selectId = useId();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStylesheet }}></style>
      <p>
        <label htmlFor={selectId}>Current font:</label>
        <select
          id={selectId}
          defaultValue={fontFamily}
          onChange={(evt) => {
            if (evt.target.value) setFontFamily(evt.target.value);
          }}
        >
          {fontFamilies.map((name, index) => (
            <option key={index}>{name}</option>
          ))}
        </select>
      </p>
      <p>Drop your own font file on the example below:</p>
      <div {...getRootProps()}>
        <DropTarget dropEffect={isDragActive ? 'copy' : undefined} appearance={appearance}>
          <input {...getInputProps()} />
          <div style={{ [cssProperty]: fontFamily }}>{children}</div>
        </DropTarget>
      </div>
    </>
  );
};
