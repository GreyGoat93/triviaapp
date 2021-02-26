<template>
  <nav class="navbar navbar-dark bg-blue navbar-expand-lg w-100">
    <router-link to="/" class="navbar-brand txt-white">
      <h1 style="font-size: 1.5em">TriviaApp</h1>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link active" :to="'/'">Home</router-link>
        <router-link class="nav-item nav-link active" :to="'/play'">Play</router-link>
        <router-link class="nav-item nav-link active" :to="'/about'">About</router-link>
        <router-link class="nav-item nav-link active" :to="'/admin'">Admin</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data: function () {
    return {}
  },
}
</script>

<style>
</style>