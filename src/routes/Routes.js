import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DashboardPage from "../page/dashboard";


function App() {
  return (
 <BrowserRouter>
 <Switch>
    <Route path="/" component={DashboardPage}/>
 </Switch>
 </BrowserRouter>
  );
}

export default App;