/** @format */

// export default {};

export function setSearchedMeal(state, meals) {
    state.searchedMeals = meals;
}

export function setMealByLetter(state, meals) {
    state.mealByLetter = meals;
}

export function setMealByIngredients(state, meals) {
    state.mealsByIngredients = meals;
}
