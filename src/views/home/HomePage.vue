<template>
  <div>
    <p>this is home page</p>
    <!-- <test></test> -->
    <div class="">
      <div class="home">
        <div class="menu-right">
          <MenuFilter />
        </div>
        <!-- --- -->
        <div class="main-mid">
          <div class="poster">
            <img src="@/assets/img/poster-library.jpg" alt="poster" class="pic-poster" />
            <div class="par-btn">
              <h1 class="text-white text-4xl">
                A book is a gift you can <br />
                open again and again
              </h1>
              <a-button class="claim-btn p-8">Claim Discount</a-button>
              <a-button class="open-btn p-8">Open Flash Sale</a-button>
            </div>
          </div>
          <!-- ----- -->
          <div class="cart-items ">
            <ItemBooks v-for="(item, index) in dataBooks" :title="dataBooks[index].title"
              :description="dataBooks[index].description" :key="index" class="items-cart" />
          </div>
          <!-- ---- -->
          <BestBooks :books="bestBook" />
          <BestBooks :books="giftBook" />
          <!-- ---- -->
          <TopWriters :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ItemBooks from "@/components/mainBodey/ItemBooks.vue";
import TopWriters from "@/components/mainBodey/TopWriters.vue";
import BestBooks from "@/components/mainBodey/BestBooks.vue";
import MenuFilter from "@/components/Menu/MenuFilter.vue";
// import test from "@/views/test.vue";

const dataBooks = [
  { title: "book one", description: "this is a book", price: 12 },
  { title: "book two", description: "this is a book", price: 41 },
  { title: "book three", description: "this is a book", price: 87 },
  { title: "book four", description: "this is a book", price: 52 },
  { title: "book four", description: "this is a book", price: 52 },
  { title: "book four", description: "this is a book", price: 52 },
  { title: "book four", description: "this is a book", price: 52 },
  { title: "book four", description: "this is a book", price: 52 },
  { title: "book four", description: "this is a book", price: 52 },
];


const giftBook = {
  title: "gift book",
  url: [
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
  ],
};

const bestBook = {
  title: "best book",
  url: [
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
    "book-one.jpg",
  ],
};

const data = [
  {
    key: "1",
    name: "John Brown",
    Awards: "Nobel Prize in Literature",
    BestSellingWork: "book",
  },
  {
    key: "2",
    name: "Joe Black",
    Awards: "Nobel Prize in Literature",
    BestSellingWork: "book",
  },
  {
    key: "3",
    name: "Jim Green",
    Awards: "Nobel Prize in Literature",
    BestSellingWork: "book",
  },
  {
    key: "4",
    name: "Jim Red",
    Awards: "Nobel Prize in Literature",
    BestSellingWork: "book",
  },
  {
    key: "1",
    name: "John Brown",
    Awards: "Nobel Prize in Literature",
    BestSellingWork: "book",
  },
  {
    key: "2",
    name: "Joe Black",
    Awards: "Nobel Prize in Literature",
    BestSellingWork: "book",
  },
  {
    key: "3",
    name: "Jim Green",
    Awards: "Nobel Prize in Literature",
    BestSellingWork: "book",
  },
  {
    key: "4",
    name: "Jim Red",
    Awards: "Nobel Prize in Literature",
    BestSellingWork: "book",
  },
  {
    key: "1",
    name: "John Brown",
    Awards: "Nobel Prize in Literature",
    BestSellingWork: "book",
  }
];
</script>

<style>
.poster {
  position: relative;
  justify-content: center;
}

.par-btn {
  position: absolute;
  text-align: center;
  top: 35%;
}

.claim-btn {
  background-color: #bbf7d0;
  border: none;
}

.open-btn,
.claim-btn {
  line-height: 0;
  margin: 0.5rem;
}

.items-cart {
  margin: 1rem;
}

.home {
  width: 100%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
}

.menu-right {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e7e7e7;


}

.main-mid {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 0px 25px;
}

.poster {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.poster img {
  border-radius: 1rem;
  width: 100%;
  height: 25rem;
}

.cart-items {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}

.items-cart {}
</style>
