// src/Title.js
import '../css/Title.css'
import React from 'react'
import ChangeLanguageButton from './ChangeLanguageButton'
import { useTranslation } from 'react-i18next'

function Title () {
  const { t } = useTranslation()
  return (
        <div className="Title">
            <div className="Main-Title">{t('home')}</div>
            <div className="Title-Subtitle">Subtitle</div>
            <div className="Title-ChangeLangaugeButtons"> <ChangeLanguageButton /> </div>
        </div>
  )
}

export default Title
