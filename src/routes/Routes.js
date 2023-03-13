import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DashboardPage from "../page/dashboard";
import ProfilePage from "../page/profile";


function App() {
  return (
 <BrowserRouter>
 <Switch>
    <Route path="/dashboard" component={DashboardPage}/>
    <Route path="/profile" component={ProfilePage}/>
 </Switch>
 </BrowserRouter>
  );
}

export default App;