import './css/App.css'
import React from 'react'
import Title from './header/Title'
import { useTranslation } from 'react-i18next'
import ContentDisplay from './ContentDisplay'
import staticContent from './contentData' // Import the content modul

function App () {
  const { t } = useTranslation()
  return (
    <div className='App'>
        <Title />
        <h1>{t('greeting')}</h1>
        <ContentDisplay contentPages={staticContent} />
    </div>
  )
}

export default App
