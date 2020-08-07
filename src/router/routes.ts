import { RouteRecordRaw } from 'vue-router';
import NotFound from '/@/views/NotFound.vue';
import Dictionary from '/@/views/Dictionary.vue'


export const routes: RouteRecordRaw[] = [
	{
		name: 'dictionary',
		path: '/',
		component: Dictionary,
		meta: { title: 'Dictionary', crumbs: ['Dictionary'] }
	},
	{ path: '/:path(.*)', component: NotFound }
];
