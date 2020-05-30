import React from 'react';
import Routes from './routes/index.js'
import './App.css'

import logo from './assets/reator-arc.png'

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <div className="content">
        <Routes />
      </div>
    </div>
  )
}

export default App;
