import React from "react";
import { Header, Grid, Image, Button } from 'semantic-ui-react'

import { CSSTransitionGroup } from 'react-transition-group'

const Jumbotron = (props) => (
  <Grid className="jumbotron" stackable>
      <Grid.Column width={1}>
      </Grid.Column>
      <Grid.Column width={6}>

          <Header size='huge' key={2}>Bienvennue</Header>
          <p> Katie Jordan is a full-stack designer with a wide range of skills ranging from graphic design, illustration, UX design, UI design, and front-end development. Katie's recent experience including working in the tech industry with start-ups such as Funnel and In-telligent to create innovative products for real estate and telecommunication. </p>
           <Button size='large'><a href="KJ_2020.pdf" download> Download Resume </a></Button>


      </Grid.Column>
      <Grid.Column width={9}>

            <Image className="faces" src='faces.png' size="massive" />

      </Grid.Column>

    </Grid>
)

export default Jumbotron
