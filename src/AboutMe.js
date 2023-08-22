import React from 'react'
import { useTranslation } from 'react-i18next'

// Import of image (adjust the path and filename as needed)
import aboutMeImage from './pictures/cocktail-svgrepo-com.svg'

function AboutMe () {
  const { t } = useTranslation()
  return (
        <div className="AboutMe-Container">
            <div className="AboutMe-Title">{t('AboutMeTitle')}</div>
            <div className="AboubtMe-Content">Content</div>
            <img src={aboutMeImage} alt="About Me" className="AboubtMe-Image" />
        </div>
  )
}

export default AboutMe
