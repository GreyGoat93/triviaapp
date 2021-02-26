import {createApp} from 'vue'
import App from './App.vue'
import state from './store/index.js';
import router from './router.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(state).use(router).mount('#app')
