import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Slider-Item.css';

const cnSlider = cn('Slider');

export interface ISliderItemProps {
  className?: string;
  image?: string;
}

export const SliderItem: React.SFC<ISliderItemProps> = ({image}) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%'
  }

  return (
    <div className={cnSlider('Item')} style={styles}></div>
  );
};