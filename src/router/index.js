import { createRouter, createWebHistory } from 'vue-router'
import HomeRoute from "@/router/HomeRoute";
import PokemonRoute from "@/router/PokemonRoute";

const routes = [
    HomeRoute,
    PokemonRoute
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
