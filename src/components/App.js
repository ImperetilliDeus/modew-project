import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import {authService} from "fbase";



function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  },[]);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn}/>:<h1>초기화 중...</h1>}
      {/* <AppRouter/> */}
      <footer>
        &copy; {new Date().getFullYear()} MODEW
      </footer>
    </>

  );

}

export default App;
