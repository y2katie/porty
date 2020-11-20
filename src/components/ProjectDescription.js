import React from "react";
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Grid, Container, Image } from 'semantic-ui-react'


const ProjectDescription = (props) => {

  return (
<>

<Container centered>
    <Grid>
        <h1> {props.projectHeader} </h1>
        <Grid.Row>
          <Grid.Column width={5}>
            <Image src={props.img} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Image src={props.img1} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Image src={props.img2} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row width={12}>
            <Grid.Column>
            <h3> {props.title} </h3>
            <p> {props.content} </p>
            </Grid.Column>
        </Grid.Row>
          </Grid>
      </Container>
    </>
  )
}

export default ProjectDescription
