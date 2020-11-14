import React from "react";
import { Header, Grid, Image, Button } from 'semantic-ui-react'

const Port = () => (
  <Grid className="port">
      <Grid.Column width={8}>
      <Header size='large'>A paragraph is a self-contained unit of discourse</Header>
        <p> Product designer and digital creative, specializing in ui/us brigital creative, specializing in ui/uanding and digitaling in ui/us brigital creative, specializing in ui/uanding and digital designs </p>
        <Image src='https://cdn.dribbble.com/users/1098627/screenshots/4277421/dribbble_thumbnail.jpg' bordered />
      </Grid.Column>

      <Grid.Column width={8}>
        <Image src='https://i.pinimg.com/originals/bc/13/ae/bc13aeda287f8b812ee4b48c64209ae4.png' bordered />
      </Grid.Column>

      <Grid.Column width={8}>
        <Image src='https://cdn.dribbble.com/users/1098627/screenshots/4277421/dribbble_thumbnail.jpg' bordered />
      </Grid.Column>

      <Grid.Column width={8} className="four">
        <Image src='https://i.pinimg.com/originals/bc/13/ae/bc13aeda287f8b812ee4b48c64209ae4.png' bordered  />
      </Grid.Column>

      <Grid.Column width={8}>
        <Image src='https://cdn.dribbble.com/users/1098627/screenshots/4277421/dribbble_thumbnail.jpg' bordered />
      </Grid.Column>

      <Grid.Column width={8} className="five">
        <Image src='https://i.pinimg.com/originals/bc/13/ae/bc13aeda287f8b812ee4b48c64209ae4.png' bordered />
      </Grid.Column>


    </Grid>
)

export default Port
