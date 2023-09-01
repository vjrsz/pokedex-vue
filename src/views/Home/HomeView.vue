<template>
    <Search v-show="false"/>
    <List />
</template>

<script>
    import List from "@/views/Home/List.vue";
    import Search from "@/views/Home/Search.vue";

    export default {
        name: 'HomeView',
        components: {Search, List},
    }
</script>