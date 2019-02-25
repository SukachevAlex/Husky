import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Header.css';
import { Logo } from '../Logo/Logo';
import { Info } from '../Info/Info';
import { Social } from '../Social/Social';
import { LangSwitcher } from '../LangSwitcher/LangSwitcher';

const cnHeader = cn('Header');

export interface IHeaderProps {
  className?: string;
}

export const Header: React.SFC<IHeaderProps> = (props) => (
  <div className={cnHeader()}>
    <div className={cnHeader('Container')}>
      <div className={cnHeader('Left')}>
        <Logo />
        <Info className={cnHeader('Info')}/>
      </div>
      <div className={cnHeader('Right')}>
        <Social />
        <LangSwitcher className={cnHeader('LangSwitcher')}/>
      </div>
    </div>
  </div>
);
