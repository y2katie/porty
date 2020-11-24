import React from 'react'
import { Link } from "react-router-dom";

import { Grid, Image, Container } from 'semantic-ui-react'

const Testing = () => (
  <Container>
  <Grid stackable>
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
    <h3> Cortland Live Chat</h3>
    <Link to="/cortland">
      <Image src='69.png' />
    </Link>
    </Grid.Column>

      <Grid.Column>
        <h3> Herald Towers </h3>
          <Link to="/heraldtowers">
        <Image src='29.png' />
        </Link>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
      <Grid.Column>
      <Link to="/nicejewlery">
        <h3> Nice Jewlery </h3>
        <Image src='27.png' />
      </Link>
      </Grid.Column>
      <Grid.Column>
      <h3> Baked</h3>
        <Image src='59.png' />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
    <Grid.Column>
    <h3> One Percent </h3>
    <Link to="/onepercent">
      <Image src='62.png' />
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
