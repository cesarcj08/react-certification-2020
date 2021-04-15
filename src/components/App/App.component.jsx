import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import VideosContextProvider from '../../state/VideosContext';
import ThemeContextProvider from '../../state/ThemeContext';
import Main from '../../pages/Main/index';

function App() {
  return (
    <VideosContextProvider>
      <ThemeContextProvider>
        <NavigationBar></NavigationBar>
        <Main />
      </ThemeContextProvider>
    </VideosContextProvider> 
  );
}

export default App;
