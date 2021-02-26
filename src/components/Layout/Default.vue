<template>
  <div>
    <app-header />
    <app-content />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "./Default/AppHeader.vue";
import AppContent from "./Default/AppContent.vue";
import AppFooter from "./Default/AppFooter.vue";
export default {
  components: { AppHeader, AppContent, AppFooter },
  name: "Default",
};
</script>

<style>
</style>