import { Poppins, Nothing_You_Could_Do } from 'next/font/google'

const poppins_init = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '800'],
  variable: '--font-poppins',
})

const nothing_you_could_do_init = Nothing_You_Could_Do({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-nothing-you-could-do',
})

export const poppins = poppins_init.variable
export const nothing_you_could_do = nothing_you_could_do_init.variable
