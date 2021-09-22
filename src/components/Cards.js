import React from "react";
import { Card, Icon, Image, Label } from "semantic-ui-react";

const CardExampleCard = (props) => (
  <Card href={props.link} target="_blank">
    <Image src={props.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.header}</Card.Header>

      <Label> {props.label} </Label>

      <Card.Description>{props.descript}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>{props.tags}</a>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
