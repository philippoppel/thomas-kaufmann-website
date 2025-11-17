import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['600', '700']
})

export const metadata: Metadata = {
  title: 'Thomas Kaufmann - Psychotherapie Linz | Verhaltenstherapie',
  description: 'Psychotherapeut in Ausbildung unter Supervision in Linz. Verhaltenstherapie mit Spezialgebiet Krisenintervention.',
  keywords: ['Psychotherapie', 'Verhaltenstherapie', 'Linz', 'Krisenintervention', 'Thomas Kaufmann'],
  authors: [{ name: 'Thomas Kaufmann' }],
  openGraph: {
    title: 'Thomas Kaufmann - Psychotherapie Linz',
    description: 'Professionelle psychotherapeutische Unterstützung in Linz',
    type: 'website',
    locale: 'de_AT',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
