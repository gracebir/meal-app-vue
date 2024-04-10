/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import SearchByName from "../views/SearchByName.vue";
import SearchByLetter from "../views/SearchByLetter.vue";
import SearchByIngredient from "../views/SearchByIngredient.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "home",
                component: Home,
            },
            {
                path: "/letter/:letter?",
                name: "byLetter",
                component: MealList,
            },
            {
                path: "/by-name/:name?",
                name: "byName",
                component: SearchByName,
            },
            {
                path: "/by-ingredient/:ingredient?",
                name: "byIngredient",
                component: SearchByIngredient,
            },
            {
                path: "/by-meals/:name?",
                name: "MealByName",
                component: SearchByLetter,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
