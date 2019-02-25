import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Slider-Arrow.css';

const cnSlider = cn('Slider');

export interface ISliderArrowProps {
  className?: string;
  type?: string;
  onClick?: any;
}

export const SliderArrow: React.SFC<ISliderArrowProps> = ({type, onClick}) => (
  <div className={cnSlider('Arrow', {'type': type})} onClick={onClick}></div>
);