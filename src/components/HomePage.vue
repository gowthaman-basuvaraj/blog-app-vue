<script setup>

import constants from "../constants.js";
</script>

<template>
  <h1>Welcome to Blogs Application</h1>
  <ul>
    <li>
      <router-link to="/blogs">View List of Blogs</router-link>
    </li>
    <li>
      <router-link to="/users">View List Of Users</router-link>
    </li>
  </ul>
  <h2 class="mt-4">How this application is built</h2>
  <h5>these are the list of API's</h5>
  <div class="list-group">
    <div class="list-group-item">Fetch All Blogs <br />
      <em>{{constants.Blog.all}}</em>
    </div>
    <div class="list-group-item">Fetch All Users <br />
      <em>{{constants.User.all}}</em>
    </div>
    <div class="list-group-item">Fetch Comments of a Blog , for a given id<br />
      <em>{{constants.Blog.comments("id")}}</em>
    </div>
    <div class="list-group-item">Fetch Details  of a user , for a given id<br />
      <em>{{constants.User.id("id")}}</em>
    </div>
    <div class="list-group-item">Fetch Comments Made by a user , for a given id<br />
      <em>{{constants.User.comments("id")}}</em>
    </div>
  </div>
</template>

<style scoped>
</style>
