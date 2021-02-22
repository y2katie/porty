import React from "react";
import { Grid, Image } from 'semantic-ui-react'


const Portfolio = () => {
  return(
    <Grid style={{marginTop:"100px"}}>
      <Grid.Row>
        <Grid.Column width={8}>
          <Image src='rosey.jpg' />
        </Grid.Column>
        <Grid.Column width={8}>
          <Image src='images/rosey.jpg' />
        </Grid.Column>
      </Grid.Row>
    </Grid>

  )
}

export default Portfolio
