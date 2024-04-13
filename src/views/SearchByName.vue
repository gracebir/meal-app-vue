<template>
    <div>

        <div class="py-8 w-full">
            <input v-model="keyword" @change="searchMeal" placeholder="Search meals" type="text"
                class="rounded border-gray-300 w-full">

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <!-- food card -->
                <MealTile v-for="meal of meals" :key="meal.idMeal" :idMeal="meal.idMeal"
                    :strMealThumb="meal.strMealThumb" :strMeal="meal.strMeal" :strYoutube="meal.strYoutube"
                    :strTags="meal.strTags" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store';
import MealTile from '../components/MealTile.vue';

const meals = computed(() => store.state.searchedMeals)

let keyword = ref('')
async function searchMeal() {
    store.dispatch('searchMeal', keyword.value)
}

onMounted(() => {
    console.log(keyword.value)
    if (keyword.value) {
        searchMeal();
    }
})
</script>
