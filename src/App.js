import React from 'react';
import './styles/App.css';
import Content from './components/Content'
import Nav from './components/Nav'
import SideNav from './components/SideNav'

function App() {
  return (
    <div className="App">
      <SideNav />
      <Content />
    </div>
  );
}

export default App;