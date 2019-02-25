import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Info.css';

const cnInfo = cn('Info');

export interface IInfoProps {
  className?: string;
}

export const Info: React.SFC<IInfoProps> = ({className}) => (
  <div className={`${cnInfo()} ${className}`}>
    <div className={cnInfo('Date')}>september 16-19, 2014</div>
    <div className={cnInfo('Address')}>moscow, iec / crocus wxpo</div>
  </div>
);
