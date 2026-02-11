<template>
    <div
        class="flex flex-wrap justify-center space-y-6 md:space-y-0 mt-8 md:mt-12 5xl:mt-4 xl:px-16"
    >
        <!-- Step 1 -->
        <div
            class="p-10 md:w-1/3 flex flex-col text-center items-center shadow-lg max-w-[25rem] min-w-[19rem]"
        >
            <svg class="w-28 text-sky-600 mb-5" viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="Gradient1">
                        <stop class="stop1" offset="0%" />
                        <stop class="stop2" offset="100%" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#Gradient1)"
                    d="M10,7V9H12V17H14V7H10M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"
                />
            </svg>
            <div class="flex-grow">
                <h2
                    class="text-gray-900 text-2xl 2xl:text-3xl font-medium tracking-tight mb-4"
                >
                    Website bestellen
                </h2>
                <h3 class="text-gray-600 leading-7 text-lg">
                    Wählen Sie eine unserer fertigen Vorlagen aus und bezahlen
                    bequem per PayPal oder Kreditkarte.
                </h3>
                <NuxtLink
                    class="text-white text-lg font-medium inline-flex items-center shadow-md bg-gradient-to-r from-sky-500 to-sky-700 rounded-full hover:from-sky-600 hover:to-sky-900 transition py-3 px-5 mt-7"
                    href="/#Website_wählen"
                    >Website wählen
                    <svg
                        class="w-7 ml-2 -mb-1.5 animate-bounce"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M12 3.97C7.59 3.97 3.97 7.59 3.97 12C3.97 16.41 7.59 20.03 12 20.03C16.41 20.03 20.03 16.41 20.03 12C20.03 7.59 16.41 3.97 12 3.97M12 2C17.54 2 22 6.46 22 12C22 17.54 17.54 22 12 22C6.46 22 2 17.54 2 12C2 6.46 6.46 2 12 2M13 10.46H16L12 6.5L8 10.46H11V17.5H13"
                        />
                    </svg>
                </NuxtLink>
            </div>
        </div>
        <!-- Step 2 -->
        <div
            class="p-10 md:w-1/3 flex flex-col text-center items-center shadow-md max-w-[25rem] min-w-[19rem]"
        >
            <svg class="w-28 text-sky-600 mb-5" viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="Gradient1">
                        <stop class="stop1" offset="0%" />
                        <stop class="stop2" offset="100%" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#Gradient1)"
                    d="M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V15H15V17H11L9,17V13A2,2 0 0,1 11,11H13V9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"
                />
            </svg>
            <div class="flex-grow">
                <p
                    class="text-gray-900 text-2xl font-medium tracking-tight mb-4"
                >
                    Inhalte zusenden
                </p>
                <p class="text-gray-600 leading-7 text-lg">
                    Senden Sie uns Ihre Bilder und Texte zu. Die einmalige
                    Einpflege Ihrer Inhalte ist im Preis inbegriffen.
                </p>
                <NuxtLink
                    class="text-sky-600 hover:text-white text-lg font-medium inline-flex items-center border border-sky-600 rounded-full hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-900 py-3 px-5 mt-7"
                    href="/#Kontakt"
                    >Kontakt
                    <svg class="w-7 ml-2" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M17 18H21V16H17V14L14 17L17 20V18M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 6C12.1 6 13 6.9 13 8S12.1 10 11 10 9 9.1 9 8 9.9 6 11 6M11 13C8.3 13 3 14.3 3 17V20H12.5C12.2 19.4 12.1 18.8 12 18.1H4.9V17C4.9 16.4 8 14.9 11 14.9C11.5 14.9 12 15 12.5 15C12.8 14.4 13.1 13.8 13.6 13.3C12.6 13.1 11.7 13 11 13"
                        />
                    </svg>
                </NuxtLink>
            </div>
        </div>
        <!-- Step 3 -->
        <div
            class="p-10 md:w-1/3 flex flex-col text-center items-center shadow-md max-w-[25rem] min-w-[19rem]"
        >
            <svg class="w-28 mb-5" viewBox="0 0 24 24">
                <defs>
                    <linearGradient id="Gradient1">
                        <stop class="stop1" offset="0%" />
                        <stop class="stop2" offset="100%" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#Gradient1)"
                    d="M15,15A2,2 0 0,1 13,17H9V15H13V13H11V11H13V9H9V7H13A2,2 0 0,1 15,9V10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 15,13.5V15M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"
                />
            </svg>
            <div class="flex-grow">
                <p
                    class="text-gray-900 text-2xl font-medium tracking-tight mb-4"
                >
                    Website hosten
                </p>
                <p class="text-gray-600 leading-7 text-lg">
                    Bringen Sie Ihre Website selbst online oder wählen Sie
                    unseren Hosting- und Betreuungsservice.
                </p>
                <NuxtLink
                    class="text-sky-600 hover:text-white text-lg font-medium inline-flex items-center border border-sky-600 rounded-full hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-900 py-3 px-5 mt-7"
                    href="/#Preise"
                    >Unser Hosting
                    <svg class="w-5 ml-2" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z"
                        />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
