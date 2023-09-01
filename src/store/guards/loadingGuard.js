import store from "@/store";

const before = async function(to, from, next){
    await store.dispatch('showLoading')

    next()
}

const after = async function(to, from){}

export default {
    before,
    after
}