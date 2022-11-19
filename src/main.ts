import { createApp } from 'vue';
import App from './App.vue';
import store from "@/Todo/infrastructure/store/vuex";

const app = createApp(App);
app.use(store);
app.mount('#app');
