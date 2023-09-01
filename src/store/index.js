import { createStore } from 'vuex';
import PokemonStore from './modules/PokemonStore'

const state = () => ({
    theme: 'red',
    loading: true,
})

const getters = {
    getTheme(state){
        return state.theme
    },
    getLoading(state){
        return state.loading
    },
}

const actions = {
    changeTheme({ commit, getters  }){
        const theme = getters.getTheme === 'red' ? 'blue' : 'red'
        commit('setTheme', theme);
    }
}

const mutations = {
    setTheme(state, theme){
        state.theme = theme
    },
    setLoading(state, loading){
        state.loading = loading
    }
}

export default createStore({
    state,
    getters,
    actions,
    mutations,
    modules: {
        pokemon: PokemonStore
    },
});