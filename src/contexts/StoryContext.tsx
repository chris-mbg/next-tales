'use client'

import { createContext, useState, useEffect, SetStateAction } from 'react'
import data from '../../data/story-blocks.json'
import { StoryChoice, StoryThemeData, StoryThemes } from '../models/story'

type StoryContextType = {
  chosenTheme: (typeof StoryThemes)[number] | null
  setChosenTheme: React.Dispatch<
    SetStateAction<'forest' | 'ocean' | 'space' | null>
  >
  themeChoices: StoryChoice[] | null
  storyTemplate: string[] | null
  userChosenStory: string[]
  step: number | null
}

export const StoryContext = createContext<StoryContextType>({
  chosenTheme: null,
  setChosenTheme: () => {},
  themeChoices: null,
  storyTemplate: null,
  userChosenStory: [],
  step: null
})

const storyBlockData = data.themes as StoryThemeData

type StoryProviderProps = {
  children: React.ReactNode
}

const StoryProvider = ({ children }: StoryProviderProps) => {
  const [chosenTheme, setChosenTheme] = useState<
    (typeof StoryThemes)[number] | null
  >(null)
  const [themeChoices, setThemeChoices] = useState<StoryChoice[] | null>(null)
  const [storyTemplate, setStoryTemplate] = useState<string[] | null>(null)
  const [userChosenStory, setUserChosenStory] = useState([])
  const [step, setStep] = useState<number | null>(null)

  useEffect(() => {
    if (!chosenTheme) {
      return
    }
    setStep(0)
    setThemeChoices(storyBlockData[chosenTheme].choices)
    setStoryTemplate(storyBlockData[chosenTheme].story_template.split('.'))
  }, [chosenTheme])

  const values = {
    chosenTheme,
    setChosenTheme,
    themeChoices,
    storyTemplate,
    userChosenStory,
    step
  }

  return (
    <StoryContext.Provider value={values}>{children}</StoryContext.Provider>
  )
}

export default StoryProvider
