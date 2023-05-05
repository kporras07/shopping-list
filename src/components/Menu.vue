<template>
    <div class="menu">
      <h2>Menu</h2>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/target-stock">Manage Target Stock</router-link>
        </li>
        <li>
          <router-link to="/current-stock">Manage Current Stock</router-link>
        </li>
        <li>
          <router-link to="/shopping-list">Get Shopping List</router-link>
        </li>
      </ul>
    </div>
  </template>

  <style>
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
  