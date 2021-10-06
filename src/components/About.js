import React from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Image } from "semantic-ui-react";
import home from "../assets/images/home.png";
import Header from "./Header";

const About = (props) => {
  return (
    <>
    <Header />

      <Container centered style={{ marginTop: "100px" }}>
        <Grid centered>
          <Grid.Column centered width={8}>
        <p> hiiiii </p>
          </Grid.Column>


        </Grid>
      </Container>
    </>
  );
};

export default About;
