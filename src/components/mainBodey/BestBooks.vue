<template>
  <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <!-- ----- -->
    <a-card hoverable style="width: 240px">
      <template #cover>
        <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      </template>
      <a-card-meta :title="title">
        <template #description>{{ description }}</template>
      </a-card-meta>
    </a-card>
    <a-card hoverable style="width: 240px">
      <template #cover>
        <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      </template>
      <a-card-meta :title="title">
        <template #description>{{ description }}</template>
      </a-card-meta>
    </a-card>
    <a-card hoverable style="width: 240px">
      <template #cover>
        <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
      </template>
      <a-card-meta :title="title">
        <template #description>{{ description }}</template>
      </a-card-meta>
    </a-card>
    <!-- ------ -->
  </a-carousel>
</template>
<script lang="ts" setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue'

interface DataBook {
  title: string
  description: string
  price?: number
}

const {title, description}=defineProps<DataBook>()


</script>

<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
  