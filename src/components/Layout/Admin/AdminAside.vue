<template>
  <aside class="a-aside-scroll bg-black">
    <div class="title-aside-section">NAVIGATION</div>
    <router-link to="/admin/trivias" class="aside-link">Manage Trivias</router-link>
  </aside>
</template>

<script>
export default {}
</script>

<style>
.a-aside-scroll {
  overflow-y: auto;
}

.a-aside-scroll::-webkit-scrollbar {
  width: 8px;
}

.a-aside-scroll::-webkit-scrollbar-track {
  background: #888;
}

.a-aside-scroll::-webkit-scrollbar-thumb {
  background: #313463;
}

.title-aside-section {
  color: white;
  width: 100%;
  background: #111;
  font-size: 0.7rem;
  padding: 10px 0 10px 15px;
}

.aside-link {
  color: white;
  background: #222;
  width: 100%;
  display: block;
  padding: 10px 15px;
  transition: padding 0.5s;
}

.aside-link:hover {
  background: #111;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
}
</style>