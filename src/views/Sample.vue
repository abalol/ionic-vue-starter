<template>
  <ion-page class="ion-page" id="content">
    <Header />
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
      <ion-button @click="onClick">fetch api</ion-button>
      <ion-list>
        <ion-item v-for="user of users" v-bind:key="user.id">
          <ion-label full>{{user.name}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue'
export default {
  name: "home",
  data () {
    return {
      users : []
    }
  },
  components: {
    Header
  },
  methods: {
    async onClick () {
      const users = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.users = users.data;
      console.log(this.users);
    }
  }
}
</script>