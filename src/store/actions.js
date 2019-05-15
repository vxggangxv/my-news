import {
  fetchNews,
  fetchAsk,
  fetchJobs,
  fetchUser,
  fetchItem,
  fetchList,
} from '../api/index.js';

export default {
  FETCH_NEWS({ commit }) {
    return fetchNews().then(response => commit('SET_NEWS', response.data));
  },
  FETCH_ASK(context) {
    return fetchAsk().then(response => context.commit('SET_ASK', response.data));
  },
  FETCH_JOBS({ commit }) {
    return fetchJobs().then(response => commit('SET_JOBS', response.data));
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItem(itemId).then(({ data }) => commit('SET_ITEM', data));
  },
  FETCH_USER({ commit }, userId) {
    // return fetchUser().then(({ data }) => commit('SET_USER', data));
    return fetchUser(userId).then(res => commit('SET_USER', res.data));
  },
  FETCH_LIST({ commit }, listType) {
    return fetchList(listType).then(res => commit('SET_LIST', res.data));
  },
}