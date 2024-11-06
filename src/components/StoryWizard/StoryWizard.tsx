'use client'

import { ChangeEvent, useContext, useState } from 'react'
import { StoryContext } from '@/src/contexts/StoryContext'
import { StoryThemes } from '@/src/models/story'

export default function StoryWizard() {
  const { chosenTheme, setChosenTheme, step } = useContext(StoryContext)

  const [selectedTheme, setSelectedTheme] =
    useState<(typeof StoryThemes)[number]>()
  const handleThemeRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedTheme(e.target.value as (typeof StoryThemes)[number])
  }
  const handleSubmit = () => {
    if (!selectedTheme) { return }

    setChosenTheme(selectedTheme)
  }

  if (!chosenTheme) {
    // TODO Make into seperate component
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Where should we be?</legend>
          {StoryThemes.map((theme) => (
            <div key={theme} className="flex gap-4 my-2">
              <input
                type="radio"
                id={theme}
                value={theme}
                name="story-theme"
                checked={selectedTheme === theme}
                onChange={handleThemeRadioChange}
              />
              <label htmlFor={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </label>
            </div>
          ))}
        </fieldset>
        {selectedTheme && (
          <div>
            <p>Do you want to tell a story set in {selectedTheme}?</p>
            <button type="submit">Yes</button>
          </div>
        )}
      </form>
    )
  }
  return <div>StoryWizard</div>
}
