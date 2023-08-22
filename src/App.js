import './css/App.css'
import React from 'react'
import Title from './header/Title'
import { useTranslation } from 'react-i18next'
import ContentDisplay from './ContentDisplay'
import staticContent from './contentData' // Import the content modul
import AboutMe from './ScrollContent/AboutMe'

function App () {
  const { t } = useTranslation()
  return (
    <div className='App'>
        <Title />
        <h1>{t('greeting')}</h1>
        <div>
            <ContentDisplay contentPages={[[<AboutMe key="aboutMe" />], ...staticContent]} />
        </div>
    </div>
  )
}

export default App
