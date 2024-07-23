<script setup>
import {useBlogsStore} from "../store/blogs.js";

const {getUsers, fetchUsers, fetchBlogs} = useBlogsStore()
const refresh = async () => {
  await fetchUsers()
  await fetchBlogs()
}
await refresh()
const users = getUsers()
</script>

<template>
<h1 class="mb-3">Users</h1>
  <div class="list-group">
<div class="list-group-item d-flex justify-content-between"
     v-for="u of users" :key="u.id"
>
  <div>
    <span>{{u.name}}</span> <span class="ms-4">{{u.email}}</span>
  </div>
  <router-link
      :to="{name: 'user', params: {id: u.id}}">
    View Details
  </router-link>
</div>
  </div>
</template>

<style scoped>

</style>