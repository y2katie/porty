import React from "react";
import Header from "./Header"
import ImageCopy from "./ImageCopy"
import Experience from "./Experience"
import Port from "./Port";
import Explainer from "./Explainer";
import Spring from "./Spring";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Spring />
        <ImageCopy />
        <Explainer />
        <Experience />
        <Port />


      </div>
    );
  }
}

export default App;
