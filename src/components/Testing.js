import React from 'react'
import { Link } from "react-router-dom";

import { Grid, Image, Container } from 'semantic-ui-react'

const Testing = () => (
  <Container>
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src='test.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='baked.jpg' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src='test.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='baked.jpg' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
      <Grid.Column>
      <Link to="/onlineleasing">

        <Image src='test.png' />
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Image src='baked.jpg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  )

export default Testing
