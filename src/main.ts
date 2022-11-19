import { createApp } from 'vue';
import App from './App.vue';
import store from '@/Todo/infrastructure/store/vuex';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(store);
app.use(pinia);

app.mount('#app');
