import React from 'react'
import { Link } from "react-router-dom";

import { Grid, Image, Container } from 'semantic-ui-react'

const Testing = () => (
  <Container>
  <Grid stackable>
  <h1 className="center"> Portfolio </ h1>

    <Grid.Row columns={2}>
      <Grid.Column>
        <h3> Online Leasing - Renter</h3>
        <Link to="/onlineleasing">
          <Image src='93.png' />
        </Link>
      </Grid.Column>
      <Grid.Column>
        <h3> Online Leasing - Agent</h3>
        <Link to="/onlineagent">
          <Image src='94.png' />
        </Link>
      </Grid.Column>

    </Grid.Row>
    <Grid.Row columns={2}>
    <Grid.Column>
    <h3> Cortland Live Chat</h3>
    <Link to="/cortland">
      <Image src='91.png' />
    </Link>
    </Grid.Column>

      <Grid.Column>
        <h3> Herald Towers </h3>
          <Link to="/heraldtowers">
        <Image src='95.png' />
        </Link>
      </Grid.Column>
    </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
        <h3> One Percent </h3>
        <Link to="/onepercent">
          <Image src='101.png' />
        </Link>
        </Grid.Column>
        <Grid.Column>
        <h3> Baked</h3>
        <Link to="/baked">
          <Image src='99.png' />
        </Link>
        </Grid.Column>
      </Grid.Row>
    <Grid.Row columns={2}>

    <Grid.Column>

      <h3> Nice Jewlery </h3>
        <Link to="/NiceJewlery">
        <Image src='3.png' />
        </Link>


    </Grid.Column>
      <Grid.Column>
      <a href="https://kanye-gamma.vercel.app/">
      <h3> Kanye</h3>
        <Image src='4.png' />
      </a>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </Container>
  )

export default Testing
