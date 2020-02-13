import React, { Component } from 'react';
import { Anchor } from 'antd';
import '../styles/SideNav.css';

const { Link } = Anchor;

class SideNav extends Component {

  render() {
    return (
      <div className="sidenav-container" style={{ zIndex: 3 }}>
        <Anchor>
          <Link href="#home" title="Home" />
          <Link href="#about" title="About" />
          <Link href="#experience" title="Experience" />
          <Link href="#portfolio" title="Portfolio" />
        </Anchor>
      </div>
    )
  }

}

export default SideNav;
