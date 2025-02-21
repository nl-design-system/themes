export interface FontFamilySampleProps {
  fontFamily: string;
}

export const FontFamilySample = ({ fontFamily }: FontFamilySampleProps) => {
  return (
    <span
      role="img"
      aria-label={fontFamily}
      className="font-family-sample"
      style={{
        fontFamily,
      }}
    >
      Aa
    </span>
  );
};
