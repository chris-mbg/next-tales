import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { StoryContext } from '@/src/contexts/StoryContext'

export default function QuestionForm() {
  const { step, themeChoices, handleQuestionSubmit, reset } = useContext(StoryContext)

  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  if (step === null || !themeChoices) {
    return null
  }

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value as string)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedOption) {
      return
    }
    handleQuestionSubmit({
      selectedOption,
      tag: themeChoices[step].tag,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="gap-8 flex flex-col justify-center">
      <fieldset className="space-y-4">
        <legend className="font-handwrite text-2xl">{themeChoices[step].question}</legend>
        {themeChoices[step].options.map((option) => (
          <div key={option} className="flex gap-4 my-2 items-center">
            <input
              type="radio"
              className="radio radio-lg radio-primary"
              id={option}
              value={option}
              name={themeChoices[step].tag}
              checked={selectedOption === option}
              onChange={handleRadioChange}
            />
            <label htmlFor={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</label>
          </div>
        ))}
      </fieldset>
      {selectedOption && (
        <div className="flex justify-between items-center">
          <button
            type="submit"
            disabled={!selectedOption || themeChoices?.length === step + 1}
            className="btn-primary btn"
          >
            Choose!
          </button>
          <button className="btn btn-outline btn-sm" type="button" onClick={() => reset()}>
            Reset
          </button>
        </div>
      )}
    </form>
  )
}
