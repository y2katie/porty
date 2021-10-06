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
        <h3> Hi, I’m Katie. My real name is Kathryn but no one calls me that. </h3>
        <p> I'm a creative person who has many, many, many interests; you could say my interests are exhausting. <br/><br/>

I’m a programmer, UI/ UX designer and web designer with 6+ years experience working with startups and other creative clients. Most recently, I completed all the illustrations for the BuzzBell app. <br/><br/>

In addition to a robust techincal tool belt, I’m a 200hr certified yoga instructor, apprentice pastry chef at Gabriel Kreuther (⭐️⭐️ ), cyber security student with Fullstack Academy and a professor at FIT in the CT&D department focusing on web design.<br/><br/>

I enjoy meeting new people and learning about their lives and backgrounds. I continously seek to improve personally and professionally. Lastly, I have a cockapoo named Teddy who is easily the smartest, cutest and most perfect dog in the world.</p>
          </Grid.Column>


        </Grid>
      </Container>
    </>
  );
};

export default About;
