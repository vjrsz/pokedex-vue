import { createRouter, createWebHistory } from 'vue-router'
import HomeRoute from "@/router/Home";

const routes = [
    HomeRoute
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
