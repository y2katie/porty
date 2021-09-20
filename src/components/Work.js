import React from "react";
import Header from "./Header";
import CardExampleCard from "./Cards";
import { Menu, Segment, Card } from "semantic-ui-react";
import { Grid, Image, Container } from "semantic-ui-react";


import { Link } from "react-router-dom";
import bb from "../assets/images/bb.jpg";
import roar from "../assets/images/roar.jpg";
import star from "../assets/images/star.png";
import yoga from "../assets/images/yoga.png";
const src = 'https://i.pinimg.com/originals/b9/c9/76/b9c9764583f7f5bdc1de5413bbb6952e.jpg'


const Work = () => (
  <Container fluid style={{ marginTop: "50px" }}>
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header />
        </Grid.Column>

<Grid.Column width={12}>
        <Card.Group itemsPerRow={4}>
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
    <Card raised image={src} />
  </Card.Group>
  </Grid.Column>

      </Grid.Row>
    </Grid>
  </Container>
);

export default Work;
