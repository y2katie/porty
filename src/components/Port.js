import React from "react";
import { Header, Grid, Image, Button } from 'semantic-ui-react'

const Port = () => (
  <Grid className="stackable port">
      <Grid.Column width={8}>
      <Header size='large'>A paragraph is a self-contained unit of discourse</Header>
        <p> Product designer and digital creative, specializing in ui/us brigital creative, specializing in ui/uanding and digitaling in ui/us brigital creative, specializing in ui/uanding and digital designs </p>
        <Image src='image.jpg' bordered />
      </Grid.Column>

      <Grid.Column width={8}>
        <Image src='2.jpg' bordered />
      </Grid.Column>

      <Grid.Column width={8}>
        <Image src='3.jpg' bordered />
      </Grid.Column>

      <Grid.Column width={8} className="four">
        <Image src='3.jpg' bordered  />
      </Grid.Column>

      <Grid.Column width={8}>
        <Image src='2.jpg' bordered />
      </Grid.Column>

      <Grid.Column width={8} className="five">
        <Image src='image.jpg' bordered />
      </Grid.Column>


    </Grid>
)

export default Port
