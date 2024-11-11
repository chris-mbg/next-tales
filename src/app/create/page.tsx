import StoryDisplay from '@/src/components/StoryDisplay/StoryDisplay'
import StoryWizard from '@/src/components/StoryWizard/StoryWizard'
import StoryProvider from '@/src/contexts/StoryContext'

export default function CreateStory() {
  return (
    <StoryProvider>
      <div className="flex flex-col gap-10">
        <StoryDisplay />
        <StoryWizard />
      </div>
    </StoryProvider>
  )
}
