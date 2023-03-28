import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import AppRouter from './Router';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>
        &copy; {new Date().getFullYear()} MODEW
      </footer>
    </>

  );

}

export default App;
