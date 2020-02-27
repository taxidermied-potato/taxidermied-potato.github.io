import React from 'react';
import './styles/App.css';
import Content from './components/Content'
import SideNav from './components/SideNav'
import { Icon } from 'antd';

function App() {
  return (
    <div className="App">
      <SideNav />
      <Content />
      <section>
          <div className="footer mb-1">
            <p className="mx-auto footer-text">
              designed by al yin | 
              <a href="https://github.com/taxidermied-potato/altyin.com"><Icon type="github" /></a>
              |
              <a href="https://www.linkedin.com/in/al-yin/"><Icon type="linkedin" /></a>
              |
              <a href="mailto:altyin@gmail.com"><Icon type="mail" /></a>
            </p>            
          </div>
        </section>
    </div>
  );
}

export default App;