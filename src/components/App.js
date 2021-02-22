import React, { Component } from 'react';
import { HashRouter, Route, Router, Link, Switch } from "react-router-dom";
import Header from "./Header"
import Home from './Home'
import Portfolio from './Portfolio'
import OnlineLeasing from './OnlineLeasing'
import OnlineAgent from './OnlineAgent'
import OnePercent from './OnePercent'
import NiceJewlery from './NiceJewlery'
import HeraldTowers from './HeraldTowers'
import Cortland from './Cortland'
import Baked from './Baked'
import Reeses from './Reeses'



class App extends Component {

  render() {
    return (

      <HashRouter>
            <div className="App">
              <Route exact path="/"  component={Reeses} />
              <Route path="/home" component={Home} />
              <Route path="/onlineleasing" component={OnlineLeasing} />
              <Route path="/onepercent" component={OnePercent} />
              <Route path="/onlineagent" component={OnlineAgent} />
              <Route path="/heraldtowers" component={HeraldTowers} />
              <Route path="/nicejewlery" component={NiceJewlery} />
              <Route path="/cortland" component={Cortland} />
              <Route path="/baked" component={Baked} />
             </div>
       </HashRouter>
  );

  }
}

export default App;
