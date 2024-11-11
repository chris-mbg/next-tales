'use client'

import { useContext } from 'react'
import { StoryContext } from '@/src/contexts/StoryContext'
import QuestionForm from '../QuestionForm/QuestionForm'
import ThemeForm from '../ThemeForm/ThemeForm'

export default function StoryWizard() {
  const { chosenTheme, step, themeChoices } = useContext(StoryContext)

  if (!chosenTheme) {
    return <ThemeForm />
  }

  if (chosenTheme && themeChoices && step !== null) {
    return <QuestionForm />
  }

  return null
}
