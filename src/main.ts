import { createApp } from 'vue';
import './assets/main.css';
import App from './App.vue';
import type { } from "vite"; // https://github.com/vitejs/vite/pull/525
import { router } from './router';

const app = createApp(App);

app.use(router);
router.isReady().then(() => {
	app
		.provide('router', router)
		.mount('#app')
})
