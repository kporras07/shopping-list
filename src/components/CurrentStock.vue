<template>
  <div class="current-stock">
    <h1>{{ intro }}</h1>
    <Menu />

    <ul>
      <li v-for="(item, index) in stock" :key="index">
        <span>{{ item.name }}:</span>
        <input type="number" v-model.number="item.current" @change="updateList" /> out of
        <span>{{ item.target }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Menu from './Menu.vue'
export default {
  name: 'CurrentStock',
  components: {
    Menu
  },
  methods: {
    updateList () {
      localStorage.setItem('stock', JSON.stringify(this.stock))
    }
  },
  data () {
    return {
      intro: 'Manage Current Stock',
      stock: JSON.parse(localStorage.getItem('stock') || '[]')
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
</style>
