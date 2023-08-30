<template>
    <section id="list">
        <div class="row d-flex align-items-end justify-content-center" v-show="pokemons">
            <div class="list-card col-sm-3 m-3"
                 v-for="pokemon in pokemons.results">
                <h1 class="list-card-title">{{ pokemon.name }}</h1>
            </div>
        </div>
    </section>
</template>
<script>

import PokeApi from "@/services/poke-api";

export default {
    name: 'List',
    data: function (){
        return {
            pokemons: {}
        }
    },
    created: function (){
        this.allPokemons()
    },
    methods: {
        allPokemons(){
            PokeApi.all().then(pokemons => this.pokemons = pokemons)
        }
    }
}
</script>
<style scoped>
    .list-card{
        border: 1px solid var(--bs-danger);
        border-radius: 15px;
        padding: 25px;
        text-align: center;
    }
    .list-card-title{
        text-transform: capitalize;
        font-size: 1.5rem;
        color: var(--bs-white);
        margin: 0;
    }
</style>