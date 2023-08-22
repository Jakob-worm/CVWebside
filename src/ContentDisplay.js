import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const ContentDisplay = ({ contentPages }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [noMoreContent, setNoMoreContent] = useState(false) // Flag to track no more content
  const contentRef = useRef(null)

  const fetchNextPage = () => {
    setLoading(true)

    // Simulate a delay for loading (you can remove this in production)
    setTimeout(() => {
      if (currentPage < contentPages.length - 1) {
        setCurrentPage(currentPage + 1)
      } else {
        // Set the flag when there is no more content to load
        setNoMoreContent(true)
      }
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
      if (!noMoreContent && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        if (!loading && currentPage < contentPages.length - 1) {
          fetchNextPage()
        }
      }

      // Allow scrolling back to the previous page when scrolling up
      if (window.scrollY === 0) {
        scrollToPreviousPage()
      }
    }

    // Add or remove the scroll event listener based on the noMoreContent flag
    if (!noMoreContent) {
      window.addEventListener('scroll', handleScroll)
    } else {
      window.removeEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [currentPage, loading, contentPages, noMoreContent])

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight
    }
  }, [currentPage])

  return (
      <div ref={contentRef}>
        {contentPages[currentPage].map((item, index) => (
            <div key={index}>{item}</div>
        ))}
        {noMoreContent && <p>No more content</p>}
        {loading && <p>Loading...</p>}
      </div>
  )
}

ContentDisplay.propTypes = {
  contentPages: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired
}

export default ContentDisplay
