<template>
    <!-- anchor FAQ -->
    <span class="anchor !-top-12 md:!top-0" id="Fragen"></span>
    <section class="bg-gradient-to-br from-white via-sky-50 to-sky-100 pt-8">
        <div
            class="container mx-auto a:px-2 i:px-4 xl:px-10 2xl:px-20 5xl:px-56 pt-10 md:pt-28"
        >
            <div v-for="item in faq">
                <h3 :id="'accordion-heading-' + item.id">
                    <button
                        type="button"
                        class="flex items-center justify-between w-full text-left shadow-md p-5 mb-2"
                        :data-accordion-target="'#accordion-body-' + item.id"
                    >
                        <span>{{ item.question }}</span>
                        <svg
                            data-accordion-icon
                            class="w-6 h-6 shrink-0 transition"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </h3>
                <div
                    :id="'accordion-body-' + item.id"
                    class="max-h-0 overflow-hidden transition-[max-height] duration-500"
                >
                    <div class="p-5 font-light shadow-sm">
                        <p class="mb-2 text-gray-600">
                            {{ item.answer }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
onMounted(() => {
    const accordionButtons = document.querySelectorAll(
        '[data-accordion-target]'
    )

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = document.querySelector(
                button.dataset.accordionTarget
            )
            const icon = button.querySelector('[data-accordion-icon]')

            target.classList.toggle('max-h-96')
            icon.classList.toggle('rotate-180')
        })
    })
})

const faq = [
    {
        id: '1',
        question:
            'Gibt es auch andere Zahlungsmöglichkeiten neben PayPal und Kreditkarte?',
        answer: 'Sie können auch als Gast mit PayPal bezahlen, falls Sie kein Konto eröffnen möchten. Außerdem können Sie per Dauer-/Überweisung bezahlen. Bitte kontaktieren Sie uns in diesem Fall, damit wir Ihnen die Bankverbindung mitteilen können.',
    },
    {
        id: '2',
        question: 'Welche Inhalte soll ich Ihnen zukommen lassen und wie?',
        answer: 'Um aus einer Website-Vorlage eine für Sie angepasste Website zu machen, benötigen wir Ihre Texte und Bilder. Diese tauschen wir dann mit denen aus der Vorlage aus. Falls Sie bestimmte Abschnitte in der Website-Vorlage nicht benötigen, entfernen wir diese. Sie können uns Ihre Inhalte und Mitteilungen per E-Mail oder WhatsApp (auch gerne Sprachnachrichten) zukommen lassen. Im nachfolgenden Abschnitt finden Sie die Kontaktmöglichkeiten.',
    },
    {
        id: '3',
        question: 'Kann ich die Inhalte auf meiner Website selbst ändern?',
        answer: 'Ja, wir bieten Ihnen eine einfache und intuitive Benutzeroberfläche, mit der Sie Ihre Website selbst verwalten können. Mit diesem kleinen CMS für statische Websites können Sie Texte, Bilder, Links und Dokumente ändern, sowie auch neue einfügen.',
    },
    {
        id: '4',
        question: 'Können Zusatzkosten entstehen?',
        answer: 'Nein, Sie erwerben eine fertige Website, die Sie selbst verwalten können und/oder einen Hosting-Service, der jährlich abgerechnet wird und alles beinhaltet, damit Ihre Website technisch und rechtlich sicher online bleibt. Generell müssen Sie sich aber für ein Hosting entscheiden, ob bei uns oder einem anderen Anbieter, da das reine Erwerben einer Website, diese nicht online verfügbar macht. Individuelle Wünsche und Änderungen werden nach Aufwand berechnet und immer vorher mit Ihnen abgesprochen.',
    },
]
</script>
