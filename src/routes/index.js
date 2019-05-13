import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./private";

// Importing pages
import Listing from "../pages/Listing";
import Login from "../pages/Login";
import Signin from "../pages/Signin";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/" component={Listing} />
      <Route path="/login" component={Login} />
      <Route path="/signin" component={Signin} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
