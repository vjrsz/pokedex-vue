<template>

    <section id="list">
        <div class="row d-flex align-items-end justify-content-center" v-show="isVisibleListHome">
            <div class="list-card col-lg-3 col-sm-4 m-3" @click="onClickPokemon(pokemon)"
                 v-for="pokemon in getPokemons" :key="pokemon.id">
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
import {mapActions, mapGetters} from "vuex";
import router from "@/router";

export default {
    name: "ListHome",
    computed: {
        ...mapGetters('pokemon', ['getPokemons']),
        isVisibleListHome(){
            return this.getPokemons
                && this.getPokemons.length
                && this.getPokemons[0].status;
        }
    },
    methods: {
        ...mapActions('pokemon', ['loadPokemons']),
        onClickPokemon(pokemon){
            router.push({
                name: 'pokemon',
                params: { name: pokemon.name }
            })
        }
    },
    created(){
        this.loadPokemons().then(() => this.$store.commit('setLoading', false));
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
        cursor: pointer;
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
        letter-spacing: 1px;
    }
</style>