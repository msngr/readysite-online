<template>
    <section class="container mx-auto px-5 py-24">
        <div class="flex flex-wrap">
            <!-- Cards -->
            <div v-for="site in websites" class="lg:w-1/3 sm:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                    <img
                        alt="ecommerce"
                        class="object-cover object-center w-full h-full block"
                        :src="site.image"
                    />
                </a>
                <div class="mt-4">
                    <h3
                        class="text-gray-500 text-xs tracking-widest title-font mb-1"
                    >
                        CATEGORY
                    </h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">
                        The Catalyzer
                    </h2>
                    <p class="mt-1">$16.00</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const websites = [
    {
        name: 'E-Commerce',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.',
        image: 'https://dummyimage.com/420x260',
    },
    {
        name: 'Blog',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.',
        image: 'https://dummyimage.com/420x260',
    },
    {
        name: 'Landing Page',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.',
        image: 'https://dummyimage.com/420x260',
    },
    {
        name: 'Portfolio',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.',
        image: 'https://dummyimage.com/420x260',
    },
    {
        name: 'One Page',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.',
        image: 'https://dummyimage.com/420x260',
    },
    {
        name: 'Coming Soon',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.',
        image: 'https://dummyimage.com/420x260',
    },
]
</script>
