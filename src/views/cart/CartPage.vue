<template>
  <div class="cart">
    <div class="items-cart">
      <div dir="rtl">
        <h1>سبد خرید شما</h1>
        <p>نعداد محصولات: {{ getProducts.length }}</p>
      </div>

      <!-- --- -->
      <div v-for="(product, index) in getProducts" :key="index" class="item-product">
        <div>
          <img src="@/assets/img/book.jpg" alt="pic-product" class="pic-product" />
        </div>
        <!-- --- -->
        <div class="description-product">
          <p class="title">{{ product.title }}</p>
          <p class="description">این یک کتاب است</p>
          <p class="send">
            <span>ارسال رایگان</span>
            <CarOutlined />
          </p>
        </div>

        <div class="count">
          <div>
            <ABadge :count="product.count">
              <AAvatar shape="square" size="large" />
            </ABadge>
            <AButtonGroup>
              <AButton @click="itemsCart.decrement(product)">
                <MinusOutlined />
                <!-- <DeleteOutlined /> -->
              </AButton>
              <!-- --------------------- -->
              <AButton @click="itemsCart.addToCart(product)">
                <PlusOutlined />
              </AButton>
            </AButtonGroup>
          </div>
          <!-- --- -->
        </div>
      </div>
    </div>
    <!-- --- -->
    <div class="shopping-cart" dir="rtl">
      <p>جمع خرید:</p>
      <p>مقدار تخفیف:</p>
      <AButton> تایید و تکمیل خرید </AButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAddToCart, productsKey } from "@/store/cart";
import { ref } from "vue";
import {
  MinusOutlined,
  PlusOutlined,
  DeleteOutlined,
  CarOutlined,
} from "@ant-design/icons-vue";
const itemsCart = useAddToCart();

const getProducts = ref();
getProducts.value = itemsCart.addProducts;

// ----

// -------
// function deleteProduct(product) {
//   getProducts.value = getProducts.value.filter((item) => {
//     // if (element.id === product.id) {
//     // return getProducts.value.splice(getProducts.value.indexOf(element), 1);
//     // }
//     return item.id !== product.id;
//   });
//   itemsCart.saveProduct(getProducts.value);

// }
// -----
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: row-reverse;
}
.shopping-cart {
  border: 1px solid;
  height: 12rem;
  padding: 2rem;
  border-radius: 10px;
}
.items-cart {
  width: 75%;
}

.item-product {
  display: flex;
  flex-direction: row-reverse;
  margin: 5px;
  border: 1px solid;
  padding: 0.5rem;
  border-radius: 10px;
}
.pic-product {
  width: 100px;
}

:deep(.ant-btn-group) {
  padding: 1rem;
}
</style>
>
