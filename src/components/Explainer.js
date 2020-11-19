import React from "react";
import { Header, Grid, Button } from 'semantic-ui-react'


const Explainer = () => {
  return (
    <>
    <svg className="explainwave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" fill-opacity="1" d="M0,256L24,240C48,224,96,192,144,165.3C192,139,240,117,288,101.3C336,85,384,75,432,69.3C480,64,528,64,576,96C624,128,672,192,720,197.3C768,203,816,149,864,138.7C912,128,960,160,1008,181.3C1056,203,1104,213,1152,202.7C1200,192,1248,160,1296,144C1344,128,1392,128,1416,128L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
    </svg>
    <Grid className="explainer">

    <Grid.Column width={16}>

    <h1 className="heads"> Experience </ h1>
    <Button size='massive' className="explainerButton" > <a href="KJ_2020.pdf" download> Download Resume </a> </ Button>
    </Grid.Column>
  </Grid>
  </>

  )

}

export default Explainer
