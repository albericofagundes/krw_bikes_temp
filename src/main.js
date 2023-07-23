import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductsDetailPage from "./pages/ProductsDetailPage.vue";

createApp(App)
  .mount("#app")
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/cart",
          component: ShoppingCartPage,
        },
        {
          path: "/",
          component: ProductsPage,
        },
        {
          path: "/products/:productsId",
          component: ProductsDetailPage,
        },
      ],
    })
  );
