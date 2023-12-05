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
  <h2 class="my-4 text-black-50">The Application and The Assignment</h2>
  <div class="d-flex">
    <div class="list-group list-group-flush">
      <div class="list-group-item active">
        <h2>These are the list of API's</h2>
      </div>
      <div class="list-group-item list-group-item-success">Fetch All Blogs <br />
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
      <div class="list-group-item list-group-item-primary">Fetch All Users <br />
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
      <div class="list-group-item list-group-item-dark">Fetch Details  of a user, for a given id<br />
        <em>{{constants.User.id("id")}}</em> <br />
        <p class="my-0 text-black-50">example: To Fetch Details of User with id - 3</p>
        <em>{{constants.User.id("3")}}</em>
      </div>
      <div class="list-group-item list-group-item-light">Fetch Comments Made by a user, for a given id<br />
        <em>{{constants.User.comments("id")}}</em> <br />
        <p class="my-0 text-black-50">example: To Fetch Comments by User with id - 4</p>
        <em>{{constants.User.comments("4")}}</em>
      </div>
      <div class="list-group-item list-group-item-secondary">Fetch Blogs Created by a user, for a given id<br />
        <em>{{constants.User.posts("id")}}</em> <br />
        <p class="my-0 text-black-50">example: To Fetch Blogs created by User with id - 5</p>
        <em>{{constants.User.posts("5")}}</em>
      </div>
      <div class="list-group-item list-group-item-info">
        <em>Use Network Console to find any more API's that are being used</em>
      </div>
    </div>
    <div class="ms-2">
      <div class="list-group list-group-flush">
        <div class="list-group-item active">
          <h2>Assignment</h2>
        </div>
        <div class="list-group-item">Go through this application in detail, understand what has been done</div>
        <div class="list-group-item">try to build, as much of this application as possible</div>
        <div class="list-group-item">You can try to build same, less or more features</div>
        <div class="list-group-item">you are free to use any tech/platform/language</div>
        <div class="list-group-item">You are free to build a) webapp or b) mobile app or c)desktop app</div>
        <div class="list-group-item">you are build SPA (react, vue etc...) or SSR (spring boot etc)</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
