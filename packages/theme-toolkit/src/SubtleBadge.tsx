/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { DataBadge, DataBadgeProps } from '@utrecht/component-library-react/dist/css-module';
import './SubtleBadge.css';

export const SubtleBadge = ({ ...props }: DataBadgeProps) => {
  return <DataBadge className="subtle-badge" {...props} />;
};
