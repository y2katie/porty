import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='Experience'
          active={activeItem === 'Experience'}
          onClick={this.handleItemClick}
        >
          Experience
        </Menu.Item>

        <Menu.Item
          name='Portfolio'
          active={activeItem === 'Portfolio'}
          onClick={this.handleItemClick}
        >
          Portfolio
        </Menu.Item>

        <Menu.Item
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>
      </Menu>
    )
  }
}
