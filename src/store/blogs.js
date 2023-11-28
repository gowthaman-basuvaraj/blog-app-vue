import {defineStore} from 'pinia'
import {ref} from "vue";
import Constants from "../constants.js";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useBlogsStore = defineStore('blogs', () => {
    // other options...
    const blogs = ref([])
    const users = ref([])
    const userMap = ref({})
    const userPosts = ref({})
    const userComments = ref({})
    const blogComments = ref({})

    const fetchBlogs = async () => {
        if (blogs.value.length > 0) return
        let r1 = await fetch(Constants.Blog.all)
        if (r1.ok && r1.status === 200) {
            blogs.value = await r1.json()
        }
    }
    const fetchUsers = async () => {
        if (users.value.length > 0) return
        let r1 = await fetch(Constants.User.all)
        if (r1.ok && r1.status === 200) {
            users.value = await r1.json()
        }
    }

    const loadUser = async (id) => {
        if (!userMap.value[id]) {
            let r1 = await fetch(Constants.User.id(id))
            userMap.value[id] = await r1.json()
        }
        return userMap.value[id]
    }
    const loadUserPosts = async (id) => {
        if (!userPosts.value[id]) {
            let r1 = await fetch(Constants.User.posts(id))
            userPosts.value[id] = await r1.json()
        }
        return userPosts.value[id]
    }
    const loadUserComments = async (id) => {
        if (!userComments.value[id]) {
            let r1 = await fetch(Constants.User.comments(id))
            userComments.value[id] = await r1.json()
        }
        return userComments.value[id]
    }
    const loadBlogComments = async (id) => {
        if (!blogComments.value[id]) {
            let r1 = await fetch(Constants.Blog.comments(id))
            blogComments.value[id] = await r1.json()
        }
        return blogComments.value[id]
    }

    const getBlogs = () => blogs
    const getUsers = () => users
    return {blogs, fetchBlogs, users, fetchUsers, loadUser, loadUserPosts,
        loadUserComments, loadBlogComments, getBlogs, getUsers}
})