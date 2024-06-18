import React, { useEffect, useRef, useState } from 'react'
import classes from './index.module.scss'

const MouseBubble: React.FC = () => {
  const overlayRef = useRef<HTMLCanvasElement>(null)
  const mouseTrailRef = useRef<HTMLDivElement>(null)
  const [interacting, setInteracting] = useState(false)
  const [onScreen, setOnScreen] = useState(false)
  const [cursorPointer, setCursorPointer] = useState(false)

  useEffect(() => {
    const mouseTrail = mouseTrailRef.current

    const mouseMovement = (e: MouseEvent) => {
      const x = e.clientX,
        y = e.clientY

      mouseTrail.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`
    }

    const handleMouseMove = (e: MouseEvent) => {
      const interactable = e.target && (e.target as HTMLElement).closest("[class*='interactable']")

      setInteracting(!!interactable)
      mouseMovement(e)

      if (
        e.target instanceof HTMLAnchorElement ||
        (e.target instanceof HTMLElement && e.target.hasAttribute('href')) //
      ) {
        setCursorPointer(true)
      } else {
        setCursorPointer(false)
      }
    }

    const handleHover = () => {
      setOnScreen(true)
    }

    const handleMouseLeave = () => {
      setOnScreen(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseenter', handleHover)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseenter', handleHover)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className={classes.container}>
      <canvas ref={overlayRef} className={classes.overlay} />
      <div
        style={{
          width: cursorPointer ? '24px' : interacting ? '76px' : '16px',
          height: cursorPointer ? '24px' : interacting ? '76px' : '16px',
        }}
        className={[
          classes.cursor,
          onScreen ? classes.shown : classes.hidden,
          cursorPointer ? classes.pointer : '',
        ].join(' ')}
      >
        <div
          ref={mouseTrailRef}
          className={[classes.smallBubble, classes.mouseTrail].join(' ')}
          style={{
            transition: 'background-color 200ms linear',
            backgroundColor: 'var(--font-color)',
          }}
        ></div>
      </div>
    </div>
  )
}

export default MouseBubble
