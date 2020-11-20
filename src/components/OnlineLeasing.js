import React, {useState} from "react";
import ProjectDescription from "./ProjectDescription";
import { render } from 'react-dom';
import { useTrail, a } from 'react-spring'
import { Header, Grid, Image, Button } from 'semantic-ui-react'


export default function OnlineLeasing() {
  return(
    <ProjectDescription
      projectHeader = "hello"
      img = "./baked2.jpg"
      img1 = "./rosey.jpg"
      img2 = "./baked2.jpg"
      title="This Article"
      content="Events in JavaScript provide a dynamic interface to the webpage. There are wide variety of events such as user clicking, moving the mouse over an element, etc. Events that occur when the mouse interacts with the HTML document falls under the category of MouseEvent property."
    />
  )
}
