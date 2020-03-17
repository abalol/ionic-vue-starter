<template>
  <ion-page class="ion-page" id="content">
    <Header />
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
    </ion-content>
  </ion-page>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: "home",
  components: {
    Header
  },
  methods: {
    onClick () {}
  }
}
</script>