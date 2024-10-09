<template>
  <a-card hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
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
import { ShoppingCartOutlined, EllipsisOutlined, StarOutlined } from '@ant-design/icons-vue'

interface DataBook {
  title: string
  description: string
  price?: number
}

const {title, description}=defineProps<DataBook>()
</script>


  