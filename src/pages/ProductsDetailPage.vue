<template>
  <div v-if="product" class="img-wrap">
    <img :src="product.imageName" />
  </div>
  <div v-if="product" class="product-details">
    <h1>{{ product.name }}</h1>
    <h3 class="price">{{ product.price }}</h3>
    <button class="add-to-cart">Add to cart</button>
  </div>
  <div v-else>
    <!-- Handle the case when product is undefined or not found -->
    <p>Product not found.</p>
  </div>
</template>

<script>
import { products } from "../temp-data";

console.log("products",products);

// console.log("this.$route.params.productId",this.$route.params.productId);

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: products.find(
        (product) => product.id === this.$route.params.productId
      ),
    };
  },
};
</script>
