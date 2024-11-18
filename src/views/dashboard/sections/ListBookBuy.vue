<template>
  <a-list item-layout="horizontal" :data-source="listBook" class="horizontal">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta>
          <template #title>
            <div class="list">
              <a href="https://www.antdv.com/">{{ item.title }}</a>
              <p>price:{{ item.price }}</p>
              <p>count:{{ item.count }}</p>
              <p>address:{{ item.address }}</p>
            </div>

          </template>
          <template #avatar>
            <AAvatar :src="`src/assets/img/${item.url}`" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts" setup>
import { defineProps, ref } from 'vue';

interface DataItem {
  listBook: [];
}
const { listBook } = defineProps<DataItem>();


</script>

<style>
.list {
  display: flex;
  justify-content: space-between;
}
.horizontal{
  margin-top: 10px;
  width: 100%;
  box-shadow: 0px 0px 5px 0px #d7d7d7;
  padding: 10px;
  border-radius: 15px;
}
</style>