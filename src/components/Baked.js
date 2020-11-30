import React, {useState} from "react";
import ProjectDescription from "./ProjectDescription";
import { render } from 'react-dom';
import { useTrail, a } from 'react-spring'
import { Header, Grid, Image, Button } from 'semantic-ui-react'


export default function Baked() {
  return(
    <ProjectDescription
      projectHeader = "Baked"
      projectExplainer= "A dating app for baked goods looking to meet, mingle and who are single. Any baked good with a sugar content about 80% is welcome on our dating platform. No gluten free products allowed, sorry."
      link="https://enigmatic-refuge-86110.herokuapp.com"
      img = "84.png"
      problem="Problem"
      problemContent="Image you're a little lemon square out in SoHo and you get the urge for a Macaron. Now you dont have to worry - Baked has got you covered."
      solution="Solution"
      solutionContent="Swipe through millions of appetizing desserts until you find one you like!"
      img2 = "87.png"

    />
  )
}
