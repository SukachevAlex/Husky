import { cn } from '@bem-react/classname';
import * as React from 'react';

import './LangSwitcher.css';

const cnLangSwitcher = cn('LangSwitcher');

export interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.SFC<ILangSwitcherProps> = ({className}) => (
  <div className={`${cnLangSwitcher()} ${className}`}>
    <div className={cnLangSwitcher('Item', {'active': true})}>English</div>
    <div className={cnLangSwitcher('Separator')}></div>
    <div className={cnLangSwitcher('Item')}>Russian</div>
  </div>
);
