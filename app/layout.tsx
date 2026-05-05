import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Krigo Fine Dining | Family Restaurant',
  description: 'Experience fine dining at Krigo, a premium family restaurant offering exceptional cuisine and service.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-background">
      <body>
        {children}
      </body>
    </html>
  )
}
