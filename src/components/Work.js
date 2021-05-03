import React from "react";
import { Link } from "react-router-dom";
import bb from "../assets/images/bb.jpg";
import roar from "../assets/images/roar.jpg";
import star from "../assets/images/star.png";
import yoga from "../assets/images/yoga.png";



import { Grid, Image, Container } from "semantic-ui-react";

const Work = () => (
  <Container fluid style={{ marginTop: "100px", padding:"20px" }}>
    <Grid stackable>
    <h1 style={{fontSize:"70px", color:"white"}}> Dev & Design Work </h1>

      <Grid.Row columns={3}>
        <Grid.Column>
          <Link to="/onlineleasing">
            <h2> Online Leasing - Renter</h2>
            <Image
              src="93.png"
            />
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/onlineagent">
            <h2> Online Leasing - Agent</h2>
            <Image

              src="94.png"
            />
          </Link>
        </Grid.Column>
        <Grid.Column>
          <a href="https://starsnob.vercel.app/">
            <h2> Starsnob</h2>
            <Image src={star}  style={{borderRadius:"10px"}}/>
          </a>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column>
          <a href="https://tickertok.vercel.app/" target="_blank">
            <h2> TickerTok </h2>
            <Image src={roar} style={{borderRadius:"10px"}} />
          </a>
        </Grid.Column>
        <Grid.Column>
          <a href="https://buzzbell.app/" target="_blank">
            <h2> BuzzBell</h2>
            <Image src={bb}  style={{borderRadius:"10px"}}/>
          </a>
        </Grid.Column>
        <Grid.Column>
          <a href="https://quiet-wildwood-52939.herokuapp.com/">
            <h2> Nice Jewlery </h2>
            <Image src="3.png" />
          </a>
        </Grid.Column>
      </Grid.Row>


      <Grid.Row columns={3}>
      <Grid.Column>
        <Link to="/onepercent">
          <h2> One Percent </h2>
          <Image src="101.png" />
        </Link>
      </Grid.Column>

        <Grid.Column>
          <Link to="/cortland">
            <h2> Cortland Live Chat</h2>
            <Image src="91.png" />
          </Link>
        </Grid.Column>

        <Grid.Column>
          <a href="https://kanye-gamma.vercel.app/">
            <h2> Kanye</h2>
            <Image src="4.png" />
          </a>
        </Grid.Column>

      </Grid.Row>
      <Grid.Row columns={3}>

        <Grid.Column>
          <Link to="/baked">
            <h2> Baked</h2>
            <Image src="99.png" />
          </Link>
        </Grid.Column>

        <Grid.Column>
          <Link to="/baked">
            <h2> Sequencing </h2>
            <a href="https://sequencing.vercel.app/">

            <Image src={yoga}  style={{borderRadius:"10px"}}/>
            </a>
          </Link>
        </Grid.Column>

        <Grid.Column>
          <Link to="/baked">
            <h2> After Covid</h2>
            <Image src={yoga}  style={{borderRadius:"10px"}}/>

          </Link>
        </Grid.Column>

      </Grid.Row>


    </Grid>
  </Container>
);

export default Work;
