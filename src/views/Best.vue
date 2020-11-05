<template>
  <div class=" flex flex-col h-screen justify-between text-center">
    <div class="bg-blue-200 p-10">
      <div class="wrapper">
        <h1 class="text-center">Best Albums</h1>
      </div>
      <ProductList :products="products" />
    </div>
    <footer class="bg-dark text-white p-4">
      <a href="https://github.com/dbowie83/creative3">View on Github</a>
    </footer>
  </div>
</template>

<script>
  import ProductList from "../components/ProductList.vue"
  export default {
    name: 'Home',
    components: {
      ProductList
    },
    data() {
      return {
        searchText: '',
      }
    },
    computed: {
      products() {
        return this.$root.$data.products.filter(each => each.id == 20 || each.id == 1 || each.id == 21 || each.id ==
          8 || each.id == 13 || each.id == 14 || each.id == 15 || each.id == 16 || each.id == 18);
      }
    },
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>