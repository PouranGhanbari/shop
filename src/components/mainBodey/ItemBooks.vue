<template>
  <a-card hoverable style="width:13rem">
    <template #cover>
      <img alt="example" src="@/assets/img/book.jpg" />
    </template>
    <!-- --- -->
    <template #actions>
      <StarOutlined key="star" />

      <ShoppingCartOutlined key="cart" />

      <ellipsis-outlined key="ellipsis" />
    </template>
    <!-- --- -->
    <a-card-meta :title="title" :description="description">
      <div>price lo</div>
      <!-- <template #avatar>
        <a-avatar src="https://joeschmoe.io/api/v1/random" />
      </template> -->
    </a-card-meta>
  </a-card>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import {
  ShoppingCartOutlined,
  EllipsisOutlined,
  StarOutlined,
} from "@ant-design/icons-vue";

interface DataBook {
  title: string;
  description: string;
  price?: number;
}

const { title, description } = defineProps<DataBook>();
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
margin: 5px 0px;}
</style>