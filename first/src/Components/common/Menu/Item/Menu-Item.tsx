import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Menu-Item.css';

const cnMenu = cn('Menu');

export interface IMenuItemProps {
  className?: string;
  name?: string;
  href?: string;
}

export const MenuItem: React.SFC<IMenuItemProps> = ({name, href}) => (
  <a className={cnMenu('Item')} href={href}>{name}</a>
);
