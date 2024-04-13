<template>
    <a target="_blank"
        class="border-red-300 border-2 px-4 py-1 text-red-300 hover:text-white font-medium duration-300 hover:bg-red-300  rounded-lg"
        :href="href">
        <slot></slot>
    </a>
</template>
<script setup>
const props = defineProps({
    href: String,

})
</script>
