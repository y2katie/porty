import React, { Component } from 'react';
import ImageCopy from "./ImageCopy"
import Starter from "./Starter"
import Experience from "./Experience"
import Testing from "./Testing"
import Illustrations from "./Illustrations"




class Home extends React.Component{

    render(){

        return(
          <React.Fragment>
            <Starter />
            <ImageCopy />
            <Illustrations />
            <Experience />
            <Testing />
          </React.Fragment>

)}};

export default Home;
