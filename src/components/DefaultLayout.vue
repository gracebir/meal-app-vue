<template>
    <div class="min-h-screen bg-gray-300 w-full font-poppins">
        <nav-bar />
        <main class="max-w-7xl mx-auto px-8">
            <router-view />
        </main>
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue';

</script>
