import React from "react";
import Header from "./Header";
import CardExampleCard from "./Cards";
import { Menu, Segment, Card } from "semantic-ui-react";
import { Grid, Image, Container } from "semantic-ui-react";

import { Link } from "react-router-dom";
import bb from "../assets/images/bb.jpg";
import roar from "../assets/images/roar.jpg";
import star from "../assets/images/star.png";
import onepercent from "../assets/images/onepercent.jpg";

import online from "../assets/images/online.png";

import yoga from "../assets/images/yoga.png";
import baked from "../assets/images/baked.png";
import agent from "../assets/images/agent.png";
import work from "../assets/images/work.jpg";
import nyc from "../assets/images/nyc.jpg";
import illo from "../assets/images/illo.jpg";
import yoga1 from "../assets/images/yoga1.jpg";
import pastry from "../assets/images/pastry.png";
import pizza from "../assets/images/pizza.png";
import pistachio from "../assets/images/pistachio.png";
import choc from "../assets/images/choc.png";









const src =
  "https://i.pinimg.com/originals/b9/c9/76/b9c9764583f7f5bdc1de5413bbb6952e.jpg";

const Work = () => (
  <Container responsive fluid style={{ marginTop: "50px" }}>
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Header />
        </Grid.Column>

        <Grid.Column
          style={{ padding: "20px" }}
          mobile={16}
          tablet={8}
          computer={12}
        >
          <Card.Group>
            <CardExampleCard
              header="Ticker Tok"
              img={roar}
              link="https://tickertok.vercel.app/"
              descript="An app that utilizes the Morningstar API to provide digestible stock market information."
              tags="react, javascript, html, css, "
              label="Web Design & Development"
            />
            <CardExampleCard
              header="Star Snob"
              img={star}
              link="https://starsnob.vercel.app/"
              descript="An app that utilizes the Yelp API to indulge your 4+ star restaurant requests."
              tags="react, javascript, html, css, "
              label="Web Design & Development"
            />
            <CardExampleCard
              header="BuzzBell"
              img={bb}
              link="https://buzzbell.app/"
              descript="A product that focuses on instant communication overriding do not distrub settings."
              tags="wordpress, figma, html, css, illustrations"
              label="Web Design & Development"
            />
            <CardExampleCard
              header="Baked"
              img={baked}
              link="https://buzzbell.app/"
              descript="A satorical dating app for cupcakes and other sweet things."
              tags="figma, javascript, html, css"
              label="Product Design & Web Development"
            />
            <CardExampleCard
              header="Sequencing"
              img={yoga}
              link="https://sequencing.vercel.app/"
              descript="Drag and drop card sorter for organizing a yoga class."
              tags="figma, javascript, html, css"
              label="Product Design & Web Development"
            />
            <CardExampleCard
              header="Online Leasing: Renter"
              img={online}
              link="https://apply.funnelleasing.com/2/login"
              descript="Renting an apartment via 21st century technology."
              tags="figma, invision, sketch"
              label="Product Design & Web Development"
            />
            <CardExampleCard
              header="Online Leasing: Agent"
              img={agent}
              link="https://apply.funnelleasing.com/2/login"
              descript="Agents analyzing a renter's qualifications to approve or deny rental."
              tags="figma, invision, sketch"
              label="Product Design & Web Development"
            />
            <CardExampleCard
              header="One Percent"
              img={onepercent}
              link="https://katyvonkaty.github.io/One-Percent/"
              descript="Satorical application designed to welcome you to the one percent."
              tags="figma, javascript, html, css"
              label="Product Design & Web Development"
            />
            <CardExampleCard
              header="NYC"
              img={nyc}
              link="https://katyvonkaty.github.io/One-Percent/"
              descript="Drag and drop card sorter for organizing a yoga class"
              tags="figma"
              label="Illustration"
            />
            <CardExampleCard
              header="Work"
              img={work}
              link="https://katyvonkaty.github.io/One-Percent/"
              descript="Drag and drop card sorter for organizing a yoga class"
              tags="figma"
              label="Illustration"
            />
            <CardExampleCard
              header="Beauty"
              img={illo}
              link="https://katyvonkaty.github.io/One-Percent/"
              descript="Drag and drop card sorter for organizing a yoga class"
              tags="figma"
              label="Illustration"
            />
            <CardExampleCard
              header="Yoga"
              img={yoga1}
              link="https://katyvonkaty.github.io/One-Percent/"
              descript="Drag and drop card sorter for organizing a yoga class"
              tags="figma"
              label="Illustration"
            />
            <CardExampleCard
              header="Plating"
              img={pastry}
              link="https://katyvonkaty.github.io/One-Percent/"
              descript="Drag and drop card sorter for organizing a yoga class"
              tags="figma"
              label="Illustration"
            />
            <CardExampleCard
              header="Pistachio"
              img={pistachio}
              link="https://katyvonkaty.github.io/One-Percent/"
              descript="Drag and drop card sorter for organizing a yoga class"
              tags="figma"
              label="Illustration"
            />
            <CardExampleCard
              header="Pizza"
              img={pizza}
              link="https://katyvonkaty.github.io/One-Percent/"
              descript="Drag and drop card sorter for organizing a yoga class"
              tags="figma"
              label="Illustration"
            />
            <CardExampleCard
              header="Entrements"
              img={choc}
              link="https://katyvonkaty.github.io/One-Percent/"
              descript="Drag and drop card sorter for organizing a yoga class"
              tags="figma"
              label="Illustration"
            />



          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Work;
