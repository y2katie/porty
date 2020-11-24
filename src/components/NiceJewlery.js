import React, {useState} from "react";
import ProjectDescription from "./ProjectDescription";
import { render } from 'react-dom';
import { useTrail, a } from 'react-spring'
import { Header, Grid, Image, Button } from 'semantic-ui-react'


export default function NiceJewlery() {
  return(
    <ProjectDescription
      projectHeader = "Nice Jewlery"
      projectExplainer= "The one percent just dont have enough. I wanted to craft an experience solely for those in that marginal category. Some non essentials were yacht and helipad access as well as the ability to make people disappear on a whim."
      link="https://quiet-wildwood-52939.herokuapp.com/"
      img = "25.png"
      problem="Problem"
      problemContent="Winston and Harper IV were having trouble figuring out how to throw their annual hamptons soiree during the pandemic. The pandemic was such a burden on them and their friends, so they wanted an app to help make their lives easier."
      solution="Solution"
      solutionContent="Let them eat cake! This app provides in demand functionality of buying elections, people, islands, countries you name it. You need a net worth of 5.5 mil to buy in, but can you really put a price on exclusivity?"
      img2 = "63.png"

    />
  )
}
