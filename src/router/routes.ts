import { RouteRecordRaw } from 'vue-router';
import Dashboard from '/@/views/Dashboard.vue';
import DashboardLayout from '/@/views/_Layout.vue';
import NotFound from '/@/views/NotFound.vue';


export const routes: RouteRecordRaw[] = [
	{
		path: '/', component: DashboardLayout, meta: { title: 'Dashboard Layout' }, children: [
			{ path: '', redirect: '/dashboard' },
			{
				name: 'dashboard',
				path: 'dashboard',
				component: Dashboard,
				meta: { title: 'App Dashboard', crumbs: ['Dashboard'] }
			}
	] },
	{ path: '/:path(.*)', component: NotFound }
];
