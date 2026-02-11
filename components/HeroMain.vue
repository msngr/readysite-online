<template>
    <!-- Background-Gradient -->
    <section
        class="relative bg-gradient-to-tr from-white via-sky-50 to-sky-100 overflow-hidden"
    >
        <!-- Hero Container -->
        <div class="relative z-20 container mx-auto px-4 pb-20 pt-28 md:pt-32">
            <!-- World Map Background -->
            <img
                v-if="isDesktop"
                class="hidden xl:block xl:absolute -z-10 translate-x-[-8%] translate-y-[29%] 2xl:translate-x-[-2%] 5xl:translate-x-[15%] 5xl:translate-y-[20%] scale-75"
                title="Wir operieren weltweit!"
                alt="World Map Background"
                src="~/assets/images/worldmap.svg"
                width="1440"
                height="560"
            />
            <!-- Headline -->
            <div class="xl:w-5/6 2xl:w-3/4 text-center mx-auto">
                <h1
                    class="text-gray-900 font-bold text-4xl md:text-6xl 2xl:text-7xl headline"
                >
                    <span class="text-gradient">Fertige Websites </span>
                    warten auf Ihren Inhalt!<br />
                </h1>
                <h2
                    class="text-gray-900 font-bold text-4xl md:text-6xl 2xl:text-7xl mt-2"
                >
                    <span class="text-gradient">Schnell </span>
                    und
                    <span class="text-gradient"> Einfach.</span>
                </h2>
                <DividerGradient />
            </div>

            <!-- Information -->
            <div
                class="flex flex-wrap justify-center space-y-2 md:space-y-0 mt-8 md:mt-6 xl:px-16 pb-8"
            >
                <div
                    class="p-4 md:w-1/3 flex flex-col text-center items-center shadow-sm rounded-full"
                >
                    <p class="text-xl font-medium text-gray-900">Ihr Problem</p>
                    <p class="text-lg mt-2 text-gray-600">
                        Das Entwickeln einer Website ist zeitspielig und
                        kostenintensiv.
                    </p>
                </div>
                <div
                    class="p-4 md:w-1/3 flex flex-col text-center items-center shadow-sm rounded-full"
                >
                    <h2 class="text-xl font-medium text-gray-900">
                        Unsere Lösung
                    </h2>
                    <h2 class="text-lg mt-2 text-gray-600">
                        Die Verwendung fertiger Website-Vorlagen von
                        readysite.online.
                    </h2>
                </div>
                <div
                    class="p-4 md:w-1/3 flex flex-col text-center items-center shadow-sm rounded-full"
                >
                    <p class="text-xl font-medium text-gray-900">
                        Individuelle Änderungen
                    </p>
                    <p class="text-lg mt-2 text-gray-600">
                        Klein starten und bei Bedarf erweitern, mit festem
                        Ansprechpartner.
                    </p>
                </div>
            </div>
            <!-- Steps Section -->
            <StepsMain />
        </div>
    </section>
</template>

<script setup>
// Window width listener for not loading the world map on mobile devices
const windowWidth = ref()
onMounted(() => {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth
    })
})

const isDesktop = computed(() => {
    return windowWidth.value > 1280
})
</script>
