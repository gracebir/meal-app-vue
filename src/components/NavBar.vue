<template>
    <header class="w-full bg-white h-16 shadow">
        <div class="max-w-7xl mx-auto py-4 text-lg flex justify-between px-8">
            <router-link :to="{ name: 'home' }">
                <span class="font-bold">Meal App</span>
            </router-link>

            <div class="flex gap-8 text-base">
                <router-link class="hover:underline duration-300 font-medium text-gray-600 hover:text-gray-800"
                    :to="{ name: 'byName' }">
                    Search Meals
                </router-link>
                <router-link :to="{ name: 'byLetter' }"
                    class="hover:underline duration-300 font-medium text-gray-600 hover:text-gray-800">
                    Meals By Letter
                </router-link>
                <router-link :to="{ name: 'ingredient' }"
                    class="hover:underline duration-300 font-medium text-gray-600 hover:text-gray-800">
                    Meals By Ingredient
                </router-link>
            </div>
        </div>
    </header>
</template>
