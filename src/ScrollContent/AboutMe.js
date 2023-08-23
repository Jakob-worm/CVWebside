import React from 'react'
import { useTranslation } from 'react-i18next'
import '../css/AboubtMe.css'

// Import of image (adjust the path and filename as needed)
import aboutMeImage from '../pictures/cocktail-svgrepo-com.svg'

function AboutMe () {
  const { t } = useTranslation()
  return (
        <div className="AboutMe-Container">
            <div className="AboutMe-Title">{t('AboutMeTitle')}</div>
            <div className="AboutMe-ContentWrapper">
                <div className="AboutMe-Content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio pellentesque. Cursus euismod quis viverra nibh cras pulvinar mattis. Arcu ac tortor dignissim convallis. Arcu dui vivamus arcu felis bibendum. Suspendisse sed nisi lacus sed viverra tellus in hac. Congue nisi vitae suscipit tellus mauris. Est lorem ipsum dolor sit amet. Massa sed elementum tempus egestas sed sed. Nec ullamcorper sit amet risus nullam eget felis.

                    Nibh tortor id aliquet lectus proin nibh. Nulla aliquet enim tortor at auctor urna nunc id. Vivamus at augue eget arcu dictum varius duis. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Vitae sapien pellentesque habitant morbi. Neque convallis a cras semper auctor neque vitae tempus. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Cras pulvinar mattis nunc sed blandit. Vulputate mi sit amet mauris. Nullam vehicula ipsum a arcu cursus vitae congue mauris. Neque gravida in fermentum et sollicitudin ac orci phasellus. Imperdiet proin fermentum leo vel.
                </div>
                <div className="AboutMe-ImageWrapper">
                    <img src={aboutMeImage} alt="About Me" className="AboutMe-Image" />
                </div>
            </div>
        </div>
  )
}

export default AboutMe
