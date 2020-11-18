import React, { useRef, useState, useEffect, useCallback } from 'react'
import { render } from 'react-dom'
import { useTransition,useSpring, animated } from 'react-spring'
import { Header, Grid, Image, Button } from 'semantic-ui-react';

export default function Starter() {
  const ref = useRef([])

  const [items, set] = useState([])
  const transitions = useTransition(items, null, {
    from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#F3DDC7' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#F6C9A0' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#A61E1E' },
  })

  const reset = useCallback(() => {
    ref.current.map(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Welcome', 'To my Site']), 1000))
    ref.current.push(setTimeout(() => set(['Im a multifacted', 'digital designer', 'with lots of', 'hobbies']), 4000))
    ref.current.push(setTimeout(() => set(['Cross Stitcher', 'Dog Lover', 'Baker']), 5000))
    ref.current.push(setTimeout(() => set(['Developer', 'Designer','Yoga Instructor', 'Illustrator', "Adjunct Prof", "UI Designer"]), 8000))
  }, [])

  useEffect(() => void reset(), [])

  return (
    <div>
    <Grid stackable>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={6}>
        <h1> Hi There, I'm Katie </h1>
        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
        </Grid.Column>
        <Grid.Column width={9}>
          <Image className="niceImg" src='faces.png' size="massive" />
        </Grid.Column>
    </Grid>


    </div>
  )
}
