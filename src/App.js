import React, { Component } from 'react';
import { Route, Link, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import Twitter from "./pages/Twitter";
import Google from "./pages/Google";

class App extends Component {
  render() {
    return(
    <HashRouter>
    <div>
      <ul className="header">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pages/Twitter">Twitter</Link></li>
        <li><Link to="/pages/Google">Google</Link></li>
      </ul>
      <hr/>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/pages/Twitter" component={Twitter} />
      <Route path="/pages/Google" component={Google} />
    </div>
    </div>
  </HashRouter>
  );
  }
}
export default App; 