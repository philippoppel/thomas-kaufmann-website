import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum & Datenschutz',
  description: 'Impressum und Datenschutzerklärung der Psychotherapie-Praxis Thomas Kaufmann in Linz. Rechtliche Informationen und DSGVO.',
  openGraph: {
    title: 'Impressum & Datenschutz | Thomas Kaufmann Psychotherapie',
    description: 'Rechtliche Informationen und Datenschutzerklärung.',
    url: 'https://thomaskaufmann.vercel.app/impressum',
  },
  alternates: {
    canonical: '/impressum',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
