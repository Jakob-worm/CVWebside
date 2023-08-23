import './css/App.css'
import React from 'react'
import Title from './header/Title'
import ContentDisplay from './ContentDisplay'
import staticContent from './contentData' // Import the content modul
import AboutMe from './ScrollContent/AboutMe'
import ContactMeBar from './ContactMeBar/ContactMeBar'

function App () {
  return (
    <div className='App'>
        <Title />
        <div className='content-container'>
            <div>
                <ContentDisplay contentPages={[[<AboutMe key="aboutMe" />], ...staticContent]} />
            </div>
        </div>
        <ContactMeBar />
    </div>
  )
}

export default App
