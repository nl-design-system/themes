// eslint-disable-next-line no-unused-vars

export interface ColorExampleProps {
  color: string;
}

export const ColorExample = ({ color }: ColorExampleProps) => (
  <div
    style={{
      backgroundColor: color,
      outline: '1px solid silver',
      display: 'inline-block',
      height: '2em',
      width: '2em',
    }}
  ></div>
);
