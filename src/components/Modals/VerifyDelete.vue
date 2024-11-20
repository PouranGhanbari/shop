<template>
  <div>
    <AButton @click="showModal" :id="id">Delete</AButton>

    <AModal
      title="Are you sure?"
      v-model:open="open"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      ok-text="حذف شود"
      cancel-text="لغو"
    >
      <p>Are sure you want to delete this product?</p>
    </AModal>
  </div>
</template>

<script lang="ts" setup>
// import { DownOutlined } from "@ant-design/icons-vue";
import { ref, defineProps } from "vue";
import { useProducts } from "@/store/products";

const Products = useProducts();

const open = ref<boolean>(false);
const confirmLoading = ref<boolean>(false);
// const verify= ref<boolean>(false)
const showModal = () => {
  open.value = true;
};

interface FormData {
  id: number;
}

const { id } = defineProps<FormData>();

const formData = ref<FormData>({
  id: id,
});

const handleOk = async () => {
  console.log("id in verify", formData.value.id);

  try {
    confirmLoading.value = true;
    await Products.deleteProduct(formData.value);

    setTimeout(() => {
      confirmLoading.value = false;
      open.value = false;
    }, 1000);
  } catch (error) {
    console.log("error delete product", error);
  }
};
</script>
