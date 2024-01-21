import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css'
import router from './routes'
import axios from 'axios'

// createApp(App).use(router).mount('#app')
const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount('#app');