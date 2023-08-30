<template>
    <Header />
    <main class="container">
        <Search />
        <List />
    </main>
</template>

<script>
    import Header from "@/views/Home/Header.vue";
    import Search from "@/views/Home/Search.vue";
    import List from "@/views/Home/List.vue";

    export default {
        name: 'Home',
        components: {List, Search, Header},
    }
</script>