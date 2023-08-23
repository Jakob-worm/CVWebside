// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Add your translations here
const resources = {
  en: {
    translation: {
      greeting: 'Hello, World!',
      home: 'Home',
      AboutMeTitle: 'About me',
      AboutMeContent: 'Textual description of me as a person',
      ContactMeText: 'Contact me on:'
      // Add more translations here
    }
  },
  den: {
    translation: {
      greeting: 'Hej, Verden!',
      home: 'Hjem',
      AboutMeTitle: 'Om mig',
      AboutMeContent: 'En beskrivlse af mig som person',
      ContactMeText: 'Kontakt mig på:'
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
