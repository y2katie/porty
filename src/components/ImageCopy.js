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
    <Trail open={open} onClick={() => set((state) => !state)}>

  <Grid className="imageCopy" stackable>
  <Grid.Column width={1}>
  </Grid.Column>

      <Grid.Column width={4} className="nice">
        <Image className="niceImg" src='nice.png' />
      </Grid.Column>

      <Grid.Column width={9} className="type">
       <span><h1>A paragraph is a self-contained unit of discourse in writing dealing with a particular point </h1></span>




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
     </Trail>

  )
}
