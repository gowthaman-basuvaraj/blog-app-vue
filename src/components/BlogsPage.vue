<script setup>
import {useBlogsStore} from "../store/blogs.js";

const {fetchUsers, fetchBlogs, getBlogs, getUsers} = useBlogsStore()

const refresh = async () => {
  await fetchUsers()
  await fetchBlogs()
}
await refresh()
const user = (id) => getUsers().value.find(u => u.id === id)?.name

const cBlogs = getBlogs()
</script>

<template>
  <div class="d-flex justify-content-between mb-3">
    <h2>List of Blogs</h2>
    <button class="btn btn-primary" @click="refresh">
      <b-icon-arrow-repeat />
    </button>
  </div>
  <div class="list-group">
    <div v-for="b of cBlogs" :key="b.id"
                 class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{b.title}}</h5>
        <small>
          <router-link :to="{name: 'blog', params: {id: b.id}}">View</router-link>
        </small>
      </div>
      <p class="mb-1">{{b.body}}</p>
      <div class="d-flex justify-content-end">
        <router-link
            :to="{name: 'user', params: {id: b.userId}}"
            class="text-body-secondary">By: {{user(b.userId)}}</router-link>
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>
