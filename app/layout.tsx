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
  title: 'Thomas Kaufmann, BA pth. – Psychotherapeut in Linz | Verhaltenstherapie',
  description: 'Psychotherapeut in Ausbildung unter Supervision in Linz. Verhaltenstherapie mit Schwerpunkt Krisenintervention. Praxis in der Domgasse 14, 4020 Linz. Auch Online-Therapie möglich.',
  keywords: ['Psychotherapie', 'Verhaltenstherapie', 'Linz', 'Krisenintervention', 'Thomas Kaufmann', 'Psychotherapeut', 'Angst', 'Depression', 'Burnout', 'Paartherapie'],
  authors: [{ name: 'Thomas Kaufmann' }],
  creator: 'Thomas Kaufmann',
  publisher: 'Thomas Kaufmann',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thomas-kaufmann.at'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Thomas Kaufmann, BA pth. – Psychotherapeut in Linz',
    description: 'Verhaltenstherapie & Krisenintervention in Linz. Im Hier und Jetzt an konkreten Lösungen arbeiten.',
    type: 'website',
    locale: 'de_AT',
    url: 'https://thomas-kaufmann.at',
    siteName: 'Thomas Kaufmann - Psychotherapie',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Kaufmann, BA pth. – Psychotherapeut in Linz',
    description: 'Verhaltenstherapie & Krisenintervention in Linz. Im Hier und Jetzt an konkreten Lösungen arbeiten.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
