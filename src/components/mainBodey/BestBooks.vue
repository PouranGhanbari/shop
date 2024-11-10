<template>
  <div>
    <h1 class="title">{{ books.title }}</h1>
    <a-carousel arrows :slidesToShow="4" class="carousel-m">
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

      <div class="book-card" v-for="(item, index) in books.url" :key="index">
        <a-card hoverable style="width: 240px; height: 13rem">
          <template #cover>
            <img :alt="item" :src="`src/assets/img/${item}`" class="pic-carousel" />
          </template>
        </a-card>
      </div>
    </a-carousel>
  </div>
</template>
<script lang="ts" setup>
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import { defineProps } from 'vue';
interface Props {
  books: {};
}
const { books } = defineProps<Props>();
</script>
<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  line-height: 160px;
  overflow: hidden;
  height: 13rem;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #528570;
  transition: ease all 0.3s;
  opacity: 1;
  z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #000000;
  opacity: 1;
  font-size: 35px;
}

:deep(.slick-slide h3) {
  color: #fff;
}
:deep(.slick-prev) {
  margin-left: -68px;;
}

:deep(.ant-card-hoverable) {
  border: none !important;
}

:deep(.ant-card-hoverable:hover) {
  border: none !important;
  box-shadow: none !important;
}

.title {
  margin: 20px 0px;
}

.pic-carousel {
  width: 80%;
  height: 13rem;
  border-radius: 10px !important;
}
.carousel-m{
  width: 65rem;
 }
@media screen and ( max-width:1360px) {
 .carousel-m{
  width: 55rem;
 }
}

@media screen and ( max-width:720px) {
 .carousel-m{
  display:none;
 }
}

</style>
