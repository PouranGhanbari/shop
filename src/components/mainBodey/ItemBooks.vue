<template>
  <a-card hoverable style="width: 13rem">
    <template #cover>
      <img alt="example" src="@/assets/img/book.jpg" />
    </template>
    <!-- --- -->
    <template #actions>
      <StarOutlined key="star" />

      <ShoppingCartOutlined key="cart" @click="selectProdyct.addToCart(data)" />

      <ellipsis-outlined key="ellipsis" />
    </template>
    <!-- --- -->
    <a-card-meta :data="data" :title="data.name" dir="rtl">
      <template #description>
        <div>
          این یک کتاب است
          <br />
          <span class="price">
            <span class="bold-price">قیمت:</span>
            {{ price }}
            234 تومان</span
          >
        </div>
      </template>
    </a-card-meta>
  </a-card>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import {
  ShoppingCartOutlined,
  EllipsisOutlined,
  StarOutlined,
} from "@ant-design/icons-vue";
import { useAddToCart } from "@/store/cart";

const selectProdyct = useAddToCart();

interface DataBook {
  data: {};
  // title: string;
  // description: string;
  // price?: number;
}

const { data } = defineProps<DataBook>();

function checkClick() {
  console.log("clicked", data.name);
}
</script>

<style scoped>
:deep(.ant-card-cover) {
  padding: 20px;
}

:deep(.ant-card-body) {
  padding: 0px 20px;
}

:deep(.ant-card-meta-description) {
  padding-bottom: 10px;
}

:deep(.ant-card-actions li) {
  margin: 5px 0px;
}

.price {
  color: black;
}
.bold-price {
  font-size: 16px;
  font-weight: bold;
}
</style>
