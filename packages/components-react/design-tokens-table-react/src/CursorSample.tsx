export interface CursorSampleProps {
  cursor: string;
}

export const CursorSample = ({ cursor }: CursorSampleProps) => {
  return (
    <span
      className="cursor-sample"
      style={{
        cursor,
      }}
    ></span>
  );
};
