<template>
    <div class="py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <!-- food card -->
            <MealTile v-for="meal of meals" :key="meal.idMeal" :idMeal="meal.idMeal" :strMealThumb="meal.strMealThumb"
                :strMeal="meal.strMeal" :strYoutube="meal.strYoutube" :strTags="meal.strTags" />
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealTile from "../components/MealTile.vue";

const route = useRoute()

const meals = computed(() => store.state.mealsByIngredients)
const getMealById = () => {
    store.dispatch('searchMealByIngredents', route.params.ingredient)
}
onMounted(() => {
    getMealById()
})
</script>
