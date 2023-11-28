<script setup>
import {useRouteParams} from '@vueuse/router'
import {useBlogsStore} from "../store/blogs.js";

const id = useRouteParams('id')
const {loadUser, loadUserComments, loadUserPosts} = useBlogsStore()
const user = await loadUser(id.value)
const posts = await loadUserPosts(id.value)
const comments = await loadUserComments(id.value)
</script>

<template>
  <h1>{{ user?.name }}</h1>
  <div class="d-flex mt-5">
    <div>
      <h5>posts</h5>
      <div class="list-group">
        <router-link v-for="p of posts" :key="p.id" :to="{name: 'blog', params: {id: p.id}}" class="list-group-item">
          {{ p.title }}
        </router-link>
      </div>
    </div>
    <div class="ms-2">

      <h6>comments</h6>
      <div class="list-group">
        <a v-for="p of comments" :key="p.id" class="list-group-item">
          {{ p.body }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>