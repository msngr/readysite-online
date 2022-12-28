<template>
    <!-- 1920px Container -->
    <div class="max-w-5xl mx-auto">
        <!-- Navigation/Menu -->
        <NavbarMain />
        <!-- Hero with Steps -->
        <HeroMain />
        <!-- Website-/Template-Cards -->
        <CardsMain />
        <!-- Pricing -->
        <PricingMain />
        <!-- FAQ -->
        <FAQMain />
    </div>
</template>

<style lang="scss">
// Text Gradient
.text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-sky-600;
}

// SVG Gradient
.stop1 {
    stop-color: #0ea5e9;
}

.stop2 {
    stop-color: #0284c7;
}

// H1 Headlines
.headline {
    line-height: 1.12;
}
</style>
