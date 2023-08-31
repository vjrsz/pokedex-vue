import PokeApi from "@/services/PokeApi";

const state = () => ({
    pokemons: [],
    nextPage: '',
    previousPage: ''
})

const getters = {
    getPokemons(state) {
        return state.pokemons;
    },
    getNextPage(state){
        return state.nextPage;
    },
    getPreviousPage(state){
        return state.previousPage
    },
}

const actions = {
    async loadPokemons({ commit }){
        const pokemons = await PokeApi.allPokemons()

        commit('setPokemons', pokemons.results);
        commit('setNextPage', pokemons.next);
        commit('setPreviousPage', pokemons.previousPage);
    },
}

const mutations = {
    setPokemons(state, pokemons) {
        state.pokemons = pokemons;
    },
    setNextPage(state, nextPage){
        state.nextPage = nextPage;
    },
    setPreviousPage(state, previousPage){
        state.previousPage = previousPage
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}