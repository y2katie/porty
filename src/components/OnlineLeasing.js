import React, {useState} from "react";
import ProjectDescription from "./ProjectDescription";
import { render } from 'react-dom';
import { useTrail, a } from 'react-spring'
import { Header, Container,Grid, Image, Button } from 'semantic-ui-react'


export default function OnlineLeasing() {
  return(
    <Container>
    <ProjectDescription
      projectHeader = "Online Leasing"
      projectExplainer="Login:mister@t.com Password:Cockapoo A simplied solution to rent properties. Agents can send a link to potential renters and renters can complete the standard rental process from the comfort of their home."
      link="https://apply.funnelleasing.com/2/login"
      img = "23.png"
      problem="Problem"
      problemContent="Small business owners need a way to talk with their customers, but they don’t always want to give out their personal cell phone number. They need something professional and secure to stay in touch and appear online at all hours. "
      solution="Solution"
      solutionContent="Hiline gives customers a business phone number as the main feature, which users can put on their website, business cards, and social media. They can set office hours for communication, and send customers to a professional voicemail or text messaging when they’re not around.  "
      img2 = "24.png"

    />
    </Container>
  )
}
