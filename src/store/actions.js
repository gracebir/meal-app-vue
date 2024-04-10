/** @format */
import axiosClient from "../axiosclient";

export async function searchMeal({ commit }, keyword) {
    const response = await axiosClient.get(`/search.php?s=${keyword}`);
    const data = await response.data;
    commit("setSearchedMeal", data.meals);
}
