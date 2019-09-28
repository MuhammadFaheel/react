import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Wellcome,Avater,Clock} from './common';
// import Lifecycle from './component/Lifecycle'
// import { Route , Switch , Router as BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {<header className="App-header">
        {/* <Lifecycle />   */}
        <Clock /> 
        <Wellcome />
        {/* <Avater /> */}
        {/* { <img src={logo} className="App-logo" alt="logo" /> } */}
        
          </header>}
      {/* <router>
          <route exact path="/" component={Home}/>
          <route path="./pages/About" component={About}/>
          <route path="./pages/topics" component={Topics}/>
      </router> */}
    </div>
  );
}

export default App;
