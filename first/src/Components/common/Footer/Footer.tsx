import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Footer.css';

const cnFooter = cn('Footer');

export interface IFooterProps {
  className?: string;
}

export const Footer: React.SFC<IFooterProps> = ({className}) => (
  <footer className={`${cnFooter()} ${className}`}>
    <div className={cnFooter('Copyright')}>© 1995-2013 | Euroexpo company.</div>
    <a className={cnFooter('CompanyName')} href='#'>OTDYKH Organizer</a>
  </footer>
);
