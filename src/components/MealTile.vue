<template>
    <div class="bg-white shadow-md rounded-lg w-full">
        <router-link :to="{ name: 'MealDetail', params: { id: idMeal } }">
            <div class="h-48 w-full">
                <img class="rounded-t-lg w-full h-full object-cover" :src="strMealThumb" :alt="strTags">
            </div>
        </router-link>
        <div class="p-4 flex flex-col gap-5">
            <h3 class="font-semibold text-xl">{{ strMeal }}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, veniam dolorum quas facere
                natus velit, eum maiores vel officiis nihil alias obcaecati eveniet atque omnis. </p>
            <div class="flex justify-between items-center">
                <Youtube :href="strYoutube" text="Youtube" />
                <router-link
                    class="border-blue-300 border-2 px-4 py-1 text-blue-300 hover:text-white font-medium duration-300 hover:bg-blue-300  rounded-lg"
                    :to="{ name: 'MealDetail', params: { id: idMeal } }">
                    View
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import Youtube from './Youtube.vue';

const props = defineProps({
    idMeal: String,
    strMealThumb: String,
    strTags: String,
    strMeal: String,
    strYoutube: String
})
</script>
