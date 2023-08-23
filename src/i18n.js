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
      AboutMeContent: 'Hi, my name is Jakob and I am a 23-year-old IT-product development student. Through my study, I have worked on many projects ranging from physical products that incorporate digital technology to fully digital solutions. I created this website to showcase these projects.',
      ContactMeText: 'Contact me on:'
      // Add more translations here
    }
  },
  den: {
    translation: {
      greeting: 'Hej, Verden!',
      home: 'Hjem',
      AboutMeTitle: 'Om mig',
      AboutMeContent: 'Hej mit navn er Jakob og jeg er en 23 årigede IT-produktudvikling studrende. Gemmen mit studie har jeg lavet en masse fede projekter som jeg gerne vil vise lidt frem. Derfor har jeg lavet denne hjemmeside.  ',
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
