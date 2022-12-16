// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                // Todo: Add browser locale after internalization
                lang: 'de',
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'readysite.online',
            meta: [
                {
                    name: 'description',
                    content: 'Get your ready website today!',
                },
            ],
            // script: [
            //     {
            //         src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js',
            //         defer: true,
            //     },
            // ],
            // link: [{ rel: 'stylesheet', href: 'https://awesome-lib.css' }],
            noscript: [{ children: 'Javascript is required' }],
        },
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
