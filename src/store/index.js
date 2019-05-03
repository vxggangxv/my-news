import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
    stric: process.env.NODE_ENV !== 'production',
    state: {
        news: [],
        ask: [],
        jobs: []
    },
    getters,
    mutations,
    actions
})

// import Vue from 'vue';
// import Vuex from 'vuex';
// import getters from './getters.js';
// import actions from './actions.js';
// import mutations from './mutations.js';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     strict: process.env.NODE_ENV !== 'production',
//     state: {
//         news: [],
//         ask: [],
//         jobs: [],
//         user: [],
//         item: []
//     },
//     getters,
//     actions,
//     mutations,
// })