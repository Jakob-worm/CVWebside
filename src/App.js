import logo from './logo.svg'
import './App.css'
import React from 'react'

function MyButton () {
  return (
      <button>
        Im a button
      </button>
  )
}

function MyHeader () {
  return (
        <div>
            <header className={'top-bar'}>
                <p>
                    hello
                </p>
            </header>
        </div>)
}

function App () {
  return (
    <div className='App'>
        <MyHeader/>
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
        <MyButton />
    </div>
  )
}

export default App
