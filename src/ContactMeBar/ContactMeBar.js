// src/Title.js
import '../css/ContactMeBar.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

function ContactMeBar () {
  const { t } = useTranslation()
  return (
        <div className="BottomBar">
            <div className="ContactMe-Text">{t('ContactMeText')}</div>
            <a
                href="https://www.linkedin.com/in/jakob-worm-717720267/"
                target="_blank"
                rel="noopener noreferrer"
                className="ContactMe-LinkedIn"
            >
                <div >LinkedIn</div>
            </a>
            <div className="ContactMe-Phone"> Tlf. +4552271200</div>
            <div className="ContactMe-Mail"> Email: jkbwrm@gmail.com </div>
        </div>
  )
}

export default ContactMeBar
