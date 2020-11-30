import React, {useState} from "react";
import ProjectDescription from "./ProjectDescription";
import { render } from 'react-dom';
import { useTrail, a } from 'react-spring'
import { Header, Container,Grid, Image, Button } from 'semantic-ui-react'


export default function HeraldTowers() {
  return(
    <Container>
    <ProjectDescription
      projectHeader = "Hearald Towers"
      projectExplainer="Herald towers is a rental property in Manhattan that offers optimal closet space, a variety of kitchen finishes and a robust amenity offering, are just some of the reasons to call Herald Towers home.."
      link="https://www.heraldtowers.com/"
      img = "96.png"
      problem="Problem"
      problemContent="Herald Towers was looking for a software that could manage their leads as well as show availabilities to potential renters. "
      solution="Solution"
      solutionContent="Working with the Herald Towers marketing team to come up with a site that encompassed their brand and provided a succint functionality to their users."
      img2 = "95.png"

    />
    </Container>
  )
}
