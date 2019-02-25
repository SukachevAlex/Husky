import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Main.css';
import { Resort } from '../Resort/Resort';

const cnMain = cn('Main');

export interface IMainProps {
  className?: string;
}

export const Main: React.SFC<IMainProps> = ({className}) => (
  <div className={`${cnMain()} ${className}`}>
    <div className={cnMain('Container')}>
      <Resort />
    </div>
  </div>
);
