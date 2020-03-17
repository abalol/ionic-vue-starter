<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-toggle>
          <ion-button @click="this.$ionic.menuController.open">
            <ion-icon slot="icon-only" color="dark" name="menu"></ion-icon>
          </ion-button>
        </ion-menu-toggle>
      </ion-buttons>
      <ion-title>Fanbase</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
export default {
  name: 'Fanbase',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
