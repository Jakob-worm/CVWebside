import React from 'react'
import { useTranslation } from 'react-i18next'

// Import of image (adjust the path and filename as needed)
import aboutMeImage from '../pictures/cocktail-svgrepo-com.svg'

function WorkAndEducation () {
  const { t } = useTranslation()
  return (
        <div className="WorkAndEducation-Container">
            <div className="WorkAndEducation-Title">{t('AboutMeTitle')}</div>
            <div className="WorkAndEducation-Content">{t('AboutMeContent')}</div>
            <img src={aboutMeImage} alt="About Me" className="AboubtMe-Image" />
        </div>
  )
}

export default WorkAndEducation
