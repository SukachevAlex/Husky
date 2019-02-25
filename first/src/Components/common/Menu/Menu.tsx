import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Menu.css';

const cnMenu = cn('Menu');
import data from './MenuData.json';
import { MenuItem } from './Item/Menu-Item';

export interface IMenuProps {
  className?: string;
}

export const Menu: React.SFC<IMenuProps> = ({className}) => {
  const menuItems = data.map((item) => (
    <MenuItem
      key={item.name}
      name={item.name}
      href={item.href}
    />
  ));

  return (
    <div className={`${cnMenu()} ${className}`}>{menuItems}</div>
  );
}