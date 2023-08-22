// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Add your translations here
const resources = {
  en: {
    translation: {
      greeting: 'Hello, World!'
      // Add more translations here
    }
  },
  den: {
    translation: {
      greeting: 'Hej, Verden!'
      // Add more translations here
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Set the default language here
  interpolation: {
    escapeValue: false
  }
})

export default i18n
