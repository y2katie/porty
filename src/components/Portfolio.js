import React from "react";
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Grid, Image } from 'semantic-ui-react'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Portfolio() {

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <>
    <svg className="test" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#FFF5EC" fill-opacity="1" d="M0,256L24,266.7C48,277,96,299,144,304C192,309,240,299,288,282.7C336,267,384,245,432,224C480,203,528,181,576,165.3C624,149,672,139,720,144C768,149,816,171,864,186.7C912,203,960,213,1008,192C1056,171,1104,117,1152,106.7C1200,96,1248,128,1296,138.7C1344,149,1392,139,1416,133.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
  </svg>
    <div className="port">
    <h1 style={{textAlign:"center"}}> Portfolio </h1>
        <Grid>
            <Grid.Column width={5}>
              <animated.div
                class="card"
                onMouseEnter={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
              />
              </Grid.Column>
              <Grid.Column width={5}>
              <animated.div
                class="card1"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
              />
              </Grid.Column>
              <Grid.Column width={5}>

              <animated.div
                class="card2"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
              />

              </Grid.Column>
          </Grid>
        </div>
      </>

  )
}

export default Portfolio
