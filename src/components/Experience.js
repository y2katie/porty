import React, {useState} from "react"
import { Grid, Image, Button, Header } from 'semantic-ui-react'
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'

const Experience = () => {
  return (
<Grid columns={3} stackable container className="experience" >
  <Grid.Row>
    <Grid.Column>
      <h3>  Nestio <br /> 2017-2020 </h3>
    </Grid.Column>
    <Grid.Column>
      <h3> Web & Product Design </h3>
    </Grid.Column>
    <Grid.Column>
      <p> Product designer and digital creative, specializing in ui/us brigital creative, specializing in ui/uanding and digital designs </p>
    </Grid.Column>
  </Grid.Row>

  <Grid.Row>
    <Grid.Column>
      <h3>  Nestio <br /> 2017-2020 </h3>
    </Grid.Column>
    <Grid.Column>
      <h3> Web & Product Design </h3>
    </Grid.Column>
    <Grid.Column>
      <p> Product designer and digital creative, specializing in ui/us brigital creative, specializing in ui/uanding and digital designs </p>
    </Grid.Column>
  </Grid.Row>

  <Grid.Row>
    <Grid.Column>
      <h3>  Nestio <br /> 2017-2020 </h3>
    </Grid.Column>
    <Grid.Column>
      <h3> Web & Product Design </h3>
    </Grid.Column>
    <Grid.Column>
      <p> Product designer and digital creative, specializing in ui/us brigital creative, specializing in ui/uanding and digital designs </p>
    </Grid.Column>
  </Grid.Row>
</Grid>
)

}

export default Experience
