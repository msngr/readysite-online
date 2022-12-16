<template>
    <!-- Background-Gradient -->
    <section
        class="relative bg-gradient-to-tr from-white via-sky-50 to-sky-100 overflow-hidden"
    >
        <!-- Top-Left-Blob -->
        <svg
            class="hidden xl:block xl:absolute z-0 h-[89%] w-[40%] opacity-10"
            viewBox="0 0 1920 1080"
        >
            <path
                class="fill-sky-500"
                d="M621.1883825404446,22.999999999999886C615.3965928140937,108.65044211056568,500.598002275749,116.75557362881676,422.2647562857013,220.5696822633709C343.9315102956536,324.38379089792505,265.6873872151313,593.0437251394427,151.18890660015825,645.8846518073248C36.6904259851852,698.7255784752068,-171.4310357123644,615.4242534005174,-264.7261274041369,537.6152422706632C-358.0212190959094,459.806231140809,-373.97055962877147,293.8351397392102,-408.5816435504765,179.03058502819948C-443.1927274721815,64.22603031718876,-500.4064779784659,-37.93778144559077,-472.3926309343671,-151.2120859954012C-444.3787838902683,-264.48639054521163,-337.76215087497144,-436.0031479686758,-240.4985612858839,-500.6152422706631C-143.23497169679638,-565.2273365726504,-5.0634360547905715,-573.4316971190981,111.18890660015798,-538.8846518073249C227.44124925510653,-504.33760649555165,372.01558198709296,-386.98041236791124,457.0154946438074,-293.3329704000238C542.0154073005218,-199.68552843213632,626.9801722667956,-62.650442110565905,621.1883825404446,22.999999999999886C615.3965928140937,108.65044211056568,500.598002275749,116.75557362881676,422.2647562857013,220.5696822633709"
            />
        </svg>
        <!-- Bottom-Right-Blob -->
        <svg
            class="hidden xl:block xl:absolute z-0 w-[40%] opacity-10 rotate-180 translate-x-[150%] 5xl:w-[41%]"
            height="1080"
            viewBox="0 0 1920 1080"
        >
            <path
                class="fill-sky-500"
                d="M621.1883825404446,22.999999999999886C615.3965928140937,108.65044211056568,500.598002275749,116.75557362881676,422.2647562857013,220.5696822633709C343.9315102956536,324.38379089792505,265.6873872151313,593.0437251394427,151.18890660015825,645.8846518073248C36.6904259851852,698.7255784752068,-171.4310357123644,615.4242534005174,-264.7261274041369,537.6152422706632C-358.0212190959094,459.806231140809,-373.97055962877147,293.8351397392102,-408.5816435504765,179.03058502819948C-443.1927274721815,64.22603031718876,-500.4064779784659,-37.93778144559077,-472.3926309343671,-151.2120859954012C-444.3787838902683,-264.48639054521163,-337.76215087497144,-436.0031479686758,-240.4985612858839,-500.6152422706631C-143.23497169679638,-565.2273365726504,-5.0634360547905715,-573.4316971190981,111.18890660015798,-538.8846518073249C227.44124925510653,-504.33760649555165,372.01558198709296,-386.98041236791124,457.0154946438074,-293.3329704000238C542.0154073005218,-199.68552843213632,626.9801722667956,-62.650442110565905,621.1883825404446,22.999999999999886C615.3965928140937,108.65044211056568,500.598002275749,116.75557362881676,422.2647562857013,220.5696822633709"
            />
        </svg>
        <!-- Hero Container -->
        <div
            class="relative z-20 container mx-auto px-4 pb-20 pt-28 md:pt-36 5xl:pt-44"
        >
            <div class="xl:w-5/6 2xl:w-3/4 text-center mx-auto">
                <!-- Headline -->
                <h1
                    class="text-gray-900 font-bold text-4xl md:text-6xl 2xl:text-7xl"
                >
                    <span class="text-sky-600">Fertige Websites </span>
                    warten auf Ihren Inhalt!<br />
                </h1>
                <p
                    class="text-gray-900 font-bold text-4xl md:text-6xl 2xl:text-7xl mt-2 5xl:mt-8"
                >
                    <span class="text-sky-600">Schnell </span> und
                    <span class="text-sky-600"> Einfach.</span>
                </p>
            </div>
            <!-- Additional Information for small screens upwards -->
            <div
                class="flex flex-wrap justify-center space-y-2 md:space-y-0 mt-8 md:mt-8 5xl:mt-10 xl:px-16 pb-8 md:rounded-full shadow-sm"
            >
                <div
                    class="p-4 md:w-1/3 flex flex-col text-center items-center"
                >
                    <p class="text-xl font-medium text-gray-900">Ihr Problem</p>
                    <p class="text-lg mt-2 text-gray-500">
                        Das Entwickeln einer Website ist zeitspielig und
                        kostenintensiv.
                    </p>
                </div>
                <div
                    class="p-4 md:w-1/3 flex flex-col text-center items-center"
                >
                    <p class="text-xl font-medium text-gray-900">
                        Unsere Lösung
                    </p>
                    <p class="text-lg mt-2 text-gray-500">
                        Die Verwendung fertiger Website-Vorlagen von
                        readysite.online.
                    </p>
                </div>
                <div
                    class="p-4 md:w-1/3 flex flex-col text-center items-center"
                >
                    <p class="text-xl font-medium text-gray-900">
                        Individuelle Änderungen
                    </p>
                    <p class="text-lg mt-2 text-gray-500">
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

<script setup></script>

<style lang="scss" scoped></style>
