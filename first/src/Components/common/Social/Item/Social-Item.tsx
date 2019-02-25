import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Social-Item.css';

const cnSocial = cn('Social');

export interface ISocialItemProps {
  className?: string;
  link?: string;
  title?: string;
  type?: string;
}

export const SocialItem: React.SFC<ISocialItemProps> = ({link, title, type}) => (
  <div className={cnSocial('Item', {'type': type})}>
    <a className={cnSocial('Link')} href={link} title={title} />
  </div>
);
