/** @format */
import axiosClient from "../axiosclient";

export async function searchMeal({ commit }, keyword) {
    const response = await axiosClient.get(`/search.php?s=${keyword}`);
    const data = await response.data;
    commit("setSearchedMeal", data.meals);
}

export async function searchMealByLetter({ commit }, keyword) {
    const response = await axiosClient.get(`/search.php?f=${keyword}`);
    const data = await response.data;
    commit("setMealByLetter", data.meals);
}

export async function searchMealByIngredents({ commit }, keyword) {
    const response = await axiosClient.get(`/list.php?i=${keyword}`);
    const data = await response.data;
    commit("setMealByIngredients", data.meals);
}
