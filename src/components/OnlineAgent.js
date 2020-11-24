import React, {useState} from "react";
import ProjectDescription from "./ProjectDescription";
import { render } from 'react-dom';
import { useTrail, a } from 'react-spring'
import { Header, Container,Grid, Image, Button } from 'semantic-ui-react'


export default function OnlineAgent() {
  return(
    <Container>
    <ProjectDescription
      projectHeader = "Online Leasing - Agent Experience"
      projectExplainer="Login:mister@t.com Password:Cockapoo A simplied solution to rent properties. Agents can send a link to potential renters and renters can complete the standard rental process from the comfort of their home."
      link="https://apply.funnelleasing.com/2/login"
      img = "54.png"
      problem="Problem"
      problemContent="Renting an apartment in a market like New York City was always a time sensitive problem. Gatering documents, staying ontop of roommates to submit documents, submitting bank statements, inviting guarantors, etc is a long winded process. "
      solution="Solution"
      solutionContent="Online Leasing gives renters an easier way to rent an apartment. By filling out the app online in the comfort of their home, it makes reanting an apartment almost enjoyable."
      img2 = "56.png"

    />
    </Container>
  )
}
