<template>
  <div class="doshboard">
    <div class="menu">
      <MenuDashboard />
    </div>
    <div class="doshboard-item1">
     
      <div class="Discount"> <Discount /></div>
      <BuyReport />
      <ListBookBuy :listBook="items" />
    </div>


  </div>
</template>

<script lang="ts" setup>
import Discount from './sections/Discount.vue';
import MenuDashboard from './sections/MenuDashboard.vue';
import BuyReport from './sections/BuyReport.vue';
import ListBookBuy from './sections/ListBookBuy.vue';


const items = [
  {
    id: 1,
    title: 'book name',
    price: 37387,
    url: 'pic-account.jpg',
    count: 2,
    address: 'esfahan-bahonar'
  },
  {
    id: 2,
    title: 'book name ',
    price: 37387,
    url: 'pic-account.jpg',
    count: 5,
    address: 'esfahan-bahonar'
  },
  {
    id: 3,
    title: 'book name',
    price: 37387,
    url: 'pic-account.jpg',
    count: 1,
    address: 'esfahan-bahonar'
  },
  {
    id: 4,
    title: 'book name',
    price: 37387,
    url: 'pic-account.jpg',
    count: 1,
    address: 'esfahan-bahonar'
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
  margin-bottom: 30px ;}

.Discount{
  margin-right: 30px;
}
.menu{
  display: flex;
}
@media screen and ( max-width:1024px) {
 
}

@media screen and ( max-width:768px) {
.menu{
  display: none;
}

}
</style>