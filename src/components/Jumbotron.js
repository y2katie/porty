import React from "react";
import { Header, Grid, Image, Button } from 'semantic-ui-react'

import { CSSTransitionGroup } from 'react-transition-group'

const Jumbotron = () => (
  <Grid className="jumbotron" stackable>
      <Grid.Column width={1}>
      </Grid.Column>
      <Grid.Column width={6}>
          <Header size='huge'>Hello, I'm Katie Jordan</Header>
          <p> A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>
           <Button size='large'><a href="KJ_2020.pdf" download> Download Resume </a></Button>

      </Grid.Column>
      <Grid.Column width={9}>
        <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionEnterTimeout={5500}
        transitionLeaveTimeout={4400}>
            <Image key={"one"} className="faces" src='faces.png' size="massive" />
        </CSSTransitionGroup>
      </Grid.Column>

    </Grid>
)

export default Jumbotron
