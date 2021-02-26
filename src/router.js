import {createWebHistory, createRouter} from 'vue-router';
import Home from './pages/Home.vue';
import Admin from './pages/Admin.vue';
import About from './pages/About.vue';
import Trivias from './pages/Admin/Trivias.vue';
import Play from './pages/Play.vue';
import Casual from './pages/Play/Casual.vue';
import NotFound from './pages/NotFound.vue';
import DefaultLayout from './components/Layout/Default.vue'
import AdminLayout from './components/Layout/Admin.vue'

const routes = [
    {path: '/', component: DefaultLayout, children: [
        {path: '', component: Home},
        {path: '/play', component: Play},
        {path: '/play/casual', component: Casual},
        {path: '/about', component: About},
    ]},
    {path: '/admin', 
    component: AdminLayout,
    children: [
        {path: '', component: Admin},
        {path: 'trivias', component: Trivias},
    ]},
    {path: '/:pathMatch(.*)', component: DefaultLayout, children: [
        {path: '', component: NotFound}
    ]},
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
