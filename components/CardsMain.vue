<template>
    <!-- anchor choose website -->
    <span class="anchor" id="Website_wählen"></span>
    <!-- Background-Gradient -->
    <section class="bg-gradient-to-br from-white via-sky-50 to-sky-100">
        <div
            class="container mx-auto a:px-2 i:px-4 xl:px-10 2xl:px-20 5xl:px-32 md:pt-20"
        >
            <!-- Headline -->
            <div class="xl:w-5/6 text-center mx-auto">
                <h1
                    class="text-gray-900 font-bold text-4xl md:text-6xl 2xl:text-7xl headline"
                >
                    <span class="text-gradient">Fertige Website-Vorlage </span>
                    auswählen&nbsp;und<br />
                    <span class="text-gradient inline-block mt-2"
                        >eigene Website
                    </span>
                    erstellen lassen.
                </h1>
                <DividerGradient />
            </div>
            <div class="flex flex-wrap mt-12 lg:mt-14">
                <!-- Cards -->
                <div
                    v-for="site in templates"
                    class="relative lg:w-1/3 sm:w-1/2 p-4 5xl:p-10 w-full rounded-lg shadow-sm md:hover:shadow-xl md:inset-0 md:hover:-top-4 md:transition-[top_300ms_linear] mb-10"
                >
                    <!-- Image -->
                    <a
                        :href="site.url"
                        :aria-label="site.alt"
                        class="block relative h-48 5xl:h-72 rounded overflow-hidden shadow-md"
                    >
                        <picture>
                            <source
                                type="image/webp"
                                media="(max-width: 1919px)"
                                :srcset="site.imageSmallWebp"
                            />
                            <source
                                type="image/jpg"
                                media="(max-width: 1919px)"
                                :srcset="site.imageSmall"
                            />
                            <source
                                type="image/webp"
                                media="(min-width: 1920px)"
                                :srcset="site.imageWebp"
                            />
                            <img
                                :alt="site.alt"
                                class="object-cover w-full h-full block"
                                :src="site.image"
                                loading="lazy"
                            />
                        </picture>
                    </a>
                    <!-- Text -->
                    <div class="mt-5 text-center">
                        <h2 class="text-gray-500 text-md tracking-widest mb-2">
                            {{ site.name }}
                        </h2>
                        <h3 class="text-gray-700 text-lg font-medium mb-2">
                            {{ site.description }}
                        </h3>
                        <!-- Button -->
                        <a
                            :href="site.url"
                            class="text-white w-2/4 justify-center text-lg font-medium inline-flex items-center shadow-md bg-gradient-to-r from-sky-500 to-sky-700 rounded-full hover:from-sky-600 hover:to-sky-900 transition py-3 px-5 mt-2 xl:mt-5"
                            >Ansehen
                            <svg class="w-7 ml-2" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M12 4.5C7 4.5 2.7 7.6 1 12C2.7 16.4 7 19.5 12 19.5H13.1C13 19.2 13 18.9 13 18.5C13 18.1 13 17.8 13.1 17.4C12.7 17.4 12.4 17.5 12 17.5C8.2 17.5 4.8 15.4 3.2 12C4.8 8.6 8.2 6.5 12 6.5S19.2 8.6 20.8 12C20.7 12.2 20.5 12.4 20.4 12.7C21.1 12.9 21.7 13.1 22.3 13.5C22.6 13 22.8 12.5 23 12C21.3 7.6 17 4.5 12 4.5M12 9C10.3 9 9 10.3 9 12S10.3 15 12 15 15 13.7 15 12 13.7 9 12 9M19 21V19H15V17H19V15L22 18L19 21"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

const config = useRuntimeConfig()

const base = config.app.baseURL

const templates = [
    {
        name: 'Portfoliowebsite',
        description: 'Privatperson, Einzelunternehmer, Visitenkarte',
        url: '#',
        alt: 'website-vorlage',
        imageSmallWebp: `${base}images/templates/dummy-template-192.webp`,
        imageSmall: `${base}images/templates/dummy-template-192.jpg`,
        imageWebp: `${base}images/templates/dummy-template-288.webp`,
        image: `${base}images/templates/dummy-template-288.jpg`,
    },
    {
        name: 'Landingpage',
        description: 'Marketing, Kundenakquise, Produktplatzierung ',
        url: '#',
        alt: 'website-vorlage',
        imageSmallWebp: `${base}images/templates/dummy-template-192.webp`,
        imageSmall: `${base}images/templates/dummy-template-192.jpg`,
        imageWebp: `${base}images/templates/dummy-template-288.webp`,
        image: `${base}images/templates/dummy-template-288.jpg`,
    },
    {
        name: 'Eventwebsite',
        description: 'Veranstaltungen, Hochzeit, Urlaub, Geburtstag',
        url: '#',
        alt: 'website-vorlage',
        imageSmallWebp: `${base}images/templates/dummy-template-192.webp`,
        imageSmall: `${base}images/templates/dummy-template-192.jpg`,
        imageWebp: `${base}images/templates/dummy-template-288.webp`,
        image: `${base}images/templates/dummy-template-288.jpg`,
    },
    {
        name: 'Gesundheitsberufe',
        description: 'Praxis, Ärzte, Physiotherapie, Heilpraktiker',
        url: '#',
        alt: 'website-vorlage',
        imageSmallWebp: `${base}images/templates/dummy-template-192.webp`,
        imageSmall: `${base}images/templates/dummy-template-192.jpg`,
        imageWebp: `${base}images/templates/dummy-template-288.webp`,
        image: `${base}images/templates/dummy-template-288.jpg`,
    },
    {
        name: 'Handwerkerberufe',
        description: 'Mechaniker, Dachdecker, Fliesenleger',
        url: '#',
        alt: 'website-vorlage',
        imageSmallWebp: `${base}images/templates/dummy-template-192.webp`,
        imageSmall: `${base}images/templates/dummy-template-192.jpg`,
        imageWebp: `${base}images/templates/dummy-template-288.webp`,
        image: `${base}images/templates/dummy-template-288.jpg`,
    },
    {
        name: 'Business',
        description: 'Metallindustrie, Bauindustrie',
        url: '#',
        alt: 'website-vorlage',
        imageSmallWebp: `${base}images/templates/dummy-template-192.webp`,
        imageSmall: `${base}images/templates/dummy-template-192.jpg`,
        imageWebp: `${base}images/templates/dummy-template-288.webp`,
        image: `${base}images/templates/dummy-template-288.jpg`,
    },
]
</script>
