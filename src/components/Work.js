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
import baked from "../assets/images/baked.png";
import agent from "../assets/images/agent.png";


const src =
  "https://i.pinimg.com/originals/b9/c9/76/b9c9764583f7f5bdc1de5413bbb6952e.jpg";

const Work = () => (
  <Container responsive fluid style={{ marginTop: "50px" }}>
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={14} tablet={8} computer={4}>
          <Header />
        </Grid.Column>

        <Grid.Column style={{padding:"20px"}} mobile={16} tablet={8} computer={12}>
          <Card.Group itemsPerRow={3}>
            <Card raised>
            <Image src={yoga} wrapped ui={false} />
            </Card>
            <Card raised image={star} />
            <Card raised image={roar} />
            <Card raised image={bb} />
            <Card raised image={baked} />
            <Card raised image={roar} />
            <Card raised image={agent} />
            <Card raised image={star} />
            <Card raised image={roar} />
            <Card raised image={bb} />
            <Card raised image={src} />
            <Card raised image={src} />
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Work;
