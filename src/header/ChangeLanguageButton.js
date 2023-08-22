import React from 'react'
import i18n from '../i18n' // Import your i18n configuration
import { useTranslation } from 'react-i18next'

const ChangeLanguageButton = () => {
  const { t } = useTranslation() // Renamed to 't' for translations

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
        <div>
            <button onClick={() => changeLanguage('en')}>{t('english')}</button>
            <button onClick={() => changeLanguage('den')}>{t('danish')}</button>
        </div>
  )
}

export default ChangeLanguageButton
