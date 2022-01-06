import React from 'react';
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import LeftMenu from './components/LeftMenu';

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <Nav />
      </nav>
      <div className="sidebar">Sidebar</div>
      <LeftMenu/>
      <Main/>
      <div className="rightmenu">Right Menu</div>
    </div>
  );
}

export default App;
