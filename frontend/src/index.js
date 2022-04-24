import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Admin from "./Admin";
import Login from "./pages/admin/Login";
import FrontendTemplate from "./layout/FrontendTemplate";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import "./i18n";

ReactDOM.render(
  <Suspense fallback="loading">
    <Router>
      <Switch>
        <Route exact path="/admin/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/">
          <FrontendTemplate>
            <Route path="/" exact component={Home} />
          </FrontendTemplate>
        </Route>
      </Switch>
    </Router>
  </Suspense>,
  document.getElementById('root')
);