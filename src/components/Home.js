import React from "react"
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
