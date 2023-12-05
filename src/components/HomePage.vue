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
      <em>{{constants.Blog.all}}</em> <br />
      <p class="my-0 text-black-50">Sample Response</p>
      <pre>
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"
  }
]
      </pre>
      <p class="my-2">The response will be list of blog entries, with title, body, id and the userId (this is the id of user who created this blog)</p>
    </div>
    <div class="list-group-item">Fetch All Users <br />
      <em>{{constants.User.all}}</em> <br />
      <p class="my-0 text-black-50">Sample Response</p>
      <pre>
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
  }
]
      </pre>
      <p class="my-2">the response will be array of users, have id, name, email, phone, website and username  </p>
    </div>
    <div class="list-group-item">Fetch Comments of a Blog , for a given id<br />
      <em>{{constants.Blog.comments("id")}}</em> <br />
      <p class="my-0 text-black-50">example: To Fetch Comments of Blog with id - 2</p>
      <em>{{constants.Blog.comments("2")}}</em>
    </div>
    <div class="list-group-item">Fetch Details  of a user, for a given id<br />
      <em>{{constants.User.id("id")}}</em> <br />
      <p class="my-0 text-black-50">example: To Fetch Details of User with id - 3</p>
      <em>{{constants.User.id("3")}}</em>
    </div>
    <div class="list-group-item">Fetch Comments Made by a user, for a given id<br />
      <em>{{constants.User.comments("id")}}</em> <br />
      <p class="my-0 text-black-50">example: To Fetch Comments by User with id - 4</p>
      <em>{{constants.User.comments("4")}}</em>
    </div>
    <div class="list-group-item">Fetch Blogs Created by a user, for a given id<br />
      <em>{{constants.User.posts("id")}}</em> <br />
      <p class="my-0 text-black-50">example: To Fetch Blogs created by User with id - 5</p>
      <em>{{constants.User.posts("5")}}</em>
    </div>
  </div>
</template>

<style scoped>
</style>
