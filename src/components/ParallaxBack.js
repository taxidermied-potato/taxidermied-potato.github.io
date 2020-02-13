import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring'
import '../styles/ParallaxBack.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`
const trans7 = (x, y) => `translate3d(${x / 40}px,${y / 40 - 30 * window.innerWidth / 1000}px,0)`
const trans2 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`
const trans3 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const trans4 = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`
const trans5 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans6 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`

function PBCard() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (    
      <div className="p-container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc((x + window.innerWidth / 8), y) })}>
            <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
            <animated.div className="card7" style={{ transform: props.xy.interpolate(trans7) }} />
            <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
            <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
            <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
            <animated.div className="card5" style={{ transform: props.xy.interpolate(trans5) }} />
            <animated.div className="card6" style={{ transform: props.xy.interpolate(trans6) }} />
      </div>    
  )
}

class ParallaxBack extends Component {
    render() {
        return (<PBCard/>)
    }
}

export default ParallaxBack;