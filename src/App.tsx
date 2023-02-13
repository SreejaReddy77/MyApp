import React from 'react';
import logo from './logo.svg';
import './App.css';
import BTStepper from './components/organisms/stepper';
import BTMainPage from './components/pages/MainPage';
import BTThemeProvider from './theme';


function App() {
  const data1=[1,2]
  return (
    <BTThemeProvider>
      <BTMainPage></BTMainPage>
    </BTThemeProvider>
  );
}

export default App;
