<template>
    <div>
        <div class="flex flex-col items-center">

            <div class="flex flex-wrap justify-center gap-4 py-6 lg:py-8">
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