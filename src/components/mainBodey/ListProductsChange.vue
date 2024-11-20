<template>
  <div>
    <ProductForm></ProductForm>

    <!-- <EditProductForm></EditProductForm> -->
    <!-- --- -->
    <AList item-layout="horizontal" :data-source="Products.Product?.data">
      <!-- {{ console.log("check product", Products.Product?.data) }} -->
      <template #renderItem="{ item }">
        <AListItem>
          <!--  -->
          <template #actions>
            <a key="list-loadmore-edit"
              ><EditProductForm :data="item"></EditProductForm
            ></a>
            <a key="list-loadmore-delete"><VerifyDelete :id="item.id"></VerifyDelete></a>
            <!-- -- -->
            <!-- <a key="list-loadmore-delete" @click="Products.deleteProduct(item)">Delete</a> -->
          </template>
          <AListItemMeta :description="'This is a Book'">
            <!-- -- -->
            <template #title>
              <a href="#">{{ item.name }}</a>
            </template>
            <!--  -->
            <template #avatar>
              <a-avatar src="@/assets/img/pic-account.jpg" />
            </template>
          </AListItemMeta>
        </AListItem>
      </template>
    </AList>
  </div>
</template>

<script lang="ts" setup>
import ProductForm from "@/components/Modals/ProductForm.vue";
import { useProducts } from "@/store/products";
import EditProductForm from "../Modals/EditProductForm.vue";
import VerifyDelete from "../Modals/VerifyDelete.vue";

const Products = useProducts();

const qw = (item: any) => {
  console.log("sssssss", item);
};
</script>

<style></style>
