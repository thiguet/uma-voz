import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        poems: []
    },
    mutations: {
        getPoems(state, poems) {
            state.poems = poems;
        }
    },
    getters: {
        poems: state => state.poems
    }
});