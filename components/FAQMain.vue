<template>
    <!-- anchor FAQ -->
    <span class="anchor !-top-12 md:!top-0" id="Fragen"></span>
    <section class="bg-gradient-to-br from-white via-sky-50 to-sky-100 pt-8">
        <div
            class="container mx-auto a:px-2 i:px-4 xl:px-10 2xl:px-20 5xl:px-32 pt-10 md:pt-28"
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

            target.classList.toggle('max-h-32')
            icon.classList.toggle('rotate-180')
        })
    })
})

const faq = [
    {
        id: '1',
        question: 'Lorep Ipsum?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.',
    },
    {
        id: '2',
        question: 'Lorep Ipsum2?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.',
    },
    {
        id: '3',
        question: 'Lorep Ipsum3?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.',
    },
    {
        id: '4',
        question: 'Lorep Ipsum4?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.',
    },
    {
        id: '5',
        question: 'Lorep Ipsum5?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.',
    },
]
</script>
