import { useState, useEffect } from 'react'
import './Cursor.css'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursor = (e) => {
      const target = e.target
      setIsPointer(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      )
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', updateCursor)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', updateCursor)
    }
  }, [])

  return (
    <>
      <div
        className={`cursor ${isPointer ? 'cursor--pointer' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`cursor-follower ${isPointer ? 'cursor-follower--pointer' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}

export default Cursor
