<template>
    <div v-if="isVisible">
        <div class="pokemon row">
            <div class="col-sm-6 pokemon-img">
                <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
            </div>
            <div class="col-sm-6 d-flex flex-column justify-content-center">
                <div class="pokemon-data-container d-flex gap-3 mb-0">
                    <h1 class="text-uppercase">{{namePokemon}}</h1>

                    <div class="pokemon-data">
                        <font-awesome-icon :icon="['fas', 'arrow-up']" class="icon" />
                        <p class="value">{{pokemon.height}}m</p>
                    </div>

                    <div class="pokemon-data">
                        <font-awesome-icon :icon="['fas', 'weight-hanging']" class="icon" />
                        <p class="value">{{pokemon.weight}}kg</p>
                    </div>
                </div>

                <div class="pokemon-data-container d-flex flex-column mb-5">
                    <div class="d-flex gap-2">
                        <div class="" v-for="type in pokemon.types" :key="type.type.name">
                            <span class="badge" >{{ type.type.name }}</span>
                        </div>
                    </div>
                </div>

                <div class="pokemon-data-container d-flex flex-column mb-3">
                    <h5>Abilities</h5>
                    <ul>
                        <li v-for="ability in pokemon.abilities" :key="ability.ability.name">{{ ability.ability.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pokeApi from "@/services/PokeApi";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import router from "@/router";

export default {
    name: 'PokemonView',
    components: {FontAwesomeIcon},
    data: function (){
        return{
            pokemon: null,
        }
    },
    methods:{
        loadPokemon(){
            pokeApi.getPokemonByName(this.namePokemon).then(pokemon => {
                if(!pokemon){
                    router.push({
                        name: 'home',
                    })
                }
                this.pokemon = pokemon
                this.$store.commit('setLoading', false);
            })
        }
    },
    created() {
        this.loadPokemon()
    },
    computed: {
        namePokemon(){
            return this.$route.params.name
        },
        isVisible(){
            return this.pokemon
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
        align-items: center;
        gap: 5px;
    }
    .pokemon-data p{
        font-size: 1.2rem;
    }

    .pokemon-data-container ul li {
        font-weight: 300;
    }
</style>