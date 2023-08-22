import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ContentDisplay = ({ contentPages }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [loading, setLoading] = useState(false)

  const fetchNextPage = () => {
    setLoading(true)

    // Simulate a delay for loading (you can remove this in production)
    setTimeout(() => {
      setCurrentPage(currentPage + 1)
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    fetchNextPage()
  }, []) // Fetch the initial page

  // Add a listener for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 100
      ) {
        // Load the next page when nearing the bottom
        if (!loading && currentPage < contentPages.length - 1) {
          fetchNextPage()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentPage, loading, contentPages])

  return (
        <div>
            {contentPages[currentPage].map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            {loading && <p>Loading...</p>}
        </div>
  )
}

ContentDisplay.propTypes = {
  contentPages: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
}
export default ContentDisplay
