import { createRouter, createWebHistory } from "vue-router";
import ItemList from "../components/Items.vue";
import Panier from "../views/Panier.vue";
import Desserts from "../views/Dessert.vue";

const routes = [
  {
    path: "/",
    component: ItemList,
    props: (route) => ({
      cart: route.meta.cart,
      addToCart: route.meta.addToCart,
    }),
  },
  //Quelle est la meilleur manière d'utiliser meta ?
  //meta: {
  // cart: cart,
  // addToCart: addToCart
  {
    path: "/panier",
    component: Panier,
    props: (route) => ({
      cart: route.meta.cart,
      removeFromCart: route.meta.removeFromCart,
    }),
  },
  {
    path: "/desserts",
    component: Desserts,
    props: (route) => ({
      cart: route.meta.cart,
      addToCart: route.meta.addToCart,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
