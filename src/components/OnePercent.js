import React, {useState} from "react";
import ProjectDescription from "./ProjectDescription";
import { render } from 'react-dom';
import { useTrail, a } from 'react-spring'
import { Header, Grid, Image, Button } from 'semantic-ui-react'


export default function OnePercent() {
  return(
    <ProjectDescription
      projectHeader = "One Percent"
      projectExplainer="Login:mister@t.com Password:Cockapoo A simplied solution to rent properties. Agents can send a link to potential renters and renters can complete the standard rental process from the comfort of their home."
      link="https://apply.funnelleasing.com/2/login"
      img = "23.png"
      problem="Problem"
      problemContent="Events in JavaScript provide a dynamic interface to the webpage. There are wide variety of events such as user clicking, moving the mouse over an element, etc. Events that occur when the mouse interacts with the HTML document falls under the category of MouseEvent property."
      solution="Solution"
      solutionContent="Events in JavaScript provide a dynamic interface to the webpage. There are wide variety of events such as user clicking, moving the mouse over an element, etc. Events that occur when the mouse interacts with the HTML document falls under the category of MouseEvent property."
      img2 = "24.png"

    />
  )
}
