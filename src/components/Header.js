import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Container } from 'semantic-ui-react'
import Contact from "./Contact"
import Portfolio from "./Portfolio"



class Header extends Component {
  render() {

    return (
        <Menu>
          <Menu.Item>
            <Link name='Experience' to="/">
              <b>  Katie Jordan </b>
            </Link>
            </Menu.Item>

              <Menu.Item>
            <a href="https://www.linkedin.com/in/katie-jordan-designer/">
               Linkedin
            </a>
              </Menu.Item>

            <Menu.Item>
              <a href="https://dribbble.com/kj0203">
                 Illustrations
              </a>
          </Menu.Item>

          <Menu.Item>
            <a href="https://github.com/katyvonkaty">
               Github
            </a>
            </Menu.Item>


        </Menu>
    );
  }
}

export default Header;



// import React, { Component, useState } from 'react'
// import { Menu, Container } from 'semantic-ui-react'
// import { Link, Router, Switch } from "react-router-dom";
//
//
// export default class Header extends Component {
//   state = {}
//
//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
//
//   render() {
//
//     const { activeItem } = this.state
//
//     return (
//       <div className="container stackable">
//        <Router>
//        <Switch>
//       <Menu>
//
//         <Link
//             name='Experience'
//             active={activeItem === 'Experience'}
//             onClick={this.handleItemClick}
//             to="/"
//           >
//             Experience
//         </Link>
//
//
//         <Menu.Item
//           name='Portfolio'
//           active={activeItem === 'Portfolio'}
//           onClick={this.handleItemClick}
//           href="/Jumbotron"
//         >
//           Portfolio
//         </Menu.Item>
//
//         <Menu.Item
//           name='Contact'
//           active={activeItem === 'Contact'}
//           onClick={this.handleItemClick}
//         >
//           Contact
//         </Menu.Item>
//       </Menu>
//       </Switch>
//       </Router>
// </div>
//     )
//   }
// }
