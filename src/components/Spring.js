import React from "react";
import { Header, Grid, Image, Button } from 'semantic-ui-react';
import {useSpring, animated} from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


export default function Spring(){
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return(
    <div>
    <Grid stackable>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={6}>
            <Header size='huge' key={2}>Bienvennue</Header>
            
            <p> Katie Jordan is a full-stack designer with a wide range of skills ranging from graphic design, illustration, UX design, UI design, and front-end development. Katie's recent experience including working in the tech industry with start-ups such as Funnel and In-telligent to create innovative products for real estate and telecommunication. </p>
             <Button size='large'><a href="KJ_2020.pdf" download> Download Resume </a></Button>

        </Grid.Column>
        <Grid.Column width={9}>
          <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          />
        </Grid.Column>
    </Grid>
    </div>
  )
}
