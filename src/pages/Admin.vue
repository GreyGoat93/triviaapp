<template>
  <div>
    <h3 class="text-center">Select What You Want To Do</h3>
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-md-12 bg-secondary rounded p-1">
          <router-link to="/admin/trivias" class="ml-2 admin-link">Manage Trivias</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.admin-link {
  color: white;
  display: block;
}

.admin-link:hover {
  color: white;
  text-decoration: none;
}
</style>