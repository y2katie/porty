import React from "react";
import {Link} from "react-router-dom"
import {Spring} from 'react-spring/renderprops'

import { Container, Grid, Segment, Button } from 'semantic-ui-react'
import katie from "../assets/images/katie.png";
import reese from "../assets/images/reese.png";
import reeses from "../assets/images/reeses.png";
import button from "../assets/images/button.png";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

// const items = [{reeses},{reese}]


const Reeses = () => (
  <Container fluid>
  <ScrollContainer>
    <ScrollPage page={1}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <img src={reeses} />
      </Animator>
    </ScrollPage>
  </ScrollContainer>


  <Grid columns='equal'>
     <Grid.Column>
       <img className="reese" src={reese} />
     </Grid.Column>
     <Grid.Column width={8}>

     </Grid.Column>
     <Grid.Column>
       <img className="reeses" src={reeses} />
     </Grid.Column>
   </Grid>

   <Grid columns='equal'>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column width={8}>
      <img className="me" src={katie} />
      <Link to="/illustrations">
      <img className="crown" src={button} />
      </Link>
      <p style={{textAlign:"center"}}> lorem loremloremlorem </p>

      </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid>

    <Grid columns='equal'>
       <Grid.Column>
       <img className="reeses" src={reeses} />
       </Grid.Column>
       <Grid.Column width={8}>

       </Grid.Column>
       <Grid.Column>
       <img className="reese" src={reese} />
       </Grid.Column>
     </Grid>



  </Container>
)

export default Reeses
