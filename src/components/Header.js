import React from "react";

import { Grid, Image, Menu, Segment, Input, Label } from "semantic-ui-react";

const Header = () => (
  <Grid>

      <Menu fixed style={{padding:"30px", border:"none !important"}} className="ui fixed secondary vertical pointing menu testing">

      <Menu.Item>
        <Image src="https://i.etsystatic.com/14192769/r/il/522e68/1948291857/il_570xN.1948291857_h91n.jpg" />
      </Menu.Item>


        <Menu.Item>
          Product
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
