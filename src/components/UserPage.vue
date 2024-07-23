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
  <div class="d-flex flex-column">
    <h1>Name: {{ user?.name }}</h1>
    <b>UserName: {{ user?.username }}</b>
    <b>EMail: {{ user?.email }}</b>
    <b>Phone: {{ user?.phone }}</b>
    <b>Web: <a>{{ user?.website }}</a></b>
    <em>
      Address:
      {{user.address.street}}
      {{user.address.suite}}
      {{user.address.city}}
      {{user.address.zipcode}}
    </em>
  </div>
  <div class="d-flex mt-5">
    <div>
      <h6>posts by {{user?.name}}</h6>
      <div class="list-group">
        <router-link v-for="p of posts" :key="p.id" :to="{name: 'blog', params: {id: p.id}}" class="list-group-item">
          {{ p.title }}
        </router-link>
      </div>
    </div>
    <div class="ms-2">

      <h6>comments by {{user?.name}}</h6>
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