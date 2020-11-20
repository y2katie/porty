import React, { Component } from 'react';
import ImageCopy from "./ImageCopy"
import Starter from "./Starter"
import Experience from "./Experience"



class Home extends React.Component{

    render(){

        return(
          <React.Fragment>
            <Starter />
            <ImageCopy />
            <Experience />
          </React.Fragment>

)}};

export default Home;
