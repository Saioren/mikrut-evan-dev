import React, { useEffect, useRef } from 'react'

interface ParallaxWrapperProps {
  children: React.ReactNode
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children }) => {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parallaxElement = parallaxRef.current

    if (!parallaxElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add parallax effect when element is in view
            parallaxElement.style.transition = 'transform 0.3s ease-out'
            parallaxElement.style.transform = 'translateY(0)'
          } else {
            // Reset style when element is out of view
            parallaxElement.style.transition = 'none'
            parallaxElement.style.transform = 'translateY(100px)'
          }
        })
      },
      {
        threshold: 0.5, // Adjust intersection threshold as needed
      },
    )

    observer.observe(parallaxElement)

    return () => {
      observer.unobserve(parallaxElement)
    }
  }, [])

  return (
    <div ref={parallaxRef} className="parallax-wrapper">
      {children}
    </div>
  )
}

export default ParallaxWrapper
