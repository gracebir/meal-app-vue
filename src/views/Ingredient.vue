<template>
    <div class="py-8 flex flex-col gap-3">
        <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
            class="bg-white px-6 py-4 rounded" v-for="ingredient of ingredients" :key="ingredient.idIngredient">
            <h1 class="text-xl lg:text-2xl font-bold">{{ ingredient.strIngredient }}</h1>
            <p>{{ ingredient.strDescription }}</p>
        </router-link>
        <!-- <pre> {{ ingredients }}</pre> -->
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axiosClient from "../axiosclient";

//  :to="{ name: 'byIngredient', params: { ingredient: ingredient.idIngredient } }"
const ingredients = ref([])

async function fetchIngredient() {
    const response = await axiosClient.get('/list.php?i=list')
    ingredients.value = response.data.meals
}

onMounted(() => {
    fetchIngredient()
})
</script>
