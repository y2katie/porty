import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

export default class MyRouter extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/app" name="app" component={Home}/>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" name="contact" component={Contact} />
          <Route path="/about" name="about" component={About}/>
          <Route exact path="/jeff" name="jeff" component={Jeff}/>
          <Route name="manageAuthor" path="/manageAuthor/:id" component={ManageAuthorPage} />
        </Switch>
      </div>
    )
  }
}
