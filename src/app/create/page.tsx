import StoryWizard from '@/src/components/StoryWizard/StoryWizard'
import StoryProvider from '@/src/contexts/StoryContext'

export default function CreateStory() {
  return (
    <StoryProvider>
      <StoryWizard />
    </StoryProvider>
  )
}
