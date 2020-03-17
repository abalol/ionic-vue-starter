<template>
  <ion-menu type="push" content-id="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list @click="closeMenu">
      <router-link to="/">
        <ion-item button >Home</ion-item>
      </router-link>
      <router-link to="/about">
        <ion-item button >About</ion-item>
      </router-link>
      <router-link to="/sample">
        <ion-item button >Sample</ion-item>
      </router-link>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script>
export default {
  name: "leftmenu",
  data: function () {
    return {}
  },
  components: {},
  methods: {
    closeMenu() {
      this.$ionic.menuController.close();
    }
  }
}
</script>