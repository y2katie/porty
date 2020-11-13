import React from "react";
import Header from "./Header"
import Jumbotron from "./Jumbotron"
import ImageCopy from "./ImageCopy"
import Experience from "./Experience"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
        <ImageCopy />
        <Experience />

      </div>
    );
  }
}

export default App;
