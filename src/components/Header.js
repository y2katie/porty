import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import { Menu, Sticky } from "semantic-ui-react";
import logo from "../assets/images/k.png";

class Header extends Component {
  contextRef = createRef();

  render() {
    return (
      <Menu className="fixed" fluid widths={4} stackable>
        <Menu.Item name="Linkedin">
          {" "}
          <a href="https://www.linkedin.com/in/katie-jordan-designer/" target="_blank">
            Linkedin
          </a>
        </Menu.Item>

        <Menu.Item name="Github">
          {" "}
          <a href ="https://github.com/katyvonkaty" target="_blank">
            Github
          </a>
        </Menu.Item>

        <Menu.Item name="Illustrations">
          {" "}
          <a href="https://dribbble.com/kj0203" target="_blank">
            Illustrations
          </a>
        </Menu.Item>

        <Menu.Item name="Linkedin">
          {" "}
          <a href="mailto:kj0203@gmail.com" target="_blank">
            Contact
          </a>
        </Menu.Item>

      </Menu>
    );
  }
}

export default Header;
