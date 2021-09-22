import React from "react";

import { Grid, Image, Button, Menu, Segment, Input, Label } from "semantic-ui-react";

const Header = () => (
  <Grid>

    <Menu
      fixed
      style={{ padding: "30px", border: "none !important" }}
      className="ui fixed secondary vertical pointing menu testing"
    >
    <h3> 🥐🎨🧘💻👩‍💻🌐 </h3>

      <h1> Katie Jordan </h1>




      <Menu.Item><a href="https://www.linkedin.com/in/katie-jordan-designer/">About </a></Menu.Item>

      <Menu.Item><a href="https://www.linkedin.com/in/katie-jordan-designer/">Linkedin </a></Menu.Item>
      <Menu.Item><a href="https://www.linkedin.com/in/katie-jordan-designer/">Resume </a></Menu.Item>


      <Menu.Item><a href="https://dribbble.com/kj0203">Illustration </a></Menu.Item>
      <Menu.Item><a href="https://github.com/katyvonkaty"> Github </a> </Menu.Item>
      <Menu.Item>
        <Button icon="search" placeholder="Contact me"> Contact Me </Button>
      </Menu.Item>
    </Menu>{" "}
  </Grid>
);

export default Header;
