import React from 'react';
import NavigationBar from './navigationBar/NavigationBar';
import TopBar from './topBar/TopBar';

const NavbarComponent = () => {
  return (
    <React.Fragment>
      <TopBar />
      <NavigationBar />
    </React.Fragment>
  )
}

export default NavbarComponent;
