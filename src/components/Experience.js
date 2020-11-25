import React, {useState} from "react"
import Explainer from "./Explainer";
import { Grid, Image, Button, Header } from 'semantic-ui-react'
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'

const Experience = () => {
  return (
    <>
    <Explainer header="Experience" />
    <Grid columns={3} stackable className="experience" >
    <Grid.Row>
      <Grid.Column>
        <h3> Intelligent Communications </h3> <p> 2020 - Present </p>
      </Grid.Column>
      <Grid.Column>
        <h3> Frontend Developer | Product Design </h3>
      </Grid.Column>
      <Grid.Column>
      <b> Responsiblities Include: </b>
        <p> Designed & developed web applications. Delivered high fidelity designs, prototypes for mainly focusing on
    dashboard for a food delivery service. Conduct usability testing, contextual inquiry and translate
    research insights into workable user interfaces. </p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <h3>  Fashion Insititute Technology</h3>  <p>2019-Present </p>
      </Grid.Column>
      <Grid.Column>
        <h3> Adjunct UX Professor </h3>
      </Grid.Column>
      <Grid.Column>
        <b> Responsiblities Include: </b>
        <p> Created engaging lesson plans with a focus on user testing
    and market research.Facilitated class instruction & evaluated student
    performance. </p>
      </Grid.Column>
    </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <h3>  Nestio </h3> <p> 2017-2020 </p>
        </Grid.Column>
        <Grid.Column>
          <h3> Web Development | Product Design </h3>
        </Grid.Column>
        <Grid.Column>
        <b> Responsiblities Include: </b>
          <p> Designed & developed web applications. Delivered high fidelity designs, prototypes for mainly focusing on
    dashboard for a food delivery service. Conduct usability testing, contextual inquiry and translate
    research insights into workable user interfaces. </p>
        </Grid.Column>
      </Grid.Row>


      <Grid.Row>
        <Grid.Column>
          <h3>  Townsquare Media </h3> <p> 2016-2017 </p>
        </Grid.Column>
        <Grid.Column>
          <h3> Visual Designer </h3>
        </Grid.Column>
        <Grid.Column>
        <b> Responsiblities Include </b>
          <p>   Lead art direction of the company and worked closely with
    stakeholders to translate business requirements into actual
    design. Create assets for social media marketing, EDMs and pitch deck. Collaboraed with internal teams to define user interface
    requirements </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ffffff" fill-opacity="1" d="M0,192L40,176C80,160,160,128,240,112C320,96,400,96,480,133.3C560,171,640,245,720,234.7C800,224,880,128,960,101.3C1040,75,1120,117,1200,133.3C1280,149,1360,139,1400,133.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg>
</>
)

}

export default Experience
