import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { Menu, Sticky } from 'semantic-ui-react'
import logo from "../assets/images/k.png"



class Header extends Component {
render(){
  return(
    <Menu fluid widths={5} stackable>
       <Menu.Item
         name='Linkedin'
         onClick={this.handleItemClick}
       />
       <Menu.Item
         name='Github'
         onClick={this.handleItemClick}
       />
       <Menu.Item>
           <img class="logo" src= {logo} />
       </Menu.Item>
       <Menu.Item
         name='Resume'
         onClick={this.handleItemClick}
       />
       <Menu.Item
         name='About'
         onClick={this.handleItemClick}
       />
     </Menu>
  )
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
