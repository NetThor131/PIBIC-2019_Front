import React from 'react';
import Routes from './routes/index.js'
import './App.css'


function App() {
  return (
    <div className="container">
      <h1>E.M.E</h1>
      <h2>Explain My Error</h2>
      <div className="content">
        <Routes />
      </div>
    </div>
  )
}

export default App;
