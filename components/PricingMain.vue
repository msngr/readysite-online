<template>
    <!-- anchor pricing -->
    <span class="anchor !-top-12 md:!top-0" id="Preise"></span>
    <!-- Background-Gradient -->
    <section class="bg-gradient-to-tr from-white via-sky-50 to-sky-100">
        <div
            class="container mx-auto a:px-2 i:px-4 xl:px-10 2xl:px-20 5xl:px-32 pt-10 md:pt-28"
        >
            <div class="xl:items-center xl:flex 5xl:ml-10">
                <div
                    class="flex flex-col items-center xl:items-start xl:min-w-[20rem] xl:max-w-md mx-2 b:mx-10 md:mx-6 lg:mx-12 xl:mx-6 5xl:mx-8"
                >
                    <!-- Headline -->
                    <h1
                        class="text-gray-900 font-bold text-4xl md:text-6xl 2xl:text-7xl"
                    >
                        Unsere
                        <span class="text-gradient">Preise </span>
                    </h1>
                    <DividerGradient />
                    <div class="mt-10 mx-4 mb-2 n:mx-0 text-gray-600">
                        <p>
                            Wählen Sie eine Website-Vorlage oder unser
                            Hosting-Paket und bezahlen Sie bequem mit Paypal
                            oder Kreditkarte im nächsten Schritt.
                        </p>
                        <br />
                        <p>
                            Für spezielle Anfragen, Beratung oder Anpassungen
                            <a
                                href="#Kontakt"
                                class="inline text-sky-600 hover:underline"
                                >kontaktieren</a
                            >
                            Sie uns. Wir berechnen Ihnen gerne ein individuelles
                            Angebot, je nach Zeitaufwand.
                        </p>
                    </div>
                </div>
                <div class="flex-1 xl:mx-8">
                    <div
                        class="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0"
                    >
                        <!-- Website Pricing -->
                        <div
                            class="max-w-sm xl:w-96 mx-auto shadow-md rounded-lg md:mx-4"
                        >
                            <div class="p-6">
                                <h2
                                    class="text-xl font-medium text-gray-700 lg:text-3xl"
                                >
                                    Website
                                </h2>

                                <p class="mt-4 text-gray-500">
                                    Vorlage auswählen, Inhalte zusenden und
                                    innerhalb von 3 Werktagen Ihre fertige
                                    Website erhalten.
                                </p>

                                <p
                                    class="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl"
                                >
                                    299€<span
                                        class="inline-block text-base -translate-y-[0.9rem]"
                                        >1</span
                                    >
                                </p>

                                <p class="mt-1 text-gray-500">
                                    Einmalige Zahlung
                                </p>

                                <a
                                    class="text-white text-lg font-medium inline-flex items-center shadow-md bg-gradient-to-r from-sky-500 to-sky-700 rounded-full hover:from-sky-600 hover:to-sky-900 transition py-3 px-5 mt-7 -ml-1.5"
                                    href="/#Website_wählen"
                                    >Jetzt bestellen<sup>2</sup>
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
                            class="max-w-sm xl:w-96 mx-auto shadow-md rounded-lg md:mx-4"
                        >
                            <div class="p-6">
                                <h1
                                    class="text-xl font-medium text-gray-700 lg:text-3xl"
                                >
                                    Hosting
                                </h1>

                                <p class="mt-4 text-gray-500">
                                    Bringen Sie Ihre Website online und lassen
                                    Sie uns die technische und rechtliche Seite
                                    übernehmen.
                                </p>

                                <p
                                    class="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl"
                                >
                                    119€<span
                                        class="inline-block text-base -translate-y-[0.9rem]"
                                        >1</span
                                    >
                                </p>

                                <p class="mt-1 text-gray-500">
                                    Jährliche Zahlung
                                </p>

                                <a
                                    class="text-white text-lg font-medium inline-flex items-center shadow-md bg-gradient-to-r from-sky-500 to-sky-700 rounded-full hover:from-sky-600 hover:to-sky-900 transition py-3 px-5 mt-7 -ml-1.5"
                                    href="/#Website_wählen"
                                    >Jetzt bestellen<sup>2</sup>
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
            <div
                class="shadow-md rounded max-w-2xl px-5 2xl:mx-8 5xl:mx-14 mt-8"
            >
                <p class="font-medium text-gray-900">
                    <sup>1</sup> Ergänzende Hinweise:
                </p>
                <ul class="text-gray-700 py-4 space-y-2 ml-3">
                    <li>
                        Alle Preise sind Endpreise und enthalten die gesetzlich
                        vorgeschriebene Umsatzsteuer, die Ihnen auf Ihrer
                        Rechnung ausgewiesen wird.
                    </li>
                    <li>
                        Sollte keine Umsatzsteuer vorgeschrieben sein
                        (Drittland) oder das Reverse-Charge-Verfahren zum
                        Einsatz kommen (EU-Ausland), so sind dieselben Preise
                        als Nettopreise zu verstehen.
                    </li>
                </ul>

                <p class="font-medium text-gray-900 pt-4">
                    <sup>2</sup> Bitte bestätigen:
                </p>
                <ul class="text-gray-700 py-4 space-y-2 ml-3">
                    <li class="flex">
                        <input
                            id="checkbox1"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 xl:min-w-[1rem] mt-0.5"
                            style="accent-color: #0284c7"
                        />
                        <label for="checkbox1" class="ml-2"
                            >Ich habe die obigen ergänzenden Hinweise zur
                            Kenntnis genommen und stimme den
                            <a
                                href="#"
                                class="inline text-sky-600 hover:underline"
                                >AGB</a
                            >, der
                            <a
                                href="#"
                                class="inline text-sky-600 hover:underline"
                                >Datenschutzerklärung</a
                            >, sowie der
                            <a
                                href="#"
                                class="inline text-sky-600 hover:underline"
                                >Widerrufsbelehrung
                            </a>
                            zu.</label
                        >
                    </li>
                    <li class="flex">
                        <input
                            id="checkbox2"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 xl:min-w-[1rem] mt-0.5"
                            style="accent-color: #0284c7"
                        />
                        <label for="checkbox2" class="ml-2"
                            >Ich stimme ausdrücklich zu, dass vor Ablauf der
                            Widerrufsfrist mit der Ausführung des Vertrags
                            begonnen wird. Mir ist bekannt, dass mit Beginn der
                            Ausführung mein Widerrufsrecht erlischt.</label
                        >
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
