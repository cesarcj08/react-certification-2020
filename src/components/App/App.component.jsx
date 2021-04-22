import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import VideosContextProvider from '../../state/VideosContext';
import ThemeContextProvider from '../../state/ThemeContext';
import Main from '../../pages/Main/index';
import { BrowserRouter } from 'react-router-dom';
import SideMenu from '../../components/SideMenu/SideMenu';

function App() {
  return (
    <VideosContextProvider>
      <ThemeContextProvider>
      <BrowserRouter>
          <SideMenu />
          <NavigationBar></NavigationBar>
          <Main />
        </BrowserRouter>
      </ThemeContextProvider>
    </VideosContextProvider> 
  );
}

export default App;
