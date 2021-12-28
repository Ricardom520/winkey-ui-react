import React, { useState } from 'react'

interface EmptyPlaceholderProps {
  id: string
}

const EmptyPlaceholder: React.SFC<EmptyPlaceholderProps> = (props) => {
  const { id } = props
  const [showEmptyPlaceholder, setShowEmptyPlaceholder] = useState<boolean>(false)

  const handleEnter = () => {
    console.log('???')
    setShowEmptyPlaceholder(true)
  }

  const handleLeave = () => {
    setShowEmptyPlaceholder(false)
  }

  return (
    <div 
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      data-alt={id} 
      key={id} 
      className={`empty_placeholder ${showEmptyPlaceholder ? 'show' : ''}`}
    />
  )
}

export default EmptyPlaceholder