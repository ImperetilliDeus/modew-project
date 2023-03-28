import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Join from "../routes/Join";

const AppRouter = () => {
  
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>

{/* {       
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>


          </>

        )}
      </Switch> } */}


      <Route exact path="/Join">
      <Join/>
    </Route>
    <Route exact path="/Auth">
      <Auth/>
    </Route>
    </Router>
  );
};
export default AppRouter;