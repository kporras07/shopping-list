<template>
  <div class="target-stock">
    <h1>{{ intro }}</h1>
    <Menu />

    <ul>
      <li v-for="(item, index) in stock" :key="index">
        <input type="text" v-model="item.name" @change="updateList" />
        <input type="number" v-model.number="item.target" @change="updateList" />
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
    <form @submit.prevent="addItem">
      <input type="text" v-model="newItemName" placeholder="New item name" />
      <input type="number" v-model.number="newItemTarget" placeholder="Quantity" />
      <button>Add Item</button>
    </form>
  </div>
</template>

<script>
import Menu from './Menu.vue'
export default {
  name: 'TargetStock',
  components: {
    Menu
  },
  data () {
    return {
      intro: 'Manage Target Stock',
      stock: JSON.parse(localStorage.getItem("stock") || "[]"),
      newItemName: "",
      newItemTarget: 1,
    }
  },
  methods: {
    updateList() {
      localStorage.setItem("stock", JSON.stringify(this.stock));
    },
    addItem() {
      this.stock.push({
        name: this.newItemName,
        target: this.newItemTarget,
        current: 0,
      });
      this.newItemName = "";
      this.newItemTarget = 1;
      this.updateList();
    },
    removeItem(index) {
      this.stock.splice(index, 1);
      this.updateList();
    },
  },
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
