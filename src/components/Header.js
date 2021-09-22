import React from "react";

import { Grid, Image, Menu, Segment, Input, Label } from "semantic-ui-react";

const Header = () => (
  <Grid>

      <Menu fixed style={{padding:"30px", border:"none !important"}} className="ui fixed secondary vertical pointing menu testing">

      <Menu.Item>
        <h1> Katie Jordan </h1>
        <li> Pastry Chef </li>
        <li> Yoga Instructor </li>
        <li> Cyber Sec Analys  </li>
        <li> Product & Web Design </li>
      </Menu.Item>


        <Menu.Item>
          <h4> Product </h4>
        </Menu.Item>
        <Menu.Item>
          Pastry
        </Menu.Item>

        <Menu.Item>
          Watercolor
        </Menu.Item>

        <Menu.Item>
Web        </Menu.Item>

        <Menu.Item>
          Illustration
        </Menu.Item>
        <Menu.Item>
          About
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Contact me" />
        </Menu.Item>
      </Menu>{" "}


  </Grid>
);

export default Header;
