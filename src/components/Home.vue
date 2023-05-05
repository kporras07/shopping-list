<template>
  <div class="home">
    <h1>{{ intro }}</h1>
    <Menu />
  </div>
</template>

<script>
import Menu from './Menu.vue'
export default {
  name: 'Home',
  components: {
    Menu
  },
  data () {
    return {
      intro: 'Welcome to Your Shopping List App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
