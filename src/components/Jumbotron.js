import React from "react";
import { Header, Grid, Image, Button,Reveal, Transition, Visibility } from "semantic-ui-react"


export default class Jumbotron extends React.Component {


    render() {


    return(
      <Grid className="jumbotron" stackable>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={5}>
          <Transition visible={true} animation='scale' duration={500}>
              <Header size='huge'>Hello, I'm Katie Jordan</Header>
                </Transition>
                <p> A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>
               <Button size='massive'>Download Resume</Button>

          </Grid.Column>

          <Grid.Column width={10}>



                    <Reveal animated='small fade'>
                      <Reveal.Content hidden>
                        <Image className="faces" src='faces.png' />
                      </Reveal.Content>
                
                    </Reveal>



          </Grid.Column>

        </Grid>
  )

}
}
