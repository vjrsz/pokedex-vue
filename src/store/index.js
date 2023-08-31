import { createStore } from 'vuex';
import PokemonStore from './modules/PokemonStore'

const state = () => ({
    theme: 'red',
})

const getters = {
    getTheme(state){
        return state.theme
    }
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