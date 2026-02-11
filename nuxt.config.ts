// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.GITHUB_ACTIONS === 'true' ? '/readysite-online/' : '/'

export default defineNuxtConfig({
    app: {
        baseURL: baseURL,
        buildAssetsDir: 'static_dist/',
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
            // preload
            // link: [
            //     {
            //         rel: 'preload',
            //         href: '_nuxt/roboto-regular.f6734f81.woff2',
            //         as: 'font',
            //         type: 'font/woff2',
            //         crossorigin: 'anonymous',
            //     },
            //     {
            //         rel: 'preload',
            //         href: '_nuxt/roboto-500.b0195382.woff2',
            //         as: 'font',
            //         type: 'font/woff2',
            //         crossorigin: 'anonymous',
            //     },
            // ],
            style: [
                {
                    innerHTML: `
                     /* Document */
                    html,
                    body {
                        position: relative;
                        overflow-x: hidden;
                        scroll-behavior: smooth;
                    }

                    @font-face {
                        font-family: 'Roboto';
                        src: url('${baseURL}fonts/roboto-regular.woff2') format('woff2');
                        font-weight: 400;
                        font-style: normal;
                        font-display: block;
                    }
                    
                    @font-face {
                        font-family: 'Roboto';
                        src: url('${baseURL}fonts/roboto-500.woff2') format('woff2');
                        font-weight: 500;
                        font-style: normal;
                        font-display: block;
                    }
                    `,
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
    experimental: {
        payloadExtraction: false,
    },
    nitro: {
        baseURL: '/readysite-online/'
  }
})
