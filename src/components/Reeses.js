import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";

import { Container, Grid, Segment, Button } from "semantic-ui-react";
import katie from "../assets/images/katie.png";
import reesebg from "../assets/images/reese_bg.png";
import btn from "../assets/images/btn.png";


import reese from "../assets/images/reese.png";
import reeses from "../assets/images/reeses.png";
import button from "../assets/images/button.png";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

// const items = [{reeses},{reese}]

const Reeses = () => (
  <Container fluid>
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
        <img src={reeses} />

        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
        <img  src={"https://media2.s-nbcnews.com/i/newscms/2016_19/1085486/reeses-pieces-peanut-butter-cup-today-20160512-tease-02_0890ce48c8615fd587cf201e1a721e43.png"} />

        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <img  src={"https://www.nicepng.com/png/full/151-1514266_download-reeses-peanut-butter-cup-png.png"} />
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <span style={{ fontSize: "40px" }}>
          <Animator animation={MoveIn(-1000, 0)}><img src={"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F03%2Fchocolate-lovers-packaging-1-1-2000.png"}/> </Animator>
          <Animator animation={MoveIn(1000, 0)}><img src={"https://www.simpleskincare.com/sk-eu/content/dam/brands/breyers/specified_clusterscountries/1717791-077567224804-01.png"}/> </Animator>
          <Animator animation={MoveOut(1000, 0)}><img src={"http://smartlabel.hersheys.com/images/eec613c5-b449-4a52-83b2-4ec32a859f80.png"}/> </Animator>
          <Animator animation={MoveOut(-1000, 0)}><img src={"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F03%2Fchocolate-lovers-packaging-1-1-2000.png"}/></Animator>
        </span>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
        <img src={"http://smartlabel.hersheys.com/images/eec613c5-b449-4a52-83b2-4ec32a859f80.png"}/>
        </Animator>
      </ScrollPage>
    </ScrollContainer>

    <Grid columns="equal" stackable>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column width={8}> <img className="reeses" src={reesebg} /> </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid>

    <Grid columns="equal" stackable>
      <Grid.Column></Grid.Column>
      <Grid.Column width={6}>
        <img className="me" src={katie} />
        <Link to="/illustrations">
          <img className="crown" src={btn} />
        </Link>
        <h3 style={{ textAlign: "center" }}>I am versatile like the reese's. Starting out as a peanut butter cup and trying several different markets for the ever elusive product market fit. I enjoy designing, coding and most things technology. I also enjoy reese's. </h3>
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid>

    <Grid columns="equal" stackable>
      <Grid.Column>
      </Grid.Column>
      <Grid.Column width={8}> <img className="reese" src={reesebg} /> </Grid.Column>
      <Grid.Column>
      </Grid.Column>
    </Grid>
  </Container>
);

export default Reeses;

// <h1 className="katie"> Katie Jordan </h1>
