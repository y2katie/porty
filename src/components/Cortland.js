import React, {useState} from "react";
import ProjectDescription from "./ProjectDescription";
import { render } from 'react-dom';
import { useTrail, a } from 'react-spring'
import { Header, Grid, Image, Button } from 'semantic-ui-react'


export default function Cortland() {
  return(
    <ProjectDescription
      projectHeader = "Cortland Live Chat"
      projectExplainer= "A feature that was been gaining popularity across industries is live chat. Live chat provides the ability to constantly be in touch with prospect renters regarding answering apartment questions or scheduling tours."
      link="https://cortland.com/apartments/cortland-north-druid-hills/"
      img = "75.png"
      problem="Problem"
      problemContent="How can a company remain available to potential renters 24/7?"
      solution="Solution"
      solutionContent="Companies are moving into a new technological era and embracing all the new features of modern communication. By implenting the live chat widget on their website, agents are able to have the technology filter the clients for them"
      img2 = "77.png"

    />
  )
}
