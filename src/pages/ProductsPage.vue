<template>
  <h1>Produtos</h1>
  <div class="grid-wrap">
    <div
      class="product-item"
      v-for="product in products"
      :key="product.id"
    >
      <img :src="product.imageName" />
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <button>Ver Detalhes</button>
    </div>
  </div>
</template>

<script>
import { products } from '../temp-data';

export default {
  name: "ProductsPage",
  data() {
    return {
      products,
    }
  }
}
</script>