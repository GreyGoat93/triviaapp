import { createStore } from 'vuex'
import trivias from './modules/trivias.js'

const state = {
    isAdminNavToggled: true,
    isAdminNavToggledM: false,
};

const getters = {
    isAdminNavToggled: (state) => state.isAdminNavToggled,
    isAdminNavToggledM: (state) => state.isAdminNavToggledM,
};

const mutations = {
    toggleAdminNav: (state) => state.isAdminNavToggled = !state.isAdminNavToggled,
    toggleAdminNavM: (state) => state.isAdminNavToggledM = !state.isAdminNavToggledM,
};

const actions = {};

const modules = {trivias};

const store = createStore({
    state,
    getters,
    mutations,
    actions,
    modules,
})

export default store;

