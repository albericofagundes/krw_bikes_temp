<template>
  <h1>Produtos</h1>
  <div class="grid-wrap">
    <div v-for="product in products"></div>
  </div>
</template>

<script>
import { products } from "../temp-data";
export default {
  name: "ProductsPage",
};
</script>
