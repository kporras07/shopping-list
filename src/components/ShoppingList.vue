<script>
import Menu from './Menu.vue'
export default {
  name: 'ShoppingList',
  components: {
    Menu
  },
  data () {
    return {
      intro: 'Get My Shopping List'
    }
  }
}
</script>

<template>
    <div class="shopping-list">
      <h1>{{ intro }}</h1>
      <Menu />
    </div>
  </template>
  

  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
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
  