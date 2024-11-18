import { OrderedList, OrderedListItem, PreserveData } from '@utrecht/component-library-react/dist/css-module';
import { parseFontFamily } from '@nl-design-system-unstable/tokens-lib/dist/font-family';

export interface FontFamilyDetailsProps {
  value: string | string[];
}

export const FontFamilyDetails = ({ value }: FontFamilyDetailsProps) => {
  const list = Array.isArray(value) ? value : parseFontFamily(value);
  return list.length > 1 ? (
    <details>
      <summary>
        <PreserveData>{list[0]}</PreserveData>
      </summary>
      <OrderedList>
        {list.map((item, index) => (
          <OrderedListItem key={index}>
            <PreserveData>{item}</PreserveData>
          </OrderedListItem>
        ))}
      </OrderedList>
    </details>
  ) : (
    <div>
      <PreserveData>{value}</PreserveData>
    </div>
  );
};
