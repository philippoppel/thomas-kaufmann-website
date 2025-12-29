import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ - Häufige Fragen zur Psychotherapie',
  description: 'Antworten auf häufige Fragen zu Psychotherapie, Kosten, Ablauf, Schweigepflicht und mehr. Thomas Kaufmann - Verhaltenstherapie in Linz.',
  openGraph: {
    title: 'FAQ - Häufige Fragen | Thomas Kaufmann Psychotherapie',
    description: 'Antworten auf häufige Fragen zu Psychotherapie, Kosten, Ablauf und Schweigepflicht.',
    url: 'https://thomaskaufmann.vercel.app/faq',
  },
  alternates: {
    canonical: '/faq',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
