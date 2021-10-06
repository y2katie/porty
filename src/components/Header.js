import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

import { Grid, Image, Button, Menu, Segment, Input, Label } from "semantic-ui-react";

const Header = () => (
  <Grid>

    <Menu
      fixed
      style={{ padding: "30px", border: "none !important" }}
      className="ui fixed secondary vertical pointing menu testing"
    >

      <h1> <Link to="/"> Katie Jordan </Link></h1>
      <h2> 🥐 🎨 🧘 💻 👩‍💻 🌐 </h2>


      <Menu.Item><Link to="/About">About </Link></Menu.Item>
      <Menu.Item>Resume </Menu.Item>


      <Menu.Item><a href="https://www.linkedin.com/in/katie-jordan-designer/">Linkedin </a></Menu.Item>


      <Menu.Item><a href="https://dribbble.com/kj0203">Illustration </a></Menu.Item>
      <Menu.Item><a href="https://github.com/katyvonkaty"> Github </a> </Menu.Item>


      <Menu.Item>
      <a href="mailto:kj0203@gmail.com" target="_blank">  <Button icon="search" placeholder="Contact me">
 Contact Me </Button> </a>
      </Menu.Item>
    </Menu>{" "}
  </Grid>
);

export default Header;
