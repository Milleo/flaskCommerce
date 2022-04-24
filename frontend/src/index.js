import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/admin/Products";
import ProductsForm from "./pages/admin/ProductsForm";
import Admin from "./Admin";
import FrontendTemplate from "./layout/FrontendTemplate";
import AdminTemplate from "./layout/AdminTemplate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import "./i18n";

ReactDOM.render(
  <Suspense fallback="loading">
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminTemplate>
            <Route exact path="/admin/products" component={Products} />
            <Route exact path="/admin/products/create" component={ProductsForm} />
          </AdminTemplate>
        </Route>
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