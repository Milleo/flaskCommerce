import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact element={<Home />} />
    </Switch>
    <Footer />
  </Router>,
  document.getElementById('root')
);