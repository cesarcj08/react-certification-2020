import React from 'react';
import Home from '../../pages/Home/index';
import NavigationBar from '../NavigationBar/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar></NavigationBar>
      <Home></Home>   
    </React.Fragment> 
  );
}

export default App;
