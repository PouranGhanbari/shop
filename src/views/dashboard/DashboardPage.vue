<template>
  <div class="doshboard">
    <div class="menu">
      <MenuDashboard />
    </div>
    <div class="doshboard-item1">
      <div class="Discount"><Discount /></div>
      <BuyReport />
      <Wallet />
      <BasicTable :items="items" :headers="headers" />
      <!-- ---- -->
      <ListProductsChange style="width:100%" /> 
      <!-- <ListProductsChange style="width:100%" > </ListProductsChange> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import Discount from "./sections/Discount.vue";
import MenuDashboard from "./sections/MenuDashboard.vue";
import BuyReport from "./sections/BuyReport.vue";
import BasicTable from "@/components/mainBodey/BasicTable.vue";
import Wallet from "./sections/Wallet.vue";
import ListProductsChange from "@/components/mainBodey/ListProductsChange.vue";

const items = [
  {
    id: 1,
    title: "book name",
    price: 3,
    url: "pic-account.jpg",
    count: 2,
    address: "esfahan-bahonar",
    total: 0,
  },
  {
    id: 2,
    title: "book name ",
    price: 3,
    url: "pic-account.jpg",
    count: 5,
    address: "esfahan-bahonar",
    total: 0,
  },
  {
    id: 3,
    title: "book name",
    price: 3,
    url: "pic-account.jpg",
    count: 1,
    address: "esfahan-bahonar",
    total: 0,
  },
  {
    id: 4,
    title: "book name",
    price: 3,
    url: "pic-account.jpg",
    count: 1,
    address: "esfahan-bahonar",
    total: 0,
  },
];

(function calculateTotals() {
  items.forEach((item) => {
    item.total = item.price * item.count;
  });
})();

const headers = [
  {
    key: "title",
  },
  {
    key: "price",
  },
  {
    key: "count",
  },
  {
    key: "address",
  },
  {
    key: "total",
  },
];
</script>
<style>
.doshboard {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
}

.doshboard-item1 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 35px;
  border-left: 1px solid #e9e9e9;
  margin-bottom: 30px;
}

.Discount {
  margin-right: 30px;
}
.menu {
  display: flex;
}
@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 768px) {
  .menu {
    display: none;
  }
}
</style>
