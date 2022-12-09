<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <h2>Bienvenido a tu almacén en VueJS</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
