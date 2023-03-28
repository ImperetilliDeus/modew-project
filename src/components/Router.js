import React, { useState } from 'react';
import {
  HashRouter as Router, Route, Routes
} from "react-router-dom";
import Auth from "../routes/Auth";
import EditProfile from "../routes/EditProfile";
import Home from "../routes/Home";
import Profile from "../routes/Profile";


const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route>
          {isLoggedIn ? (
            <>
              <Route path='/' element={<Home/>} />
            </>
            ) : (
              <Route path='/' element={<Auth/>} />
          )}
        </Route>
      </Routes>
    </Router>
  );
  }
export default AppRouter;