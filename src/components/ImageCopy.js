import React, {useState} from "react";
import { render } from 'react-dom'
import { useTrail, a } from 'react-spring'
import { Header, Grid, Image, Button } from 'semantic-ui-react'


function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 200, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}

export default function ImageCopy() {
  const [open, set] = useState(true)

  return(
<div className="wave-container">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
<path fill="#f6d6ce" fill-opacity="1" d="M0,32L30,64C60,96,120,160,180,192C240,224,300,224,360,234.7C420,245,480,267,540,240C600,213,660,139,720,138.7C780,139,840,213,900,224C960,235,1020,181,1080,181.3C1140,181,1200,235,1260,218.7C1320,203,1380,117,1410,74.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
</svg>

  <Grid className="imageCopy" stackable>
  <Grid.Column width={1}>
  </Grid.Column>

      <Grid.Column width={4} className="nice">
      <Trail open={open} onClick={() => set((state) => !state)}>

        <Image className="niceImg" src='nice.png' />
        </Trail>

      </Grid.Column>

      <Grid.Column width={9} className="type">
       <span><h2 className="icCopy">I'm a a full-stack designer with a wide range of skills ranging from graphic design, illustration, UX design, UI design, and front-end development. </h2></span>


        <Grid divided='vertically'>
        <Grid.Row columns={2}>
                <Grid.Column>
                  <h3> Web Design </h3>
                  <p> I work with up to date software including sketch and figma to create attractive and functional prototypes. I use a robust iteration and collaborative process to arrive at a final product. </p>
                </Grid.Column>
                <Grid.Column>
                <h3> Prodcut Design</h3>
                  <p> I combine a strong research process including competitor analysis, user journeys and flows as well as pen and paper sketching to help refine ideas and concepts. I primarily use figma but have experince with sketch and XD. </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column>
                <h3> Illustration </h3>
                  <p> I enjoy creating patterns and yoga sequences with vibrant color palettes using figma. Yes, figma. Most recently, my illustrations have been featured in the BuzzBell App. </p>
                </Grid.Column>
                <Grid.Column>
                <h3> Web Development</h3>
                  <p> I'm well versed in the basic front end languages and have fantastic google skills, shout out to stack overflow. Most recently I've added building applications with react to my skillset. </p>
                </Grid.Column>
            </Grid.Row>
          </Grid>

        </Grid.Column>
        <Grid.Column width={2}>
        <Trail open={open} onClick={() => set((state) => !state)}>

            <Image className="imgNice2" src='faces.png' />
            </Trail>

        </Grid.Column>

        </Grid>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f6d6ce" fill-opacity="1" d="M0,96L48,96C96,96,192,96,288,112C384,128,480,160,576,149.3C672,139,768,85,864,58.7C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>


        </div>

  )
}
