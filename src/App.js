import logo from './logo.svg'
import './css/App.css'
import React from 'react'
import Title from './header/Title'
import { useTranslation } from 'react-i18next'

function App () {
  const { t } = useTranslation()
  return (
    <div className='App'>
        <Title />
        <h1>{t('greeting')}</h1>
        {/* Add more translated content here */}
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
