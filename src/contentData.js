import React from 'react'
import AboutMe from './ScrollContent/AboutMe'
import Projects from './ScrollContent/Projects'

const staticContent = [
  [<AboutMe key="aboutMe" />, [<Projects key="projects"/>], 'Page 1 - Content 2'],
  ['Page 2 - Content 1', 'Page 2 - Content 2', 'Page 2 - Content 3']
  // Add more pages as needed
]

export default staticContent
