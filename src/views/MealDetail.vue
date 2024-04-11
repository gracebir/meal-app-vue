<template>
    <div class="w-full min-h-[80vh] flex items-center">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white py-8 px-6 mt-4 lg:my-10 rounded-lg">
            <div class="w-full h-auto lg:h-[500px]">
                <img class="w-full h-full  rounded-lg" :src="meal.strMealThumb" :alt="meal.strMeal">
            </div>
            <div class="flex flex-col gap-3 lg:gap-6">
                <h1 class="text-3xl font-bold">{{ meal.strMeal }}</h1>
                <p>{{ meal.strInstructions }}</p>
                <div>
                    <p> <span class="font-semibold">Category: </span> {{ meal.strCategory }}</p>
                    <p> <span class="font-semibold">Area: </span> {{ meal.strArea }}</p>
                    <p> <span class="font-semibold">Tags: </span> {{ meal.strTags }}</p>
                </div>
                <div class="flex flex-col lg:flex-row gap-3">
                    <h1 class="font-semibold">Ingredients:</h1>
                    <div class="flex flex-wrap gap-3">
                        <div class="bg-purple-300 rounded-lg px-3 py-2" v-for="(val, index) of new Array(12) "
                            :key="index">
                            <span v-if="meal[`strIngredient${index + 1}`]">
                                {{ meal[`strIngredient${index + 1}`] }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row gap-3">
                    <h1 class="font-semibold">Measures:</h1>
                    <div class="flex flex-wrap gap-3">
                        <div class="bg-purple-300 rounded-lg px-3 py-2" v-for="(val, index) of new Array(12)  "
                            :key="index">
                            <span v-if="meal[`strMeasure${index + 1}`]">
                                {{ meal[`strMeasure${index + 1}`] }}
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <Youtube :href="meal.strYoutube" text="Go to Youtube" />
                </div>

            </div>
        </div>
    </div>

</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosclient";
import Youtube from "../components/Youtube.vue";

const route = useRoute()
const meal = ref({})


onMounted(async () => {
    const response = await axiosClient.get(`/lookup.php?i=${route.params.id}`)
    meal.value = response.data.meals[0] || {}
})
</script>
