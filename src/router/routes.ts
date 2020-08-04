import { RouteRecordRaw } from 'vue-router';
import Dashboard from '/@/views/Dashboard.vue';
import Layout from '/@/views/_Layout.vue';
import NotFound from '/@/views/NotFound.vue';
import Dictionary from '/@/views/Dictionary.vue'


export const routes: RouteRecordRaw[] = [
	{
		path: '/', component: Layout, meta: { title: 'App Layout' }, children: [
			{ path: '', redirect: '/dashboard' },
			{
				name: 'dashboard',
				path: 'dashboard',
				component: Dashboard,
				meta: { title: 'App Dashboard', crumbs: ['Dashboard'] }
			},
		]},
	{
		name: 'dictionary',
		path: '/dictionary',
		component: Dictionary,
		meta: { title: 'Dictionary', crumbs: ['Dictionary'] }
	},
	{ path: '/:path(.*)', component: NotFound }
];
