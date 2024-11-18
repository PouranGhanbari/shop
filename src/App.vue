<template>
  <div class="main-page">
    <Header />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <!-- <router-link to="/login">Login</router-link> | -->
      <!-- <router-link to="/cart">Cart</router-link> -->
    </nav>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/header/Header.vue";
import Footer from "./components/footer/footer.vue";
import { useAddToCart } from "./store/cart";
import { onMounted } from "vue";

const itemsCart = useAddToCart();

onMounted(() => {
  itemsCart.initial();
});
</script>

<style>
.main-page {
  /* background-color: #eee; */
}
</style>
