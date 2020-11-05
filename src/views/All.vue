<template>
  <div class=" flex flex-col h-screen justify-between text-center ">
    <div class="bg-blue-200 p-10">
      <div class="flex justify-center">
        <h1>All albums</h1>
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
    name: 'All',
    components: {
      ProductList
    },
    data() {
      return {
        country: '',
      }
    },
    computed: {
      products() {
        return this.$root.$data.products;
      }
    },
  }
</script>