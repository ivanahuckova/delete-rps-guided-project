import React from 'react';
import Header from './Header';
import History from './History';
import MainBoard from './MainBoard';
import WeaponSelector from './WeaponSelector';

export default class Container extends React.Component {
  render() {
    // container holds state of application
    return (
      <div className="container">
        <Header />
        <History />
        <MainBoard />
        <WeaponSelector />
      </div>
    );
  }
}
