import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "";
import HomePage from './home';
import Aboutuspage from './Aboutuspage';
export  function Routing() {
  return (
 
      <div>
       
          <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Aboutuspage" component={Aboutuspage} />
      </Switch>
    </Router>
      </div>
   
  );
}

