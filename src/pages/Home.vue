<template>
  <div style="height: 100vh" class="landing p-5">
    <div class="p-4 border border-secondary rounded d-flex flex-column justify-content-center align-items-center">
      <h2 class="text-center m-3">Welcome to my Trivia App ;)</h2>
      <router-link to="/play" class="btn btn-primary m-3">Play Now!</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.landing {
  background: linear-gradient(30deg, #22d9, #9999);
}
</style>