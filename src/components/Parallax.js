import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring'
import '../styles/Parallax.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 6}px,${y / 6 - 115 + 100 / Math.log2(window.innerWidth)}px,0)`
const trans2 = (x, y) => `translate3d(${x / 3.5 + 30}px,${y / 3.5 + 15}px,0)`

function PCard() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (    
      <div className="fp-container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc((x + window.innerWidth/6), y) })}>
        <animated.div className="fcard1" style={{ transform: props.xy.interpolate(trans1) }} />
        <animated.div className="fcard2" style={{ transform: props.xy.interpolate(trans2) }} />
      </div>    
  )
}

class Parallax extends Component {
    render() {
        return (<PCard/>)
    }
}

export default Parallax;