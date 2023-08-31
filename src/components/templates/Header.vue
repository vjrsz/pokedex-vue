<template>
    <header class="py-3">
        <div class="header-toggle">
            <ThemeToggle />
        </div>
        <div class="header-title">
            <h1>POKÉDEX</h1>
        </div>
    </header>
</template>

<script>
import ThemeToggle from "@/components/templates/ThemeToggle.vue";

export default {
    name: 'HeaderHome',
    components: {ThemeToggle}
}
</script>

<style scoped>
    header{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    .header-toggle{
        width: 50px;
        height: 50px;
    }

    .header-title h1{
        font-size: 2rem;
        font-weight: 600;
        margin: 0;
    }

</style>
