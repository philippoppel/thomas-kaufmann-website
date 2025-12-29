'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp, easing, duration } from '@/lib/animations'

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary-100 via-primary-50 to-white pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: duration.slow, ease: easing.apple }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 mb-8 group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              <span className="relative inline-block">
                Impressum & Datenschutz
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-200/60 -z-10 transform -skew-x-2" />
              </span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Impressum Section */}
          <motion.section
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: duration.slow, ease: easing.apple, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">Impressum</h2>

            <div className="space-y-8 text-neutral-600 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Medieninhaber / Offizielle Anbieterin der Website
                </h3>
                <p>
                  <strong className="text-neutral-900">Thomas Kaufmann, BA pth.</strong><br />
                  Psychotherapeut in Ausbildung unter Supervision<br />
                  (Fachrichtung Verhaltenstherapie)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Kontakt</h3>
                <p>
                  <strong>Praxisanschrift:</strong> Domgasse 14, 4020 Linz, Österreich<br />
                  <strong>E-Mail:</strong>{' '}
                  <a href="mailto:praxis@thomas-kaufmann.at" className="text-primary-700 hover:text-primary-800">
                    praxis@thomas-kaufmann.at
                  </a><br />
                  <strong>Telefon:</strong> wird in Kürze bekanntgegeben
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Berufsrechtliche Grundlage
                </h3>
                <p>
                  Psychotherapiegesetz, BGBl. Nr. 361/1990 in der geltenden Fassung
                  (einsehbar über das Rechtsinformationssystem des Bundes)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Aufsichtsbehörde</h3>
                <p>
                  Bundesministerium für Soziales, Gesundheit, Pflege und Konsumentenschutz (BMSGPK)<br />
                  Stubenring 1, 1010 Wien
                </p>
                <p className="mt-2">
                  <strong>Zuständige Behörde gem. EG-Dienstleistungsrichtlinie:</strong><br />
                  Bezirksverwaltungsbehörde (Magistrat Linz)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Haftungsausschluss</h3>
                <p>
                  Sämtliche Inhalte dieser Website wurden mit Sorgfalt erstellt und werden regelmäßig
                  aktualisiert. Dennoch kann keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität
                  der Informationen übernommen werden. Trotz sorgfältiger inhaltlicher Kontrolle übernehme
                  ich keine Haftung für die Inhalte externer Links – für den Inhalt verlinkter Seiten sind
                  ausschließlich deren Betreiber verantwortlich.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Urheberrecht</h3>
                <p>
                  Alle Texte, Bilder, Grafiken und sonstigen Inhalte auf dieser Website sind urheberrechtlich
                  geschützt. Jegliche Verwendung außerhalb der Grenzen des Urheberrechts (insbesondere
                  Vervielfältigung, Bearbeitung, Verbreitung) bedarf der schriftlichen Zustimmung des
                  Medieninhabers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht-kommerziellen
                  Gebrauch gestattet.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Online-Streitbeilegung</h3>
                <p>
                  Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform
                  der Europäischen Kommission zu richten:{' '}
                  <a
                    href="http://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 hover:text-primary-800"
                  >
                    http://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="mt-2">
                  Ich weise jedoch darauf hin, dass ich nicht verpflichtet und nicht bereit bin, an einem
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Offenlegung nach § 25 MedG</h3>
                <p>
                  Diese Website dient der Information über die angebotenen psychotherapeutischen Leistungen
                  sowie der Kontaktaufnahme. Alle Inhalte wurden von Thomas Kaufmann selbst erstellt
                  (sofern nicht anders angegeben). Es besteht kein finanzielles oder organisatorisches
                  Naheverhältnis zu Drittunternehmen.
                </p>
              </div>

              <p className="text-sm text-neutral-500 mt-8">
                Stand: Linz, Dezember 2025 (Änderungen vorbehalten)
              </p>
            </div>
          </motion.section>

          {/* Datenschutz Section */}
          <motion.section
            id="datenschutz"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: duration.slow, ease: easing.apple, delay: 0.2 }}
            className="pt-8 border-t border-neutral-200"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">Datenschutzerklärung</h2>

            <div className="space-y-8 text-neutral-600 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Einleitung</h3>
                <p>
                  Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich verarbeite Ihre
                  Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (EU-Datenschutzgrundverordnung
                  DSGVO, Datenschutzgesetz DSG und Telekommunikationsgesetz TKG). In dieser Datenschutzerklärung
                  informiere ich Sie darüber, wie ich personenbezogene Daten im Rahmen dieser Website und
                  meiner Praxis erhebe, speichere und verwende, und welche Rechte Sie in Bezug auf Ihre Daten haben.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Verantwortlicher (Datenschutz)
                </h3>
                <p>
                  Thomas Kaufmann, BA pth.<br />
                  Domgasse 14, 4020 Linz<br />
                  E-Mail:{' '}
                  <a href="mailto:praxis@thomas-kaufmann.at" className="text-primary-700 hover:text-primary-800">
                    praxis@thomas-kaufmann.at
                  </a>
                </p>
                <p className="mt-2">
                  (Als Einzelunternehmer bin ich Verantwortlicher im Sinne der DSGVO für alle hier
                  verarbeiteten personenbezogenen Daten.)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Datenerfassung auf dieser Website
                </h3>
                <p>
                  Beim Besuch dieser Website werden durch den Webserver automatisch einige technische
                  Zugriffsdaten aufgezeichnet (Server-Logfiles). Dazu gehören z.B. IP-Adresse des anfragenden
                  Geräts, Datum und Uhrzeit des Aufrufs, die aufgerufene Seite (URL), der verwendete Browser
                  sowie ggf. eine Meldung über den erfolgreichen Abruf.
                </p>
                <p className="mt-2">
                  Diese Daten sind für den Betrieb der Website technisch erforderlich und dienen der Sicherheit
                  (z.B. Abwehr von Angriffsversuchen). Ich führe diese Log-Daten nicht mit anderen Daten zusammen
                  und ziehe daraus keine Rückschlüsse auf einzelne Personen. Die Rechtsgrundlage für diese
                  Datenverarbeitung ist mein berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), einen sicheren
                  und reibungslosen Webauftritt bereitzustellen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Cookies</h3>
                <p>
                  Diese Website verwendet keine Analyse-Cookies oder Tracking-Dienste zu Marketingzwecken.
                  Es kommen lediglich technisch notwendige Cookies zum Einsatz (z.B. für die Seitennavigation),
                  sofern überhaupt. Sie können die Speicherung von Cookies in Ihrem Browser deaktivieren;
                  dies könnte allerdings die Funktionalität der Website beeinträchtigen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Kontaktaufnahme per E-Mail
                </h3>
                <p>
                  Wenn Sie mich per E-Mail kontaktieren, werden Ihre angegebenen Daten (E-Mail-Adresse, ggf. Name
                  und Telefonnummer) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir
                  gespeichert. Diese Daten werden ohne Ihre Einwilligung nicht weitergegeben.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Ihre Rechte</h3>
                <p>
                  Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
                  Datenübertragbarkeit und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten
                  gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer
                  Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich
                  ist dies die Datenschutzbehörde.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Psychotherapeutische Verschwiegenheit
                </h3>
                <p>
                  Unabhängig von den datenschutzrechtlichen Bestimmungen unterliege ich als Psychotherapeut
                  der gesetzlichen Verschwiegenheitspflicht gemäß § 15 Psychotherapiegesetz. Diese Verschwiegenheit
                  bezieht sich auf alle Informationen, die mir im Rahmen der Berufsausübung anvertraut werden,
                  und besteht zeitlich unbegrenzt.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Back Link */}
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ duration: duration.slow, ease: easing.apple, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-neutral-200"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
