<template>
    <div class="current-stock">
      <h1>{{ intro }}</h1>
      <Menu />
    </div>
  </template>
  
  <script>
  import Menu from './Menu.vue'
  export default {
    name: 'CurrentStock',
    components: {
      Menu
    },
    data () {
      return {
        intro: 'Manage Current Stock'
      }
    }
  }
  </script>
  
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
  