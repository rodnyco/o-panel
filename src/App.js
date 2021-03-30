import { useState, useEffect } from "react";

import WelcomeWindow from './WelcomeWindow';
import Header from './header/Header';
import './App.css';
import Body from './body/Body';
import Footer from './footer/Footer';

const delay = 20;

function App() {
  const [isActiveApp, setIsActiveApp] = useState({
    active: false,
    timer: null
  });

  const activateApp = () => {
    clearTimeout(isActiveApp.timer);
    setIsActiveApp({
      active: true,
      timer: setTimeout(() => {
        console.log('time');
        setIsActiveApp(false);
      }, delay * 1000)
    });
  }

  return (
    <div className="wrap" onClick={activateApp}>
      <WelcomeWindow show={!isActiveApp.active} />
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
