import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 默认仓储
let store = {
    state: {
        client : location.href.includes('origin') ? 'origin' : 'std'
    },
    mutations: {
        switchClient : function (state,val){
            state.client = val || 'std'
        }
    },
    getters: {},
    actions: {},
    modules: {},
};

export default new Vuex.Store(store);
