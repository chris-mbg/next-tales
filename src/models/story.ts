export const StoryThemes = ['forest', 'ocean', 'space'] as const

export type StoryTemplateTag =
  | 'main_character'
  | 'starting_location'
  | 'problem'
  | 'helper'
  | 'ending'

export type StoryChoice = {
  question: string
  options: string[]
  tag: StoryTemplateTag
}

export type StoryThemeBlock = {
  choices: StoryChoice[]
  story_template: string
}

export type StoryThemeData = Record<
  (typeof StoryThemes)[number],
  StoryThemeBlock
>
