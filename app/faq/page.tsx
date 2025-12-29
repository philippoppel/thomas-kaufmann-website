'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { fadeInUp, staggerContainer, staggerItem, easing, duration } from '@/lib/animations'

const faqs = [
  {
    question: 'Für wen ist Psychotherapie geeignet?',
    answer: `Psychotherapie kann grundsätzlich von Menschen jeden Alters in Anspruch genommen werden – also von Kindern, Jugendlichen, Erwachsenen und älteren Personen. Sie müssen keine bestimmte Diagnose haben oder „schwer krank" sein, um psychotherapeutische Hilfe in Anspruch zu nehmen.

Viele meiner Klient:innen befinden sich in Lebenskrisen, fühlen sich überfordert, ängstlich oder niedergeschlagen, ohne dass eine formale psychische Störung vorliegen muss. Andere wiederum leiden unter klar definierten Krankheitsbildern wie Depressionen oder Angststörungen. Wieder andere kommen zur Therapie, um an ihrer Persönlichkeitsentwicklung zu arbeiten.

Kurz gesagt: Psychotherapie ist für alle Menschen geeignet, die etwas in ihrem Leben zum Positiven verändern möchten. Ich arbeite mit Einzelpersonen ebenso wie mit Paaren (Paartherapie), und dank meiner Praktikumserfahrung in einer Kinder- und Jugendambulanz auch gerne mit Kindern und Jugendlichen.`,
  },
  {
    question: 'Brauche ich eine Überweisung oder Diagnose, um Psychotherapie zu beginnen?',
    answer: `Nein. Sie können sich direkt an mich wenden, ohne vorherige Überweisung durch einen Arzt oder eine offizielle Diagnose. In Österreich ist Psychotherapie ein freies Gesundheitsangebot, das Sie eigeninitiativ in Anspruch nehmen können.

Sie müssen auch nicht bei der Krankenkasse „genehmigen" lassen, dass Sie zu mir kommen – da ich als Psychotherapeut in Ausbildung unter Supervision derzeit keine Kassenabrechnung anbiete, handelt es sich um ein rein privates Angebot.

Eine medizinische Abklärung kann in manchen Fällen sinnvoll sein (z.B. um körperliche Ursachen für psychische Beschwerden auszuschließen), aber sie ist keine Voraussetzung, um mit der Therapie zu starten.`,
  },
  {
    question: 'Was bedeutet "Psychotherapeut in Ausbildung unter Supervision"?',
    answer: `Die Bezeichnung „Psychotherapeut in Ausbildung unter Supervision" bedeutet, dass sich der Therapeut – in diesem Fall ich – in der letzten Phase der Psychotherapieausbildung befindet. Ich habe das vorgeschriebene Grundstudium und Fachspezifikum bereits abgeschlossen und viele Stunden praktischer Ausbildung absolviert.

Mit diesem Status darf ich bereits selbstständig mit Klient:innen arbeiten, unter Begleitung erfahrener Psychotherapeut:innen. Konkret heißt das: Ich nehme regelmäßig Supervision in Anspruch, d.h. ich bespreche meine Fälle anonymisiert mit einem/einer Lehrtherapeut:in.

Diese/r Supervisor:in steht mir beratend zur Seite, was ein zusätzliches Qualitätsmerkmal darstellt – es fließt sozusagen ein zweiter fachkundiger Blick in die Therapie ein. Die Verschwiegenheitspflicht gilt natürlich auch im Rahmen der Supervision – persönliche Daten oder konkrete Namen werden dort nicht preisgegeben.`,
  },
  {
    question: 'Unterliegen die Gespräche der Schweigepflicht?',
    answer: `Ja, absolut. Als Psychotherapeut unterliege ich der gesetzlichen Verschwiegenheitspflicht gemäß § 15 Psychotherapiegesetz. Das bedeutet, dass alle Informationen, die Sie mir anvertrauen, streng vertraulich behandelt werden.

Ich darf ohne Ihre ausdrückliche Zustimmung niemandem – auch nicht Angehörigen oder Behörden – Auskunft über die Inhalte unserer Gespräche geben. Dieser Schutz Ihrer Privatsphäre ist ein zentraler Grundpfeiler der Psychotherapie und ermöglicht erst das offene Sprechen über sehr persönliche Themen.

Die Schweigepflicht gilt selbstverständlich auch gegenüber Arbeitgebern, Versicherungsträgern etc., und sie besteht zeitlich unbegrenzt, sogar über das Ende der Therapie hinaus.`,
  },
  {
    question: 'Wie läuft das Erstgespräch ab?',
    answer: `Das Erstgespräch ist dazu da, dass wir uns kennenlernen und Ihr Anliegen besprechen. Typischerweise frage ich Sie zunächst, was Sie zu mir führt – was also der Grund ist, warum Sie Psychotherapie in Erwägung ziehen.

Sie können in Ihrem eigenen Tempo erzählen; es ist normal, wenn am Anfang noch nicht alle Worte leichtfallen. Ich werde Ihnen aufmerksam zuhören und gezielte Fragen stellen, um Ihre Situation besser zu verstehen.

Außerdem erhalten Sie Informationen darüber, wie ich vorgehe, und können alles fragen, was Ihnen auf dem Herzen liegt. Gegen Ende des Erstgesprächs werde ich mit Ihnen zusammenfassen, was ich verstanden habe, und wir besprechen, welche nächsten Schritte sinnvoll sein könnten.

Wichtig: Das Erstgespräch ist unverbindlich – Sie müssen sich noch nicht festlegen.`,
  },
  {
    question: 'Wie lange dauert eine Therapiesitzung? Wie oft finden Sitzungen statt?',
    answer: `Eine einzelne Therapiesitzung (Einzelsetting) dauert in der Regel 50 Minuten. Diese Zeit hat sich als Standard bewährt – man spricht auch von einer „therapeutischen Stunde". Bei Bedarf können wir im Einzelfall auch Doppelsitzungen vereinbaren (etwa 90–100 Minuten am Stück), zum Beispiel bei Paartherapie.

Die Frequenz der Sitzungen erfolgt üblicherweise einmal pro Woche. Zu Beginn einer Therapie ist ein wöchentlicher Rhythmus sinnvoll, um Kontinuität aufzubauen und rasch Fortschritte zu erzielen. In fortgeschrittenen Phasen oder bei geringerem Unterstützungsbedarf können die Abstände auch auf zwei- oder dreiwöchentlich ausgedehnt werden.`,
  },
  {
    question: 'Wie lange dauert eine Psychotherapie insgesamt?',
    answer: `Die Gesamtdauer einer Therapie lässt sich nicht pauschal vorhersagen – sie hängt von vielen Faktoren ab, z.B. von der Art Ihrer Probleme, Ihren Zielen und nicht zuletzt Ihrem Tempo.

Manche Anliegen lassen sich in kurzer Zeit bewältigen (einige Wochen oder wenige Monate Therapie, ca. 10–20 Sitzungen). In anderen Fällen dauert der Veränderungsprozess länger, insbesondere wenn Probleme schon sehr lange bestehen oder tief verwurzelt sind.

Durchschnittlich erstrecken sich ambulante Psychotherapien oft über einige Monate bis zu 1–2 Jahre. Eine Orientierung: Viele Therapien umfassen zwischen etwa 20 und 50 Stunden.

Mein Anliegen ist es, Ihnen so lange wie nötig und so kurz wie möglich zu begleiten.`,
  },
  {
    question: 'Was kostet eine Therapiestunde?',
    answer: `Als Psychotherapeut in Ausbildung unter Supervision biete ich meine Leistungen auf privater Basis an. Mein Honorar pro Einheit orientiert sich an den üblichen Sätzen, ist jedoch etwas reduzierter angesetzt, da eine Refundierung durch Krankenkassen nicht möglich ist.

Konkret:
• Einzelgespräch (50 Min.): € 80
• Einzelgespräch (100 Min.): € 160
• Paar-/Gruppengespräch (80 Min.): € 160
• Beratung für Unternehmen (50 Min.): € 150 + USt.

Psychotherapeutische Einheiten sind nach § 6 UStG umsatzsteuerbefreit.

Falls Sie sich in einer finanziellen Notlage befinden, sprechen Sie mich bitte an – wir finden dann individuelle Lösungen, damit Therapie nicht an den Kosten scheitern muss.`,
  },
  {
    question: 'Übernimmt die Krankenkasse die Kosten?',
    answer: `Derzeit leider nein. Wenn Sie bei mir in Therapie sind, handelt es sich um eine reine Privatleistung, die nicht von den gesetzlichen Krankenkassen refundiert wird. Das liegt daran, dass ich mich noch in Ausbildung befinde – in diesem Status kann man sein Honorar nicht bei der Krankenkasse einreichen.

Falls Sie eine Privatversicherung mit Psychotherapie-Deckung haben, können Sie dort eventuell um (Teil-)Kostenersatz ansuchen – dies müssten Sie individuell mit Ihrer Versicherung klären.

Ich habe meine Honorare entsprechend moderater gestaltet, um Ihnen entgegenzukommen. Generell sind Psychotherapie-Kosten im Rahmen der jährlichen Arbeitnehmerveranlagung (Steuerausgleich) in Österreich als außergewöhnliche Belastung absetzbar.`,
  },
  {
    question: 'Bieten Sie auch Online-Therapie an?',
    answer: `Ja. Ich biete Videotherapie über eine datensichere, DSGVO-konforme Plattform an. Alles was Sie dafür benötigen, ist ein ungestörter, geschützter Ort, ein Computer/Tablet oder Smartphone mit Kamera und Mikrofon und eine stabile Internetverbindung.

Online-Therapie hat sich als überraschend wirkungsvoll erwiesen; Studien zeigen, dass sie in vielen Fällen vergleichbar effektiv ist wie Face-to-Face-Therapie.

Natürlich können Online und Präsenz auch kombiniert werden (hybride Therapie): etwa wenn Sie mal auf Reisen sind oder krankheitsbedingt zuhause bleiben müssen.`,
  },
  {
    question: 'Bieten Sie Psychotherapie auch auf Englisch an?',
    answer: `Yes, I do. Obwohl meine Praxis in erster Linie deutschsprachig ausgerichtet ist, beherrsche ich die englische Sprache fließend (Cambridge English Certificate Level B2). Daher kann ich psychotherapeutische Sitzungen bei Bedarf auch auf Englisch durchführen.

If English is more comfortable for you, we can hold our sessions in English – I have experience working with international clients. In Linz gibt es viele Expats und internationale Studierende oder Fachkräfte, die Unterstützung suchen; ich möchte auch für diese Personen da sein.

Don't hesitate to contact me in English if you prefer – I'll be happy to help.`,
  },
  {
    question: 'Was passiert, wenn ich einen Termin absagen muss?',
    answer: `Das kann natürlich vorkommen – wichtig ist mir in solchen Fällen eine rechtzeitige Information. Vereinbarte Termine sind für Sie persönlich reserviert.

Wenn Sie verhindert sind, bitte ich Sie, den Termin spätestens 24 Stunden vorher abzusagen (per E-Mail oder Telefon). So kann ich den Termin noch anderweitig vergeben oder umplanen.

Sagen Sie später oder gar nicht ab, muss ich Ihnen das Honorar für die versäumte Sitzung in Rechnung stellen, da ich die Zeit exklusiv für Sie freigehalten habe. Im Falle plötzlicher Erkrankung oder unvorhergesehener Notfälle finden wir natürlich eine Kulanzlösung.`,
  },
  {
    question: 'Worin unterscheiden sich Psychotherapeut, Psychologe und Psychiater?',
    answer: `Diese drei Berufsbezeichnungen werden oft verwechselt:

Psychotherapeut: Hat eine spezifische mehrjährige Ausbildung in Psychotherapie absolviert. Psychotherapeut:innen behandeln seelische Leidenszustände mittels wissenschaftlich anerkannter Methoden der Gesprächs- und Verhaltenstherapie. Sie dürfen keine Medikamente verschreiben.

Psychologe: Hat ein Universitätsstudium der Psychologie (Master/Diplom) absolviert. Mit einer zusätzlichen Ausbildung kann ein Psychologe klinischer Psychologe oder Gesundheitspsychologe werden. Der Begriff „Psychologe" allein sagt nichts über die therapeutische Qualifikation.

Psychiater: Ist ein Facharzt für Psychiatrie. Er/sie hat Medizin studiert und danach eine Facharztausbildung gemacht. Psychiater:innen können als Ärzt:innen Medikamente (Psychopharmaka) verschreiben und somatische Ursachen psychischer Symptome abklären.

Oft arbeiten Psychiater und Psychotherapeuten eng zusammen: Der Psychiater stellt Diagnosen und hilft mit Medikamenten, während der Psychotherapeut regelmäßige Gespräche führt.`,
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      variants={staggerItem}
      className="border-b border-neutral-200 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <span className="text-lg md:text-xl font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-neutral-600 leading-relaxed whitespace-pre-line">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
                Häufige Fragen
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary-200/60 -z-10 transform -skew-x-2" />
              </span>
            </h1>

            <p className="text-xl text-neutral-600 max-w-2xl">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um Psychotherapie, meine Praxis und den Ablauf einer Behandlung.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="py-16 px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 lg:px-8 bg-primary-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Noch Fragen?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Kontaktieren Sie mich gerne für ein unverbindliches Erstgespräch.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white rounded-2xl font-medium hover:bg-primary-800 transition-all duration-500 ease-out hover:shadow-soft-lg hover:-translate-y-1"
          >
            Kontakt aufnehmen
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
