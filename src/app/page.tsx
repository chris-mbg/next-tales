import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-2xl space-y-6">
      <h1>Welcome to a magic kingdom!</h1>

      <p>Read previous stories: Link coming soon</p>

      <Link href="/create" className="font-handwrite block">
        Create your story -- link
      </Link>
    </div>
  )
}
