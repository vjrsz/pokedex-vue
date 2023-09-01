import { createStore } from 'vuex';
import PokemonStore from './modules/PokemonStore'
import loadingGuard from "@/store/guards/loadingGuard";
import router from "@/router";

router.beforeEach(loadingGuard.before)
router.afterEach(loadingGuard.after)

const state = () => ({
    theme: 'red',
    loading: false,
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
    },
    showLoading({ commit, getters }){
        const loading = !getters.getLoading
        commit('setLoading', loading);
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




