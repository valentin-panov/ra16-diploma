import React, { memo } from 'react';
import './Skeleton.css';

export type Props = React.HTMLAttributes<HTMLDivElement>;

export const Skeleton = memo<Props>(({ className, ...props }) => <div {...props} className="skeleton" />);
