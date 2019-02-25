import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Logo.css';
import logo from './logo.jpg';

const cnLogo = cn('Logo');

export interface ILogoProps {
  className?: string;
}

export const Logo: React.SFC<ILogoProps> = (props) => (
  <div className={cnLogo()}>
    <a className={cnLogo('Link')} href="#">
      <img className={cnLogo('Image')} src={logo} alt="Международный Российский Туристический Форум ОТДЫХ" />
    </a>
  </div>
);
