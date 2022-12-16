<!-- Todo: Change locale to i18n locale -->
<template>
    <button
        title="English/Deutsch"
        class="cursor-pointer text-xl hover:text-sky-600 transition a:-translate-x-4 i:-translate-x-6 xl:translate-x-16 mr-1.5 ml-3 a:mx-0"
        type="button"
        v-on:click="changeLanguage()"
    >
        <span v-if="locale === 'en'">De</span>
        <span v-else>En</span>
    </button>
</template>

<script setup>
const changeLanguage = () => {
    const locale = localStorage.getItem('locale')
    if (locale === 'en') {
        localStorage.setItem('locale', 'de')
    } else {
        localStorage.setItem('locale', 'en')
    }
    window.location.reload()
}
</script>
