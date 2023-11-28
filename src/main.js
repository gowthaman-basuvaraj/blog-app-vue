import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HomePage from "./components/HomePage.vue";
import UserPage from "./components/UserPage.vue";
import {createRouter, createWebHashHistory} from "vue-router";
// keep it simple for now.
const routes = [
    { path: '/', component: HomePage },
    { path: '/user', component: UserPage },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
createApp(App)
    .use(router)
    .mount('#app')
