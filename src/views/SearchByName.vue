<template>
    <div>
        <div class="py-8 w-full">
            <input v-model="keyword" @change="searchMeal" placeholder="Search meals" type="text"
                class="rounded border-gray-300 w-full">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <!-- food card -->
                <div class="bg-white shadow-md rounded-lg w-full" v-for="meal of meals" :key="meal.idMeal">
                    <div class="h-48 w-full">
                        <img class="rounded-t-lg w-full h-full object-cover" :src="meal.strMealThumb"
                            :alt="meal.strTags">
                    </div>
                    <div class="p-4 flex flex-col gap-5">
                        <h3 class="font-semibold text-xl">{{ meal.strMeal }}</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, veniam dolorum quas facere
                            natus velit, eum maiores vel officiis nihil alias obcaecati eveniet atque omnis. </p>
                        <div class="flex justify-between items-center">
                            <a class="border-red-300 border-2 px-4 py-1 text-red-300 hover:text-white font-medium duration-300 hover:bg-red-300  rounded-lg"
                                :href="meal.strYoutube">Youtube</a>
                            <router-link
                                class="border-blue-300 border-2 px-4 py-1 text-blue-300 hover:text-white font-medium duration-300 hover:bg-blue-300  rounded-lg"
                                to="/">
                                View
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store';
import { useRoute } from 'vue-router';

const meals = computed(() => store.state.searchedMeals)
const route = useRoute()
console.log(meals)

let keyword = ref('')
async function searchMeal() {
    store.dispatch('searchMeal', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeal();
    }
})
</script>
