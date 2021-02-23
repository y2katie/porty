import React, { Component, createRef } from "react";
import { Menu } from "semantic-ui-react";

class Header extends Component {
  contextRef = createRef();

  render() {
    return (
      <Menu className="fixed" fluid widths={4} stackable>
        <Menu.Item name="Linkedin">
          {" "}
          <a href="https://www.linkedin.com/in/katie-jordan-designer/" rel="noreferrer" target="_blank">
            Linkedin
          </a>
        </Menu.Item>

        <Menu.Item name="Github">
          {" "}
          <a href ="https://github.com/katyvonkaty" rel="noreferrer" target="_blank">
            Github
          </a>
        </Menu.Item>

        <Menu.Item name="Illustrations">
          {" "}
          <a href="https://dribbble.com/kj0203" rel="noreferrer" target="_blank">
            Illustrations
          </a>
        </Menu.Item>

        <Menu.Item name="Linkedin">
          {" "}
          <a href="mailto:kj0203@gmail.com" rel="noreferrer" target="_blank">
            Contact
          </a>
        </Menu.Item>

      </Menu>
    );
  }
}

export default Header;
