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
    <router-link
        v-for="u of users" :key="u.id"
        :to="{name: 'user', params: {id: u.id}}" class="list-group-item">
      {{u.name}}
    </router-link>
  </div>
</template>

<style scoped>

</style>