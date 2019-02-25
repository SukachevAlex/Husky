import { cn } from '@bem-react/classname';
import React, { Component } from 'react';

import './App.css';
import './fonts/fonts.css';
import { Header } from './Components/common/Header/Header';
import { Menu } from './Components/common/Menu/Menu';
import { Slider } from './Components/common/Slider/Slider';
import { Footer } from './Components/common/Footer/Footer';
import { Main } from './Components/common/Main/Main';

const cnPage = cn('Page');

class App extends Component {
  render() {
    return (
      <div className={cnPage()}>
        <Header />
        <div className={cn('Menu')('Wrapper')}>
          <Menu className={cnPage('Menu')} />
        </div>
        <Slider className={cnPage('Slider')}/>
        <Main className={cnPage('Main')}/>
        <div className={cn('Footer')('Wrapper')}>
          <Footer className={cnPage('Footer')}/>
        </div>
      </div>
    );
  }
}

export default App;
