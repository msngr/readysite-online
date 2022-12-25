<template>
    <!-- anchor tag -->
    <span class="anchor" id="Preise"></span>
    <!-- Background-Gradient -->
    <section class="bg-gradient-to-tr from-white via-sky-50 to-sky-100">
        <div
            class="container mx-auto a:px-2 i:px-4 xl:px-10 2xl:px-20 5xl:px-32 pt-10 md:pt-28"
        >
            <div class="xl:items-center xl:flex 5xl:ml-10">
                <div
                    class="flex flex-col items-center xl:items-start xl:mr-14 5xl:mx-8"
                >
                    <!-- Headline -->
                    <h1
                        class="text-gray-900 font-bold text-4xl md:text-6xl 2xl:text-7xl"
                    >
                        Unsere
                        <span class="text-gradient">Preise </span>
                    </h1>
                    <DividerGradient />
                    <div class="mt-4 mx-4 n:mx-0 text-gray-500">
                        <p>Text.</p>
                        <p>Und mehr Text.</p>
                    </div>
                </div>
                <div class="flex-1 xl:mx-8">
                    <div
                        class="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0"
                    >
                        <!-- Website Pricing -->
                        <div
                            class="max-w-sm mx-auto shadow-md rounded-lg md:mx-4"
                        >
                            <div class="p-6">
                                <h2
                                    class="text-xl font-medium text-gray-700 lg:text-3xl"
                                >
                                    Website
                                </h2>

                                <p class="mt-4 text-gray-500">
                                    Vorlage auswählen, Inhalte zusenden und
                                    innerhalb von 3 Werktagen Website erhalten.
                                </p>

                                <p
                                    class="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl"
                                >
                                    299.00€
                                </p>

                                <p class="mt-1 text-gray-500">
                                    Einmalige Zahlung
                                </p>

                                <a
                                    class="text-white text-lg font-medium inline-flex items-center shadow-md bg-gradient-to-r from-sky-500 to-sky-700 rounded-full hover:from-sky-600 hover:to-sky-900 transition py-3 px-5 mt-7 -ml-1.5"
                                    href="/#Website_wählen"
                                    >Jetzt bestellen
                                </a>
                            </div>

                            <hr class="shadow-sm" />

                            <div class="p-6">
                                <h2
                                    class="text-lg font-medium text-gray-700 lg:text-xl"
                                >
                                    Sie erhalten eine komplette Website,
                                    bestehend aus:
                                </h2>

                                <div class="mt-8 space-y-4">
                                    <PricingCheckmark text="Website-Vorlage" />
                                    <PricingCheckmark
                                        text="Einpflege Ihrer Inhalte"
                                    />
                                    <PricingCheckmark text="Impressum" />
                                    <PricingCheckmark
                                        text="Datenschutzerklärung"
                                    />
                                    <PricingCheckmark
                                        text="Einfaches CMS-System"
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- Hosting Pricing -->
                        <div
                            class="max-w-sm mx-auto shadow-md rounded-lg md:mx-4"
                        >
                            <div class="p-6">
                                <h1
                                    class="text-xl font-medium text-gray-700 lg:text-3xl"
                                >
                                    Hosting
                                </h1>

                                <p class="mt-4 text-gray-500">
                                    Bringen Sie Ihre Website online, und lassen
                                    Sie uns die technische Seite übernehmen.
                                </p>

                                <p
                                    class="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl"
                                >
                                    119.00€
                                </p>

                                <p class="mt-1 text-gray-500">
                                    Jährliche Zahlung
                                </p>

                                <a
                                    class="text-white text-lg font-medium inline-flex items-center shadow-md bg-gradient-to-r from-sky-500 to-sky-700 rounded-full hover:from-sky-600 hover:to-sky-900 transition py-3 px-5 mt-7 -ml-1.5"
                                    href="/#Website_wählen"
                                    >Jetzt bestellen
                                </a>
                            </div>

                            <hr class="shadow-sm" />

                            <div class="p-6">
                                <h1
                                    class="text-lg font-medium text-gray-700 lg:text-xl"
                                >
                                    Sie erhalten unser Hosting-Paket, bestehend
                                    aus:
                                </h1>

                                <div class="mt-8 space-y-4">
                                    <PricingCheckmark
                                        text="Hosting inkl. Betreuung"
                                    />
                                    <PricingCheckmark text="Wunsch-Domain" />
                                    <PricingCheckmark
                                        text="Eigene E-Mail-Adresse"
                                    />
                                    <PricingCheckmark
                                        text="Technische Updates"
                                    />
                                    <PricingCheckmark
                                        text="Rechtliche Updates"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
