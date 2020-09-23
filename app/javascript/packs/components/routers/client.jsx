import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./Layout";
import Featured from "./Featured";
import Archives from "./Archives";
import Settings from "./Settings";

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('router-app');
  ReactDOM.render(
    <Router>
      <Layout>
        <Route exact path="/" component={Featured}></Route>
        <Route exact path="/archives" component={Archives}></Route>
        <Route path="/archives/:article" component={Archives}></Route>
        <Route path="/settings/:mode(main|extra)" component={Settings}></Route>
      </Layout>
    </Router>,
  app);
})
