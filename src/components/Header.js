import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item
          className ="logo"
          name='Katie Jordan'
          active={activeItem === 'editorials'}
          content='Katie Jordan'
          onClick={this.handleItemClick}
        />


        <Menu.Item
        position="right"
          name='reviews'
          active={activeItem === 'reviews'}
          content='Reviews'
          onClick={this.handleItemClick}
        />

        <Menu.Item

          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          content='Upcoming Events'
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
