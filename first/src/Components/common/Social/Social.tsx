import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Social.css';
import data from './SocialData.json';
import { SocialItem } from './Item/Social-Item';

const cnSocial = cn('Social');

export interface ISocialProps {
  className?: string;
}

export const Social: React.SFC<ISocialProps> = (props) => {
  const socialItems = data.map((item) => (
    <SocialItem
      key={item.type}
      type={item.type}
      link={item.link}
      title={item.title}
    />
  ));

  return (
    <div className={cnSocial()}>{socialItems}</div>
  );
};
