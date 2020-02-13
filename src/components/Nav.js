import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import '../styles/Nav.css';

class Nav extends Component {
  state = {
    current: '3',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  renderJob() {
    switch (this.state.current) {
      case '3':
        return (
          <div className="my-3 px-5">
            <h3>
              <span>Software Engineer Intern @</span> <a href="https://www.rgi-corp.com/">RGi</a>
            </h3>
            <p className="date text-muted">
              May 2019 - August 2019
          </p>
            <span>
              <ul className="diamond-ul">
                <li>Agile development on WPF application (C#, XAML, .NET).</li>
                <li>Implemented feature to dynamically model bridge architecture vectors based on user parameters.</li>
                <li>Advanced web application client (ReactJS, Redux, HTML/CSS/JS) to feature complete state.</li>
                <li>Contributed to UI/UX features such as a functional dark theme and persistent bounding box layers for map data.</li>
              </ul>
            </span>
          </div>
        )
      case '2':
        return (
          <div className="my-3 px-5">
            <h3>
              <span>Committee Chair @</span> <a href="https://www.saseconnect.org/">SASE Northeast Regional Conference</a>
            </h3>
            <p className="date text-muted">
              September 2018 - May 2019
          </p>
            <span>
              <ul className="diamond-ul">
                <li>Organized professional conference for 500 attendees from across the Northeast.</li>
                <li>Raised more than $50,000 through sponsorships and sales.</li>
                <li>Coordinated with webmaster on a serverless registration website utilizing AWS Lambda, Amazon API Gateway, S3, DynamoDB, and Amazon Cognito.</li>
              </ul>
            </span>
          </div>
        )
      case '1':
        return (
          <div className="my-3 px-5">
            <h3>
              <span>ASPIRE Intern @</span> <a href="https://www.jhuapl.edu/">JHU Applied Physics Lab</a>
            </h3>
            <p className="date text-muted">
              September 2017 - May 2018
          </p>
            <span>
              <ul className="diamond-ul">
                <li>Researched web application development with ArcGIS APIs (JS and Python) in the lab's Force Projection Sector.</li>
                <li>Built storyboard site simulating and detailing the potential for a situational awareness dashboard.</li>
              </ul>
            </span>
          </div>
        )
    }
  }

  render() {
    return (
      <div>
        {this.renderJob()}
        <header className="nav-container">
          <nav>
            <Icon type="swap-left" className="mx-5 nav-links" onClick={() => (parseInt(this.state.current) > 1 ? this.setState({current: (parseInt(this.state.current) - 1).toString()}) : {})}  />
            <div className="nav-links">
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">                
                <Menu.Item key="1">
                  <Icon type="code" />
                  JHU APL
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="build" />
                  SASE NERC
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="code" />
                  RGi
                </Menu.Item>
              </Menu>
            </div>
            <Icon type="swap-right" className="mx-5 nav-links" onClick={() => (parseInt(this.state.current) < 3 ? this.setState({current: (parseInt(this.state.current) + 1).toString()}) : {})} />
          </nav>
        </header>
      </div>
    )
  }
}

export default Nav;
