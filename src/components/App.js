import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Header from "./Header"
import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'
import OnlineLeasing from './OnlineLeasing'


class App extends Component {

  render() {
    return (
      <HashRouter>
            <div className="App">
            <Header />
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/onlineleasing" component={OnlineLeasing} />
             </div>
       </HashRouter>

    );
  }
}

export default App;
