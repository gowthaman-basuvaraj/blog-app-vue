<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Blogs App</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/" active-class="active" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blogs" active-class="active" class="nav-link">Blogs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" active-class="active" class="nav-link">Users</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <div class="container">
    <suspense>
      <!-- loading state via #fallback slot -->
      <template #fallback>
        Loading...
      </template>

      <router-view></router-view>
    </suspense>
  </div>
</template>

<style scoped>

</style>
