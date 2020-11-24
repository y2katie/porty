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
      projectExplainer="Working with the Herald Towers marketing team to come up with a site that encompassed their brand and provided a succint functionality to their users."
      link="https://www.heraldtowers.com/"
      img = "65.png"
      problem="Problem"
      problemContent="Renting an apartment in a market like New York City was always a time sensitive problem. Gatering documents, staying ontop of roommates to submit documents, submitting bank statements, inviting guarantors, etc is a long winded process. "
      solution="Solution"
      solutionContent="Online Leasing gives renters an easier way to rent an apartment. By filling out the app online in the comfort of their home, it makes reanting an apartment almost enjoyable."
      img2 = "67.png"

    />
    </Container>
  )
}
