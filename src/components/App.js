import React from "react";
import Header from "./Header"
import Jumbotron from "./Jumbotron"
import ImageCopy from "./ImageCopy"
import Experience from "./Experience"
import Port from "./Port";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
        <ImageCopy />
        <Experience />
        <Port />

      </div>
    );
  }
}

export default App;
