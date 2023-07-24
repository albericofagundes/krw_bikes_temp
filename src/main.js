import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { createRouter, createWebHistory } from "vue-router";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductsDetailPage from "./pages/ProductsDetailPage.vue";

const routes = [
  {
    path: "/cart",
    component: ShoppingCartPage,
  },
  {
    path: "/",
    component: ProductsPage,
  },
  // {
  //   path: "/products/:productsId",
  //   component: ProductsDetailPage,
  // },
  {
    path: "/products",
    component: ProductsDetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const app = createApp(App);

app.use(router); // Use the router plugin

app.mount("#app");
