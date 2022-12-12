/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        screens: {
            a: '360px', // androids
            i: '375px', // iPhones
            n: '412px', // 412/414px new phones
            b: '480px', // big phones
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
            '5xl': '1920px',
        },
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans', 'ui-font-family'],
            },
            maxWidth: {
                '2xl': '1440px',
                '5xl': '1920px',
            },
        },
    },
}
