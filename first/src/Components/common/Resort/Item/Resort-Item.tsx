import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Resort-Item.css';

const cnResort = cn('Resort');

export interface IResortItemProps {
  className?: string;
  name?: string;
  description?: string;
  link?: string;
  src?: string;
  color?: string;
}

export const ResortItem: React.SFC<IResortItemProps> = ({name, description, link, src, color}) => (
  <div className={cnResort('Item')}>
    <div className={cnResort('Header')}>
      <div className={cnResort('Name')} style={{backgroundColor: color}}>{name}</div>
      <img src={`img/resorts/${src}`} alt={name}/>
    </div>

    <div className={cnResort('Description')}>{description}</div>
    <a className={cnResort('Link')} href={link}>visit website</a>
  </div>
);
