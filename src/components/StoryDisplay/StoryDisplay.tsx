'use client'
import { useContext } from 'react'
import { StoryContext } from '@/src/contexts/StoryContext'

export default function StoryDisplay() {
  const { storyTemplate, step } = useContext(StoryContext)

  if (!storyTemplate) {
    return null
  }

  const lastCharacterToShow = storyTemplate?.indexOf('{')

  return (
    <div>
      Story: {lastCharacterToShow > 0 ? storyTemplate?.slice(0, lastCharacterToShow - 1) + '...' : storyTemplate}{' '}
    </div>
  )
}
