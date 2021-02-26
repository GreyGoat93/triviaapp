<template>
  <div>
    <admin-header />
    <admin-main />
  </div>
</template>

<script>
import AdminHeader from "./Admin/AdminHeader.vue"
import AdminMain from "./Admin/AdminMain.vue"
export default {
  components: { AdminHeader, AdminMain },
  beforeMount() {
    this.$store.isAdminNavToggled = true
    this.$store.isAdminNavToggledM = false
  },
}
</script>

<style>
</style>