<template>
  <main role="main" class="a-main">
    <admin-aside ref="aside" class="a-aside a-aside-shrinked a-aside-wide-m" />
    <div class="a-content-wrapper a-content-wrapper-shrinked a-content-wrapper-wide-m" ref="wrapper">
      <router-view class="p-2" />
    </div>
  </main>
</template>

<script>
import AdminAside from "./AdminAside.vue"
export default {
  components: { AdminAside },
  computed: {
    isNavToggled() {
      return this.$store.getters.isAdminNavToggled
    },
    isNavToggledM() {
      return this.$store.getters.isAdminNavToggledM
    },
  },
  methods: {
    toggleAside(val) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        const arr = ["a-aside-wide", "a-aside-shrinked"]
        this.$refs.aside.$el.classList.remove(val ? arr[0] : arr[1])
        this.$refs.aside.$el.classList.add(val ? arr[1] : arr[0])
      } else {
        const arr = ["a-aside-wide-m", "a-aside-shrinked-m"]
        this.$refs.aside.$el.classList.remove(val ? arr[0] : arr[1])
        this.$refs.aside.$el.classList.add(val ? arr[1] : arr[0])
      }
    },
    toggleWrapper(val) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        const arr = ["a-content-wrapper-wide", "a-content-wrapper-shrinked"]
        this.$refs.wrapper.classList.remove(val ? arr[0] : arr[1])
        this.$refs.wrapper.classList.add(val ? arr[1] : arr[0])
      } else {
        const arr = ["a-content-wrapper-wide-m", "a-content-wrapper-shrinked-m"]
        this.$refs.wrapper.classList.remove(val ? arr[0] : arr[1])
        this.$refs.wrapper.classList.add(val ? arr[1] : arr[0])
      }
    },
  },
  watch: {
    isNavToggled: function (val) {
      this.toggleAside(val)
      this.toggleWrapper(val)
    },
    isNavToggledM: function (val) {
      this.toggleAside(val)
      this.toggleWrapper(val)
    },
  },
}
</script>

<style>
.a-main {
  margin-top: 100px;
}

.a-content-wrapper {
  transition: padding-left 0.2s;
}

.a-aside {
  z-index: 9;
  top: 100px;
  bottom: 0;
  width: 200px;
  position: fixed;
  transition: left 0.2s;
}

.a-aside-wide-m {
  left: -200px;
}

.a-aside-shrinked-m {
  left: 0px;
}

.a-content-wrapper-wide-m {
  margin-left: 0px;
}

.a-content-wrapper-shrinked-m {
  padding-left: 200px;
}

@media screen and (min-width: 768px) {
  .a-main {
    margin-top: 50px;
  }

  .a-aside {
    top: 50px;
  }

  .a-aside-wide {
    left: -200px;
  }

  .a-aside-shrinked {
    left: 0px;
  }

  .a-content-wrapper-wide {
    padding-left: 0px;
  }

  .a-content-wrapper-shrinked {
    padding-left: 200px;
  }
}
</style>