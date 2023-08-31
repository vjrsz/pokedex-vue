<template>
    <section id="list">
        <div class="row d-flex align-items-end justify-content-center" v-show="isVisibleListHome">
            <div class="list-card col-sm-3 m-3"
                 v-for="pokemon in pokemons.results" :key="pokemon.id">
                <div class="list-card-img">
                    <img :src="pokemon.status.sprites.front_default" :alt="pokemon.name">
                </div>
                <h1 class="list-card-title">{{ pokemon.name }}</h1>
                <br>
                <div class="list-card-details">
                    <ul class="list-card-types">
                        <li v-for="(type, i) in pokemon.status.types" :key="i">{{ type.type.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

import { mapState } from "vuex";

export default {
    name: "ListHome",
    computed:{
        ...mapState(['pokemons']),
        isVisibleListHome(){
            console.log(this.pokemons)
            return this.pokemons.results
                && this.pokemons.results.length
                && this.pokemons.results[0].status;
        }
    },
    created() {
        this.$store.dispatch('pokemon/allPokemons');
    }
}
</script>
<style scoped>
    .list-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        border: 1px solid var(--bs-danger);
        border-radius: 15px;
        padding: 25px;
        text-align: center;
    }
    .list-card-title{
        text-transform: capitalize;
        font-size: 2rem;
        color: var(--bs-white);
        margin: 0;
    }
    .list-card-img{
        image-rendering: pixelated;
        width: 150px;
    }
    .list-card-img img{
        position: relative;
        object-fit: cover;
        width: 100%;
    }

    .list-card-details{
        display: flex;
        flex-direction: column;
        align-self: start;
        text-align: start;
        list-style: none;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .list-card-details-title {
        width: 100%;
    }
    .list-card-details-title .title{
        font-weight: 300;
        font-size: 1rem;
    }
    .list-card-details-title::after{
        content: "";
        display: flex;
        width: 100%;
        border-bottom: 1px solid #ccc;
    }
    .list-card-types{
        display: flex;
        align-self: start;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .list-card-types li{
        margin: 0 5px 0 0;
        padding: 1px 7px;
        border: 1px solid var(--bs-danger);
        border-radius: 10px;
        text-align: center;

        color: var(--bs-danger);
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 1.5px;
    }
</style>