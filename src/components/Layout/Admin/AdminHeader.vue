<template>
  <header class="a-header bg-lightblue">
    <div>
      <router-link
        to="/admin"
        class="a-header-brand bg-blue a-header-brand-shrinked a-header-brand-wide-m"
        ref="headerBrand"
      >
        <h4>TriviaApp</h4>
      </router-link>
    </div>
    <nav class="d-flex justify-content-between a-nav">
      <div class="a-header-bars" @click="toggleAside">
        <i class="fa fa-bars d-inline" aria-hidden="true"></i>
      </div>
      <router-link to="/" class="a-nav-home d-flex justify-content-center align-items-center"
        ><i class="fas fa-home"></i
      ></router-link>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isNavToggled() {
      return this.$store.getters.isAdminNavToggled
    },
  },
  data() {
    return {}
  },
  methods: {
    toggleAside() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        const arr = ["a-header-brand-shrinked", "a-header-brand-wide"]
        this.$refs.headerBrand.$el.classList.remove(this.isNavToggled ? arr[0] : arr[1])
        this.$refs.headerBrand.$el.classList.add(this.isNavToggled ? arr[1] : arr[0])
        this.$store.commit("toggleAdminNav")
      } else this.$store.commit("toggleAdminNavM")
    },
  },
}
</script>

<style>
.a-header {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
  top: 0;
  z-index: 11;
}

.a-header-brand {
  height: 50px;
  width: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  transition: width 0.3s;
  z-index: 10;
}

.a-header-brand:hover {
  color: white;
  background: #201;
  text-decoration: none;
}

.a-header-brand h4 {
  margin: 0 !important;
  padding: 0 !important;
}

.a-header-bars {
  width: 50px;
  height: 50px;
  background: #212121;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.a-header-bars:hover {
  background: #444;
  cursor: pointer;
}

.a-nav {
  height: 50px;
  width: 100%;
}

.a-nav-home {
  background: #212121;
  height: 100%;
  width: 50px;
  padding: 0 10px;
  color: white;
}

.a-nav-home:hover {
  background: #313131;
  color: white;
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .a-header {
    height: 50px;
    flex-direction: row;
  }

  .a-header-brand {
    height: 100%;
    width: 200px;
    opacity: 1;
    transition: margin-left 0.2s, opacity 0.2s;
  }

  .a-header-brand-wide {
    margin-left: -200px;
  }

  .a-header-brand-shrinked {
    margin-left: 0px;
  }

  .a-nav {
    width: 100%;
  }
}
</style>