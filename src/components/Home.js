import React from "react"
import ProjectDescription from "./ProjectDescription"
import TimingExample from "./test"
import Work from "./Work"
import Header from "./Header"
import Illustrations from "./Illustrations"


class Home extends React.Component{
  render() {
    return(
      <>
        <Header />
        <Work />
        <Illustrations />
        </>
    )
  }
}

export default Home
