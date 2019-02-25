import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Slider.css';
import { SliderItem } from './Item/Slider-Item';
import { SliderArrow } from './Arrow/Slider-Arrow';

const cnSlider = cn('Slider');

export interface ISliderProps {
  className?: string;
}

export interface ISliderState {
  images: string[];
  currentIndex: number;
  translateValue: number;
}

export class Slider extends React.Component<ISliderProps, ISliderState> {
  constructor(props: ISliderProps) {
    super(props)

    this.state = {
      images: [
        "./img/slider/sliderImage_1.jpg",
        "./img/slider/sliderImage_2.jpg"
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;

    this.setState((prevState: ISliderState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + Number(this.slideWidth())
    }))
  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return;
    }

    this.setState((prevState: ISliderState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    const slide = document.querySelector('.Slider-Item');
    return slide ? slide.clientWidth : '';
  }

  render() {
    const sliderImages = this.state.images.map((image, i) => (
      <SliderItem key={i} image={image} />
    ));

    return (
      <div className={cnSlider()}>
        <SliderArrow type='left' onClick={this.goToPrevSlide}/>
        <SliderArrow type='right' onClick={this.goToNextSlide}/>
        <div className={cnSlider('Wrapper')}
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.5s'
          }}>
            {sliderImages}
        </div>
      </div>
    );
  }
}
