import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Resort.css';
import data from './ResortData.json';
import { ResortItem } from './Item/Resort-Item';

const cnResort = cn('Resort');

export interface IResortProps {
  className?: string;
}

export const Resort: React.SFC<IResortProps> = (props) => {
  const resortItems = data.map((item) => (
    <ResortItem
      key={item.name}
      name={item.name}
      description={item.description}
      link={item.link}
      src={item.src}
      color={item.color}
    />
  ));

  return (
    <div className={cnResort()}>{resortItems}</div>
  );
};
