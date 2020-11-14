import React from "react";
import { Header, Grid, Button } from 'semantic-ui-react'


const Explainer = () => {
  return (
    <Grid className="explainer">
    <Grid.Column width={16}>

    <h1 className="heads"> Experience </ h1>
    <Button size='massive' className="explainerButton"> Click Me </ Button>
    </Grid.Column>
  </Grid>
  )

}

export default Explainer
