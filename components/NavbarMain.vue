<template>
    <nav
        class="w-full max-w-5xl mx-auto relative flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 shadow-md"
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
                    class="w-60 a:w-64 5xl:w-72"
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
                        class="xl:ml-5 2xl:ml-8 5xl:ml-12 my-2 flex items-center hover:text-sky-700 transition"
                    >
                        <!-- Phone SVG -->
                        <svg
                            v-if="link.to === 'tel:+49060412299900'"
                            class="w-6 mr-0.5"
                            viewBox="0 0
                                24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.2,17.4C10.4,15.9 8,13.6 6.6,10.8L8.8,8.6C9.1,8.3 9.2,7.9 9,7.6C8.7,6.5 8.5,5.2 8.5,4C8.5,3.5 8,3 7.5,3H4C3.5,3 3,3.5 3,4C3,13.4 10.6,21 20,21C20.5,21 21,20.5 21,20V16.5C21,16 20.5,15.5 20,15.5M5,5H6.5C6.6,5.9 6.8,6.8 7,7.6L5.8,8.8C5.4,7.6 5.1,6.3 5,5M19,19C17.7,18.9 16.4,18.6 15.2,18.2L16.4,17C17.2,17.2 18.1,17.4 19,17.4V19Z"
                            />
                        </svg>
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
const links = [
    { name: 'Über readysite', to: '#' },
    { name: 'Ablauf', to: '#' },
    { name: 'Website wählen', to: '#', style: 'font-bold text-sky-600' },
    { name: 'Leistungen', to: '#' },
    { name: 'Preise', to: '#' },
    { name: 'Fragen', to: '#' },
    { name: 'Kontakt', to: '#', style: 'font-bold text-sky-600' },
    { name: '| Blog |', to: '#', style: 'xl:!ml-10 5xl:!ml-36' },
    {
        name: '+49 (0) 6041 22 999 00',
        to: 'tel:+49060412299900',
        style: 'font-bold text-sky-600 xl:!ml-10 5xl:!ml-36',
    },
]

const showMenu = ref(false)
const toggleNavbar = () => {
    showMenu.value = !showMenu.value
}
</script>
