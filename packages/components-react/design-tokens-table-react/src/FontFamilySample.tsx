export interface FontFamilySampleProps {
  fontFamily: string;
}

export const FontFamilySample = ({ fontFamily }: FontFamilySampleProps) => {
  return (
    <span
      role="image"
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
