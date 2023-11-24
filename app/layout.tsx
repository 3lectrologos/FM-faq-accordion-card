import type { Metadata } from 'next'
import { Kumbh_Sans } from 'next/font/google'
import './globals.css'

const kumbhSans = Kumbh_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FAQ accordion card'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.className}`}>
      <main>
        {children}
      </main>
      </body>
    </html>
  )
}
