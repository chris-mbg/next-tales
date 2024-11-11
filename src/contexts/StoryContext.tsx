'use client'

import { createContext, useState, useEffect, SetStateAction } from 'react'
import data from '../../data/story-blocks.json'
import { StoryChoice, StoryTemplateTag, StoryThemeData, StoryThemes } from '../models/story'

type StoryContextType = {
  chosenTheme: (typeof StoryThemes)[number] | null
  themeChoices: StoryChoice[] | null
  storyTemplate: string | null
  userChosenStory: string[]
  step: number | null
  handleThemeSubmit: (theme: (typeof StoryThemes)[number]) => void
  handleQuestionSubmit: ({ selectedOption, tag }: { selectedOption: string; tag: StoryTemplateTag }) => void
}

export const StoryContext = createContext<StoryContextType>({
  chosenTheme: null,
  themeChoices: null,
  storyTemplate: null,
  userChosenStory: [],
  step: null,
  handleThemeSubmit: () => {},
  handleQuestionSubmit: () => {},
})

const storyBlockData = data.themes as StoryThemeData

type StoryProviderProps = {
  children: React.ReactNode
}

const StoryProvider = ({ children }: StoryProviderProps) => {
  const [chosenTheme, setChosenTheme] = useState<(typeof StoryThemes)[number] | null>(null)
  const [themeChoices, setThemeChoices] = useState<StoryChoice[] | null>(null)
  const [storyTemplate, setStoryTemplate] = useState<string | null>(null)
  const [userChosenStory, setUserChosenStory] = useState([])
  const [step, setStep] = useState<number | null>(null)

  useEffect(() => {
    if (!chosenTheme) {
      return
    }
    setStep(0)
    setThemeChoices(storyBlockData[chosenTheme].choices)
    setStoryTemplate(storyBlockData[chosenTheme].story_template)
  }, [chosenTheme])

  useEffect(() => console.log('Context: Step: ', step), [step])

  const handleThemeSubmit = (theme: (typeof StoryThemes)[number]) => setChosenTheme(theme)

  const handleQuestionSubmit = ({ selectedOption, tag }: { selectedOption: string; tag: StoryTemplateTag }) => {
    if (!storyTemplate) {
      console.error('No template')
    }
    setStep((prev) => {
      if (prev === null) {
        return prev
      }
      if (themeChoices && prev === themeChoices.length - 1) {
        console.log('End of story')
        return prev
      }
      return prev + 1
    })
    const re = new RegExp(String.raw`{{${tag}}}`)
    setStoryTemplate((prev) => prev && prev?.replace(re, selectedOption))
  }

  const values = {
    chosenTheme,
    themeChoices,
    storyTemplate,
    userChosenStory,
    step,
    handleThemeSubmit,
    handleQuestionSubmit,
  }

  return <StoryContext.Provider value={values}>{children}</StoryContext.Provider>
}

export default StoryProvider
