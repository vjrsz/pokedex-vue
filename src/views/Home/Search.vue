<template>
    <section id="search" class="my-3">
        <form class="search-form form mb-3" @submit.prevent="submitForm">
            <div class="search-form-group">
                <input type="text" class="search-input" v-model="filter" placeholder="Buscar Pokémon">
                <button class="search-input-text">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </button>
            </div>
        </form>
    </section>
</template>
<script>
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import pokeApi from "@/services/PokeApi";

    export default {
        name: 'SearchHome',
        components: {FontAwesomeIcon},
        data: function(){
            return {
                filter: ''
            }
        },
        methods:{
            submitForm(){
                console.log(this.filter)
                pokeApi.getPokemonByName(this.filter).then(p => console.log(p))
            }
        }
    }
</script>
<style scoped>
    #search{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .search-form{
        width: 70%;
    }
    .search-form .search-form-group{
        border: 1px solid;
        border-radius: 10px;
    }
    .search-form .search-form-group input, .search-form .search-form-group input:focus, .search-form .search-form-group .search-input-text {
        outline: none;
        border: none;
        box-shadow: none;
        background: transparent;
        color: white;
        width: 95%;
        padding: 10px;
    }
    .search-form .search-form-group input::placeholder{
        color: #ccc;
    }
    .search-form .search-form-group .search-input-text {
        width: 5%;
        background: none;
    }
</style>