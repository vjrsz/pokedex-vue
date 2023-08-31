<template>
    <Header :class="getTheme"/>
    <main class="container" :class="getTheme">
        <router-view></router-view>
    </main>
</template>

<script>
    import Header from "@/components/templates/Header.vue";
    import {mapGetters} from "vuex";

    export default {
        name: "App",
        components: {Header},
        computed: mapGetters(['getTheme'])
    }
</script>

<style>

</style>