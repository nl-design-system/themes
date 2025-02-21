import { DataBadge, DataBadgeProps } from '@utrecht/component-library-react/dist/css-module';

export const SubtleBadge = ({ ...props }: DataBadgeProps) => {
  return <DataBadge className="subtle-badge" {...props} />;
};
