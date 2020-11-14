import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
      <Menu text stackable>
        <Menu.Item
          className ="logo"
          name='Katie Jordan'
          active={activeItem === 'editorials'}
          content='Katie Jordan'
          onClick={this.handleItemClick}
        />


      </Menu>
      </Container>
    )
  }
}
