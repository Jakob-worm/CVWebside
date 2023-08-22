import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const ContentDisplay = ({ contentPages }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const contentRef = useRef(null)

  const fetchNextPage = () => {
    setLoading(true)

    // Simulate a delay for loading (you can remove this in production)
    setTimeout(() => {
      setCurrentPage(currentPage + 1)
      setLoading(false)
    }, 1000)
  }

  const scrollToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    fetchNextPage()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        if (!loading && currentPage < contentPages.length - 1) {
          fetchNextPage()
        }
      }

      // Allow scrolling back to the previous page when scrolling up
      if (window.scrollY === 0) {
        scrollToPreviousPage()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentPage, loading, contentPages])

  useEffect(() => {
    if (contentRef.current) {
      // Scroll to the bottom of the content container
      contentRef.current.scrollTop = contentRef.current.scrollHeight
    }
  }, [currentPage])

  return (
      <div ref={contentRef}>
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
