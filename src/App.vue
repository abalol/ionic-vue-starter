<template>
  <div id="app">
    <ion-app>
      <LeftMenu />
      <ion-vue-router />
    </ion-app>
  </div>
</template>
<script>
import LeftMenu from '@/components/LeftMenu.vue'
export default {
  name: "home",
  data: function () {
    return {
      sample: "sample",
    }
  },
  components: {
    LeftMenu
  },
  methods: {
    closeMenu() {
      this.$ionic.menuController.close();
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
