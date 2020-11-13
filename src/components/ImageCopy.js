import React from "react";
import { Grid, Image, Button } from 'semantic-ui-react'

const ImageCopy = () => (
  <Grid className="imageCopy">
      <Grid.Column width={6}>
        <Image src='https://cdn.dribbble.com/users/3281732/screenshots/7101536/media/d6a03bae1ed4eb3776814d906399c0ab.jpg' />
      </Grid.Column>

      <Grid.Column width={10}>
          <p> A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>


        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column>
                  <p> A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>
                </Grid.Column>
                <Grid.Column>
                  <p> A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column>
                  <p> A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>
                </Grid.Column>
                <Grid.Column>
                  <p> A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>
                </Grid.Column>
            </Grid.Row>
          </Grid>

        </Grid.Column>
  </Grid>

)

export default ImageCopy
