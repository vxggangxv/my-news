import Vue from 'vue';
import VueRouter from 'vue-router';
import {
	UserView,
	ItemView
} from '@/views';
import createListView from '@/views/CreateListView';
import bus from '@/utils/bus.js';
import store from '@/store';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [{
			path: '/',
			redirect: '/news'
		},
		{
			path: '/news',
			name: 'news',
			component: createListView('NewsView'),
			beforeEnter(to, from, next) {
				bus.$emit('on:progress');
				store.dispatch('FETCH_LIST', to.name)
					.then(next())
					.catch(() => new Error('failed to fetch new items'));
			}
		},
		{
			path: '/ask',
			name: 'ask',
			component: createListView('AskView'),
			beforeEnter(to, from, next) {
				bus.$emit('on:progress');
				store.dispatch('FETCH_LIST', to.name)
					.then(next())
					.catch(() => new Error('failed to fetch new items'));
			}
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: createListView('JobsView'),
			beforeEnter(to, from, next) {
				bus.$emit('on:progress');
				store.dispatch('FETCH_LIST', to.name)
					.then(next())
					.catch(() => new Error('failed to fetch new items'));
			}
		},
		{
			path: '/item/:id',
			component: ItemView
		},
		{
			path: '/user/:id',
			component: UserView
		},
	]
})