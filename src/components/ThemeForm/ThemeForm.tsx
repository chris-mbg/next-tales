import { StoryContext } from '@/src/contexts/StoryContext'
import { StoryThemes } from '@/src/models/story'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'

export default function ThemeForm() {
  const { handleThemeSubmit } = useContext(StoryContext)

  const [selectedTheme, setSelectedTheme] = useState<(typeof StoryThemes)[number]>()
  const handleThemeRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedTheme(e.target.value as (typeof StoryThemes)[number])
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedTheme) {
      return
    }
    handleThemeSubmit(selectedTheme)
  }

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
            <label htmlFor={theme}>{theme.charAt(0).toUpperCase() + theme.slice(1)}</label>
          </div>
        ))}
      </fieldset>
      {selectedTheme && (
        <div>
          <p>Do you want to tell a story set in {selectedTheme}?</p>
          <button type="submit">Let the story begin!</button>
        </div>
      )}
    </form>
  )
}