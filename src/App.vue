<template>
  <router-view></router-view>
</template>

<script>
window.onbeforeunload = "You Sure?"
export default {}
</script>

<style>
* {
  font-weight: 600;
}

.bg-black {
  background: #333;
}

.bg-blue {
  background: #23395d;
}

.bg-lightblue {
  background: #45697f;
}

.bg-purple {
  background: #ac039c;
}

.txt-white {
  color: #ffffff;
}
</style>
