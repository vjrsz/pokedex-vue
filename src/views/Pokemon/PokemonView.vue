<template>
    <div v-show="pokemon">
        <div class="pokemon row">
            <div class="col-sm-6 pokemon-img">
                <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
            </div>
            <div class="col-sm-6 d-flex flex-column justify-content-center">
                <h1 class="text-uppercase mb-3">{{namePokemon}}</h1>

                <div class="pokemon-data">
                    <font-awesome-icon :icon="['fas', 'arrow-up']" class="icon" />
                    <p class="name">Altura :</p>
                    <p class="value">{{pokemon.height}}</p>
                </div>

                <div class="pokemon-data">
                    <font-awesome-icon :icon="['fas', 'weight-hanging']" class="icon" />
                    <p class="name">Peso :</p>
                    <p class="value">{{pokemon.weight}}</p>
                </div>
                <p>Peso : {{pokemon.weight}}</p>
                <ul>
                    <li v-for="ability in pokemon.abilities" :key="ability.ability.name">{{ ability.ability.name }}</li>
                </ul>

                <ul>
                    <li v-for="type in pokemon.types" :key="type.type.name">{{ type.type.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import pokeApi from "@/services/PokeApi";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name: 'PokemonView',
    components: {FontAwesomeIcon},
    data: function (){
        return{
            pokemon: {},
        }
    },
    methods:{
        loadPokemon(){
            pokeApi.getPokemonByName(this.namePokemon).then(pokemon => {
                this.pokemon = pokemon
            })
        }
    },
    created() {
        this.loadPokemon();
    },
    computed: {
        namePokemon(){
            return this.$route.params.name
        }
    }
}
</script>
<style>
    .pokemon-img{
    }
    .pokemon-img img{
        width: 100%;
        image-rendering: pixelated;
        object-fit: cover;
    }
    .pokemon p{
        margin:0;
    }
    .pokemon-data{
        display: flex;
        gap: 5px;
    }
    .pokemon-data .icon{
    }
</style>