<template>
    <div>
        <div class="flex flex-col items-center">
            <div class="py-8 w-full">
                <input placeholder="Search meals" type="text" class="rounded border-gray-300 w-full">
            </div>
            <div class="flex justify-center gap-4">
                <router-link v-for="letter of letters" :key="letter" :to="{ name: 'byLetter', params: { letter } }">
                    {{ letter }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import axiosClient from '../axiosclient'
import { onMounted } from 'vue'
import store from '../store'
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list');
    const data = response.data
    console.log(data)
})
</script>