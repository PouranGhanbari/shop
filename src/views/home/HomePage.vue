<template >
  <div>
    <p>this is home page</p>
    <div class="poster flex">
      <img src="@/assets/img/poster-library.jpg" alt="poster" class="h-auto pic-poster" />

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
    <div class="cart-items flex justify-center flex-wrap p-8">
      <ItemBooks
        v-for="(item, index) in dataBooks"
        :title="dataBooks[index].title"
        :description="dataBooks[index].description"
        class="items-cart"
      />
    </div>
    <!-- ---- -->
    <BestBooks />
    <!-- ---- -->
    <TopWriters />
  </div>
</template>

<script lang="ts" setup>
import ItemBooks from '@/components/mainBodey/ItemBooks.vue'
import TopWriters from '@/components/mainBodey/TopWriters.vue'
import BestBooks from '@/components/mainBodey/BestBooks.vue'

const dataBooks = [
  { title: 'book one', description: 'this is a book', price: 12 },
  { title: 'book two', description: 'this is a book', price: 41 },
  { title: 'book three', description: 'this is a book', price: 87 },
  { title: 'book four', description: 'this is a book', price: 52 },
  { title: 'book four', description: 'this is a book', price: 52 },
  { title: 'book four', description: 'this is a book', price: 52 },
  { title: 'book four', description: 'this is a book', price: 52 },
  { title: 'book four', description: 'this is a book', price: 52 },
  { title: 'book four', description: 'this is a book', price: 52 }
]
</script>

<style>
.poster {
  position: relative;
  justify-content: center;
}
.poster img {
  border-radius: 1rem;
  width: 60%;
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
</style>