// src/Title.js
import '../css/Title.css'
import React from 'react'
import ChangeLanguageButton from './ChangeLanguageButton'

function Title () {
  return (
        <div className="Title">
            <div className="Main-Title">Title text</div>
            <div className="Title-Subtitle">Subtitle</div>
            <ChangeLanguageButton />
        </div>
  )
}

export default Title
