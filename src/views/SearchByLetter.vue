<template>
    <div class="py-8">
        <div class="flex flex-col items-center">
            <div class="flex flex-wrap justify-center gap-4 py-6 lg:py-8">
                <router-link v-for="letter of letters" :key="letter" :to="{ name: 'byLetter', params: { letter } }">
                    {{ letter }}
                </router-link>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <!-- food card -->
            <MealTile v-for="meal of meals" :key="meal.idMeal" :idMeal="meal.idMeal" :strMealThumb="meal.strMealThumb"
                :strMeal="meal.strMeal" :strYoutube="meal.strYoutube" :strTags="meal.strTags" />
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, watch } from 'vue'
import store from '../store';
import { useRoute } from 'vue-router';
import MealTile from '../components/MealTile.vue';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const route = useRoute()


const meals = computed(() => store.state.mealByLetter)

function findMeal() {
    store.dispatch('searchMealByLetter', route.params.letter)
}

watch(route, () => {
    findMeal()
})

onMounted(() => {
    findMeal()
})
</script>
