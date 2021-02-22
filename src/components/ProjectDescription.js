import React from "react";
import { Link } from "react-router-dom";
import { Grid, Container, Image } from "semantic-ui-react";
import home from "../assets/images/home.png";

const ProjectDescription = (props) => {
  return (
    <>
      <Link to="/home">
        <img style={{ width: "20%" }} src={home} className="home" />
      </Link>
      <Container centered style={{ marginTop: "100px" }}>
        <Grid centered>
          <Grid.Column centered width={8}>
            <h1> {props.projectHeader} </h1>
            <p> {props.projectExplainer} </p>
            <p> {props.login} </p>
            <button class="ui button">
              {" "}
              <a href={props.link} target="_blank" > View Project </a>{" "}
            </button>
          </Grid.Column>

          <Grid.Row centered>
            <Grid.Column width={16}>
              <Image massive centered src={props.img} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <h2> {props.problem} </h2>
              <p> {props.problemContent} </p>
              <h2> {props.solution} </h2>
              <p> {props.solutionContent} </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Image centered massive src={props.img2} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default ProjectDescription;
