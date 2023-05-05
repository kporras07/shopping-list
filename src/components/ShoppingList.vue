<script>
import Menu from './Menu.vue'
export default {
  name: 'ShoppingList',
  components: {
    Menu
  },
  data () {
    return {
      intro: 'Get My Shopping List',
      stock: JSON.parse(localStorage.getItem("stock") || "[]"),
    }
  }
}
</script>

<template>
  <div class="shopping-list">
    <h1>{{ intro }}</h1>
    <Menu />
    <ul>
      <li v-for="(item, index) in stock" :key="index" v-if="item.current < item.target">
        <span>{{ item.name }}: {{ item.target - item.current }}</span>
      </li>
    </ul>
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
</style>
