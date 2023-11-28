<script setup>
import {useRouteParams} from '@vueuse/router'
import {useBlogsStore} from "../store/blogs.js";

const id = useRouteParams('id')
const {blogs, loadBlogComments} = useBlogsStore()
const blog = blogs.find(b => b.id === +id.value)
console.log('blog', blogs.length, blogs[0], blog, id.value)
const comments = await loadBlogComments(id.value)
</script>

<template>
  <h1>{{ blog?.title }}</h1>
  <div class="d-flex mt-5">
    <div>
      {{ blog?.body }}
    </div>
    <div class="ms-2">

      <h6>comments</h6>
      <div class="list-group">
        <div v-for="p of comments" :key="p.id" class="list-group-item d-flex flex-column">
          <p>{{ p.body }}</p>
          <div class="d-flex justify-content-end"><small><em>by {{p.email}}</em></small></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>