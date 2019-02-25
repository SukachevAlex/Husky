import { cn } from '@bem-react/classname';
import React, { Component } from 'react';

import './App.css';
import './fonts/fonts.css';
import { Header } from './Components/common/Header/Header';
import { Menu } from './Components/common/Menu/Menu';

const cnPage = cn('Page');

class App extends Component {
  render() {
    return (
      <div className={cnPage()}>
        <Header />
        <div className={cnPage('Container')}>
          <Menu className={cnPage('Menu')} />
        </div>
      </div>
    );
  }
}

export default App;
