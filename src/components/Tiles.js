import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import bb from "../assets/images/bb.png";
import baked from "../assets/images/online.png";
import online from "../assets/images/baked.png";
import agent from "../assets/images/agent.png";

const Tiles = () => (
  <Container fluid className="tiles">
    <Grid stackable>
      <Grid.Row columns={4}>
        <Grid.Column className="grow">
            <Image src={bb} />
        </Grid.Column>
        <Grid.Column className="grow">
            <Image src={agent} />
        </Grid.Column>
        <Grid.Column className="grow">
            <Image src={online} />
        </Grid.Column>
        <Grid.Column className="grow">
            <Image src={baked} />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable style={{marginTop:"130px", marginBottom:"130px"}}>
      <Grid.Row columns={4}>
        <Grid.Column className="grow">
            <Image src={bb} />
        </Grid.Column>
        <Grid.Column className="grow">
            <Image src={agent} />
        </Grid.Column>
        <Grid.Column className="grow">
            <Image src={online} />
        </Grid.Column>
        <Grid.Column className="grow">
            <Image src={baked} />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <Grid stackable>
      <Grid.Row columns={4}>
        <Grid.Column className="grow">
            <Image src={bb} />
        </Grid.Column>
        <Grid.Column className="grow">
            <Image src={agent} />
        </Grid.Column>
        <Grid.Column className="grow">
            <Image src={online} />
        </Grid.Column>
        <Grid.Column className="grow">
            <Image src={baked} />
        </Grid.Column>
      </Grid.Row>
    </Grid>


  </Container>
);

export default Tiles;
