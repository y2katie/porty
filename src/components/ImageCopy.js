import React from "react";
import { Header, Grid, Image, Button } from 'semantic-ui-react'

const ImageCopy = () => (
  <Grid className="imageCopy" stackable>
  <Grid.Column width={1}>
  </Grid.Column>

      <Grid.Column width={4} className="nice">
        <Image className="niceImg" src='nice.png' />
      </Grid.Column>

      <Grid.Column width={9} className="type">
      <h1 className="opening">A paragraph is a self-contained unit of discourse in writing dealing with a particular point</h1>


        <Grid divided='vertically'>
            <Grid.Row columns={2}>
                <Grid.Column>
                  <h3> Web Design </h3>
                  <p> A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>
                </Grid.Column>
                <Grid.Column>
                <h3> Prodcut Design</h3>
                  <p> A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column>
                <h3> Illustration </h3>
                  <p> A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>
                </Grid.Column>
                <Grid.Column>
                <h3> Web Development + UX Research</h3>
                  <p> A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. </p>
                </Grid.Column>
            </Grid.Row>
          </Grid>

        </Grid.Column>
        <Grid.Column width={2}>
            <Image className="imgNice2" src='nice.png' />
        </Grid.Column>
  </Grid>

)

export default ImageCopy
