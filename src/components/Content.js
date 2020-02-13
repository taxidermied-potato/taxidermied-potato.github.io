import React, { Component } from 'react';
import ParallaxBack from './ParallaxBack';
import Nav from './Nav';
import '../styles/Content.css';

import monkey from '../images/codemonkey.png';
import hell from '../images/hell.png';
import sched from '../images/terps.png';
import wander from '../images/wander.png';
import th from '../images/th.png';

import { Divider, Anchor, Avatar, Icon } from 'antd';
import { Collapse } from 'react-collapse';

const { Link } = Anchor;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      docs: [false, false, false],
    };
  }

  render() {
    return (
      <main>
        <section className="content-section home-section pt-6" id="home">
          <div className="hero px-4" style={{ zIndex: 0 }}>
            <div className="hero-item">
              <ParallaxBack />
            </div>
            <div className="hero-item ml-5 mb-3" style={{ zIndex: 1 }}>
              <h1> hello </h1>
              <div className="pl-1">
                <p>
                  <b>My name is Al.</b> I am a full stack developer with experience building quality web and desktop applications.
                  Currently an honors student at the University of Maryland, College Park, graduating with a BS in Computer Science in May 2021.
                </p>
                <Anchor affix={false}>
                  <Link href="#about" title="Welcome to my corner of the internet." />
                </Anchor>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section pt-5" id="about">
          <div className="hero px-4">
            <div className="hero-item mr-5">
              <Divider orientation="left">
                <h2>about me</h2>
              </Divider>
              <p>
                I am a computer science <a href="https://www.cs.umd.edu/">undergraduate</a>, out of choice, necessity, whichever you prefer. And even if we can't really have nice things, I do enjoy making them.
                Websites and web apps, a bit of desktop and mobile development here and there. Name it, and I'll be committed to the crime.
              </p>
              <span>
                <ul className="diamond-ul skills">
                  <li>Java</li>
                  <li>JS (ES6)</li>
                  <li>React</li>
                  <li>HTML, CSS</li>
                  <li>Node</li>
                  <li>C#, XAML</li>
                  <li>Flutter/Dart</li>
                  <li>C</li>
                  <li>Ruby</li>
                  <li>OCaml</li>
                </ul>
              </span>
              <p className="text-small">
                *I also like to doodle and sleep
              </p>
            </div>
            <div className="hero-item ml-4 mr-5">
              <img className="half-img" src={monkey} />
            </div>
          </div>
        </section>
        <section className="content-section pt-5" id="experience">
          <div className="hero px-6">
            <div className="hero-item mr-5">
              <Divider orientation="right">
                <h2>experience</h2>
              </Divider>
              <Nav />
            </div>
          </div>
        </section>
        <section className="content-section pt-6 pb-6" id="portfolio">
          <div className="hero px-55">
            <div className="hero-item">
              <Divider orientation="left">
                <h2>portfolio</h2>
              </Divider>
              <div className="project-container mt-5">
                <div className="project-item project-card-left py-3 px-3" style={{ textAlign: 'right' }}>
                  <h4 className="my-1">
                    <a> fiftytwoeighty (wip) </a>
                    <a className="m-1" href="https://gitlab.com/taxidermied_potato/dcc_capstone"><Icon type="gitlab" /></a>
                    <a className="m-1"
                      onClick={() => {
                        const newDocs = [...this.state.docs];
                        newDocs[0] = !this.state.docs[0];
                        this.setState({ docs: newDocs });
                      }}
                    >
                      <Icon type="book" />
                    </a>
                  </h4>
                  <p>
                    A cross platform mobile application that allows for users to communicate on a geolocative message board. DCC Capstone project and bane of my existence.
                  </p>
                  <p className="text-muted text-small">
                    Flutter, Dart, Firebase
                  </p>
                </div>
                <div className="project-item mx-5">
                  <a href="https://gitlab.com/taxidermied_potato/dcc_capstone">
                    <Avatar className="project-img" shape="square" size={272} src={wander} />
                  </a>
                </div>
              </div>
              <div className="project-container px-5">
                <Collapse isOpened={this.state.docs[0]}>
                  <div className="project-item m-5">
                    <Divider>
                      <h5>fiftytwoeighty documentation</h5>
                    </Divider>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </Collapse>
              </div>
              <div className="project-container">
                <div className="project-item mx-5">
                  <a href="https://taxidermied-potato.github.io/hell-quest">
                    <Avatar className="project-img" shape="square" size={272} src={hell} />
                  </a>
                </div>
                <div className="project-item project-card-right py-3 px-1">
                  <h4 className="my-1">
                    <a href="https://taxidermied-potato.github.io/hell-quest"> hell quest </a>
                    <a className="m-1" href="https://github.com/taxidermied-potato/hell-quest"><Icon type="github" /></a>
                    <a className="m-1"><Icon type="book" /></a>
                  </h4>
                  <p>
                    A text based RPG built with the interactive fiction engine, <a href="https://dan-q.github.io/twee2/">Twee2</a>. Includes full inventory, stat, and shop systems.
                  </p>
                  <p className="text-muted text-small">
                    Vanilla JS, HTML, CSS
                  </p>
                </div>
              </div>
              <div className="project-container">
                <div className="project-item project-card-left py-3 px-3" style={{ textAlign: 'right' }}>
                  <h4 className="my-1">
                    <a href="#home"> tax haven </a>
                    <a className="m-1" href="https://gitlab.com/taxidermied_potato/canis_lupus_familiaris"><Icon type="gitlab" /></a>
                    <a className="m-1"><Icon type="book" /></a>
                  </h4>
                  <p>
                    Stock market simulator that pulls historic data and uses it to model trading in a gamified form. Uses the <a href="https://financialmodelingprep.com/developer/docs/">FMP API</a>.
                    Colloboration with <a href="http://koutsoheras.com/">Nikodemos Koutsoheras</a> and Alex Ma.
                  </p>
                  <p className="text-muted text-small">
                    React, Gatsby
                  </p>
                </div>
                <div className="project-item mx-5">
                  <a href="#home">
                    <Avatar className="project-img" shape="square" size={272} src={th} />
                  </a>
                </div>
              </div>
              <div className="project-container">
                <div className="project-item mx-5">
                  <a href="#home">
                    <Avatar className="project-img" shape="square" size={272} src={sched} />
                  </a>
                </div>
                <div className="project-item project-card-right py-3 px-1">
                  <h4 className="my-1">
                    <a href="#home"> terpscheduler (wip) </a>
                    <a className="m-1" href="https://gitlab.com/taxidermied_potato/scheduler"><Icon type="gitlab" /></a>
                  </h4>
                  <p>
                    A scheduling service that allows for more advanced parsing than UMD's base course list. Compiles additional information from review aggregators and course GPA averages.
                  </p>
                  <p className="text-muted text-small">
                    React, UMD.io
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Content;
