import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Header from "./Header"
import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'
import OnlineLeasing from './OnlineLeasing'
import OnlineAgent from './OnlineAgent'
import OnePercent from './OnePercent'
import NiceJewlery from './NiceJewlery'
import HeraldTowers from './HeraldTowers'
import Cortland from './Cortland'




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
              <Route path="/onepercent" component={OnePercent} />
              <Route path="/onlineagent" component={OnlineAgent} />
              <Route path="/heraldtowers" component={HeraldTowers} />
              <Route path="/nicejewlery" component={NiceJewlery} />
              <Route path="/cortland" component={Cortland} />


             </div>
       </HashRouter>

    );
  }
}

export default App;
