import React from 'react'
import { Link } from "react-router-dom";

import { Grid, Image, Container } from 'semantic-ui-react'

const Testing = () => (
  <Container  stackable>
  <Grid>
  <h1 center> Portfolio </ h1>

    <Grid.Row columns={2}>
      <Grid.Column>
        <h3> Online Leasing - Renter</h3>
        <Link to="/onlineleasing">
          <Image src='waverly.png' />
        </Link>
      </Grid.Column>
      <Grid.Column>
        <h3> Online Leasing - Agent</h3>
        <Link to="/onlineagent">
          <Image src='30.png' />
        </Link>
      </Grid.Column>

    </Grid.Row>
    <Grid.Row columns={2}>
    <Grid.Column>
    <h3> One Percent </h3>
    <Link to="/onepercent">
      <Image src='25.png' />
    </Link>
    </Grid.Column>

      <Grid.Column>
        <h3> Herald Towers </h3>
          <Link to="/nice">
        <Image src='29.png' />
        </Link>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
      <Grid.Column>
      <Link to="/nice">
        <h3> Nice Jewlery </h3>
        <Image src='27.png' />
      </Link>
      </Grid.Column>
      <Grid.Column>
      <h3> Baked</h3>

        <Image src='51.png' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
      <Grid.Column>
      <Link to="/nice">
        <h3> Delivered</h3>
        <Image src='52.png' />
      </Link>
      </Grid.Column>
      <Grid.Column>
      <h3> Kanye</h3>

        <Image src='kanye.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  )

export default Testing
