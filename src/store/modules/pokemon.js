import PokeApi from "@/services/pokeApi";

const state = () => ({
    pokemons: []
})

const getters = {}

const actions = {
    async allPokemons({ commit }){
        const pokemons = await PokeApi.all()
        console.log(pokemons)
    },
}

const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}