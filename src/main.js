import {createApp} from 'vue'
import './style.scss'
import App from './App.vue'
import HomePage from "./components/HomePage.vue";
import UserPage from "./components/UserPage.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import {createPinia} from "pinia";
import {BootstrapIconsPlugin} from 'bootstrap-icons-vue';
import BlogsPage from "./components/BlogsPage.vue";
import UsersPage from "./components/UsersPage.vue";
import BlogPage from "./components/BlogPage.vue";

// keep it simple for now.
const routes = [
    {path: '/', component: HomePage, name: "home"},
    {path: '/blogs', component: BlogsPage, name: "blogs"},
    {path: '/blog/:id', component: BlogPage, name: "blog"},
    {path: '/users', component: UsersPage, name: "users"},
    {path: '/user/:id', component: UserPage, name: "user"},
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
createApp(App)
    .use(router)
    .use(createPinia())
    .use(BootstrapIconsPlugin)
    .mount('#app')
