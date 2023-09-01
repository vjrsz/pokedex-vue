<template>
    <loading v-show="getLoading"/>
    <Header :class="getTheme"/>
    <main class="container" :class="getTheme">
        <router-view></router-view>
    </main>
</template>

<script>
    import Header from "@/components/templates/Header.vue";
    import {mapGetters} from "vuex";
    import Loading from "@/components/templates/Loading.vue";

    export default {
        name: "App",
        components: {Loading, Header},
        computed: mapGetters(['getTheme', 'getLoading'])
    }
</script>

<style>

</style>