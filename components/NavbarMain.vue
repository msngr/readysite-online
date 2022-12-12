<template>
    <nav
        class="z-40 fixed bg-white w-full max-w-5xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 shadow-md"
    >
        <!-- Logo and Menu Container -->
        <div
            class="w-full relative flex justify-between xl:w-auto xl:static xl:block xl:justify-start"
        >
            <!-- Logo -->
            <NuxtLink to="/">
                <img
                    alt="readysite.online"
                    src="~/assets/images/logo.svg"
                    class="w-60 2xl:w-64 5xl:w-72"
                />
            </NuxtLink>
            <!-- Menu icon -->
            <button
                class="cursor-pointer xl:hidden"
                type="button"
                v-on:click="toggleNavbar()"
            >
                <svg class="w-7 text-sky-600" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                    />
                </svg>
            </button>
        </div>
        <!-- Links Container-->
        <div
            v-bind:class="{ hidden: !showMenu, flex: showMenu }"
            class="xl:flex xl:flex-grow items-center"
        >
            <ul
                class="flex flex-col xl:flex-row list-none 2xl:text-lg mt-4 xl:mt-0 ml-1.5 xl:ml-auto"
            >
                <li v-for="link in links">
                    <NuxtLink
                        :to="link.to"
                        :class="link.style"
                        class="relative xl:ml-5 2xl:ml-7 5xl:ml-12 my-2 flex items-center hover:text-sky-700 transition"
                    >
                        <!-- Whatsapp SVG -->
                        <svg
                            v-if="link.to === 'tel:+49060412299900'"
                            class="w-6 mr-1"
                            viewBox="0 0
                                24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
                            />
                        </svg>
                        {{ link.name }}
                        <!-- Blog/Facebook Divider -->
                        <span
                            v-if="link.name === 'Blog'"
                            class="group-hover:!text-black transition cursor-default ml-1.5"
                        >
                            |
                        </span>
                    </NuxtLink>
                    <!-- Facebook SVG -->
                    <a
                        href="https://www.facebook.com/"
                        class="z-50 absolute left-16 top-[22.1rem] sm:left-[4.5rem] sm:top-[22.35rem] md:left-20 md:top-[22.6rem] xl:left-auto xl:right-[16.325rem] xl:top-[1.7275rem] 2xl:right-[17.6rem] 2xl:top-[1.8575rem] 5xl:right-[22.625rem] 5xl:top-[1.9375rem]"
                    >
                        <svg
                            v-if="link.name === 'Blog'"
                            class="w-6 pl-1.5 box-content hover:scale-110 transition"
                            viewBox="0 0
                                24 24"
                        >
                            <path
                                class="fill-blue-500"
                                d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="h-[100rem]">test</div>
    <div class="h-[100rem]">test</div>
</template>

<script setup>
const links = [
    { name: 'Über readysite', to: '#' },
    { name: 'Ablauf', to: '#' },
    { name: 'Website wählen', to: '#', style: 'font-medium text-sky-600' },
    { name: 'Leistungen', to: '#' },
    { name: 'Preise', to: '#' },
    { name: 'Fragen', to: '#' },
    { name: 'Kontakt', to: '#', style: 'font-medium text-sky-600' },
    {
        name: 'Blog',
        to: '#',
        style: 'font-medium xl:!ml-10 5xl:!ml-36 group',
    },
    {
        name: '+49 (0) 6041 22 999 00',
        to: 'tel:+49060412299900',
        style: 'font-medium text-green-600 hover:!text-green-600 xl:!ml-16 5xl:!ml-36 hover:scale-105 transition',
    },
]

const showMenu = ref(false)
const toggleNavbar = () => {
    showMenu.value = !showMenu.value
}
</script>
