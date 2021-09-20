import React from "react";

import { Grid, Image, Menu, Segment, Input, Label } from "semantic-ui-react";

const Header = () => (
  <Grid>
      <Menu vertical>
        <Menu.Item>
          <Label color="teal">1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item>
          <Label>51</Label>
          Spam
        </Menu.Item>

        <Menu.Item>
          <Label>1</Label>
          Updates
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Search mail..." />
        </Menu.Item>
      </Menu>{" "}


  </Grid>
);

export default Header;
