// src/Title.js
import '../css/ContactMeBar.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

function ContactMeBar () {
  const { t } = useTranslation()
  return (
        <div className="BottomBar">
            <div className="ContactMe-Text">{t('home')}</div>
            <div className="ContactMe-LinkedIn">Subtitle</div>
            <div className="ContactMe-Phone"> </div>
            <div className="ContactMe-Mail"> </div>
        </div>
  )
}

export default ContactMeBar
