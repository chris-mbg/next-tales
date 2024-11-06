import type { Metadata } from 'next'
import { poppins, nothing_you_could_do } from '../utils/fonts'
import '../styles/globals.css'
import Topbar from '../components/Topbar/Topbar'

export const metadata: Metadata = {
  title: 'Next Tales',
  description: 'Next Tales - tell stories. Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins} ${nothing_you_could_do} min-h-screen flex flex-col`}
      >
        <Topbar />
        <main className="font-poppins flex justify-center items-center p-4 m-4 border border-slate-200 flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
