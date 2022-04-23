import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/admin/Products";
import Admin from "./Admin";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/admin" exact component={Admin} />
      <Route path="/admin/products" component={Products} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
);