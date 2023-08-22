import logo from './logo.svg'
import './css/App.css'
import React from 'react'
import Title from './Title'

function App () {
  return (
    <div className='App'>
        <Title />
      <header className='CV-Website'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
