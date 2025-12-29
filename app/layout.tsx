import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['600', '700']
})

// TODO: Change to 'https://thomas-kaufmann.at' when custom domain is configured
const siteUrl = 'https://thomaskaufmann.vercel.app'

export const metadata: Metadata = {
  title: {
    default: 'Thomas Kaufmann, BA pth. – Psychotherapeut in Linz | Verhaltenstherapie',
    template: '%s | Thomas Kaufmann - Psychotherapie Linz'
  },
  description: 'Psychotherapeut in Ausbildung unter Supervision in Linz. Verhaltenstherapie mit Schwerpunkt Krisenintervention. Praxis in der Domgasse 14, 4020 Linz. Auch Online-Therapie möglich.',
  keywords: ['Psychotherapie', 'Verhaltenstherapie', 'Linz', 'Krisenintervention', 'Thomas Kaufmann', 'Psychotherapeut', 'Angst', 'Depression', 'Burnout', 'Paartherapie', 'Online-Therapie', 'Psychotherapie Linz', 'Therapeut Oberösterreich'],
  authors: [{ name: 'Thomas Kaufmann', url: siteUrl }],
  creator: 'Thomas Kaufmann',
  publisher: 'Thomas Kaufmann',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'de-AT': '/',
    },
  },
  openGraph: {
    title: 'Thomas Kaufmann, BA pth. – Psychotherapeut in Linz',
    description: 'Verhaltenstherapie & Krisenintervention in Linz. Im Hier und Jetzt an konkreten Lösungen arbeiten. Praxis Domgasse 14.',
    type: 'website',
    locale: 'de_AT',
    url: siteUrl,
    siteName: 'Thomas Kaufmann - Psychotherapie',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thomas Kaufmann - Psychotherapeut in Linz',
        type: 'image/jpeg',
      },
      {
        url: '/images/IMG_1186.JPG',
        width: 1297,
        height: 1730,
        alt: 'Thomas Kaufmann Portrait',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Kaufmann, BA pth. – Psychotherapeut in Linz',
    description: 'Verhaltenstherapie & Krisenintervention in Linz. Im Hier und Jetzt an konkreten Lösungen arbeiten.',
    images: ['/images/og-image.jpg'],
    creator: '@thomaskaufmann',
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
  verification: {
    // Add Google Search Console verification when available
    // google: 'verification-code',
  },
  category: 'health',
}

// JSON-LD Structured Data for Local Business / Healthcare
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': siteUrl,
  name: 'Thomas Kaufmann - Psychotherapie',
  alternateName: 'Psychotherapie Thomas Kaufmann Linz',
  description: 'Psychotherapeut in Ausbildung unter Supervision. Verhaltenstherapie mit Schwerpunkt Krisenintervention in Linz.',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/IMG_1186.JPG`,
  email: 'praxis@thomas-kaufmann.at',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Domgasse 14',
    addressLocality: 'Linz',
    postalCode: '4020',
    addressRegion: 'Oberösterreich',
    addressCountry: 'AT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.3064,
    longitude: 14.2858,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Linz',
    },
    {
      '@type': 'State',
      name: 'Oberösterreich',
    },
  ],
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  medicalSpecialty: 'Psychiatric',
  availableService: [
    {
      '@type': 'MedicalTherapy',
      name: 'Verhaltenstherapie',
      description: 'Kognitive Verhaltenstherapie für Erwachsene und Jugendliche',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Krisenintervention',
      description: 'Psychologische Erste Hilfe und Krisenbegleitung',
    },
    {
      '@type': 'MedicalTherapy',
      name: 'Online-Therapie',
      description: 'Videositzungen für flexible Therapie',
    },
  ],
  founder: {
    '@type': 'Person',
    name: 'Thomas Kaufmann',
    jobTitle: 'Psychotherapeut in Ausbildung unter Supervision',
    description: 'BA pth., Verhaltenstherapeut mit Erfahrung als Notfallsanitäter',
    image: `${siteUrl}/images/IMG_1186.JPG`,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Sigmund Freud Universität Wien',
    },
  },
  sameAs: [
    'https://findmytherapy.net',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#8B7355" />
        <meta name="geo.region" content="AT-4" />
        <meta name="geo.placename" content="Linz" />
        <meta name="geo.position" content="48.3064;14.2858" />
        <meta name="ICBM" content="48.3064, 14.2858" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
