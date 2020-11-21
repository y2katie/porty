import React, { Component } from 'react';
import ImageCopy from "./ImageCopy"
import Starter from "./Starter"
import Experience from "./Experience"
import Testing from "./Testing"




class Home extends React.Component{

    render(){

        return(
          <React.Fragment>
            <Starter />
            <ImageCopy />
            <Experience />
            <Testing />
          </React.Fragment>

)}};

export default Home;
