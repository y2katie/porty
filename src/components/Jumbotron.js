import React from "react";
import { Header, Grid, Image, Button } from 'semantic-ui-react'

const Jumbotron = () => (
  <Grid className="jumbotron">
      <Grid.Column width={1}>
      </Grid.Column>
      <Grid.Column width={5}>
          <Header size='huge'>Hello, I'm Katie Jordan</Header>
          <Button>Click Here</Button>
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='https://cdn.dribbble.com/users/3281732/screenshots/7101536/media/d6a03bae1ed4eb3776814d906399c0ab.jpg' />
      </Grid.Column>

    </Grid>
)

export default Jumbotron
