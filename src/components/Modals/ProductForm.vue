<template>
  <div>
    <AButton type="primary" @click="showModal">Add Product</AButton>

    <AModal
      v-model:open="open"
      title="Title"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      ok-text="دخیره شود"
      cancel-text="لغو"
    >
      <AForm :model="formData" ref="formRef" layout="vertical">
        <!-- ----- -->
        <AFormItem
          label="Product name"
          name="title"
          :rules="[{ required: true, message: 'Please input the product name!' }]"
        >
          <AInput
            v-model:value="formData.title"
            placeholder="Enter product name"
          ></AInput>
        </AFormItem>
        <!-- -- -->

        <ADropdown v-model:value="formData.productCategory">
          <a class="ant-dropdown-link">
            Product Category
            <DownOutlined />
          </a>

          <template #overlay>
            <AMenu>
              <!-- @click="selectedItem('Albume')" -->
              <AMenuItem key="1" @click="selectedItem('')"> "" </AMenuItem>
              <AMenuItem key="2" @click="selectedItem('Albume')"> Albume </AMenuItem>
              <AMenuItem key="3" @click="selectedItem('Chassis')">Chassis </AMenuItem>
              <AMenuItem key="4" @click="selectedItem('Frame')"> Frame </AMenuItem>
              <AMenuItem key="5" @click="selectedItem('Service')"> Service </AMenuItem>
              <AMenuItem key="6" @click="selectedItem('other')"> other </AMenuItem>
            </AMenu>
          </template>
        </ADropdown>
        <p>drop down: {{ formData.productCategory }}</p>
        <!-- -- -->

        <!-- <AFormItem
          label="Product peice"
          name="price"
          :rules="[{ required: true, message: 'Please input the product price!' }]"
        >
          <AInput v-model:value="formData.price" placeholder="Enter product price"></AInput>
        </AFormItem> -->
        <!-- -- -->
        <!-- <AFormItem
          label="Product description"
          name="description"
          :rules="[{ required: true, message: 'Please input the product description!' }]"
        >
          <AInput
            v-model:value="formData.description"
            placeholder="Enter product description"
          ></AInput>
        </AFormItem> -->
        <!-- ------ -->
      </AForm>
    </AModal>
  </div>
</template>
<script lang="ts" setup>
import { DownOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";
import { useProducts } from "@/store/products";
const Products = useProducts();

interface FormData {
  title: string;
  productCategory: string;
  price?: number;
  description?: string;
  url?: string;
}

const formData = ref<FormData>({
  title: "",
  productCategory: "",
});

const formRef = ref();

const open = ref<boolean>(false);
const confirmLoading = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const selectedItem = (item: string) => {
  formData.value.productCategory = item;
};

const handleOk = async () => {
  try {
    await formRef.value.validate();
    confirmLoading.value = true;
    console.log("pc", formData.value);
    await Products.addProduct({
      name: formData.value.title,
      productCategory: formData.value.productCategory,
    });
    setTimeout(() => {
      confirmLoading.value = false;
      open.value = false;

      //   ---
      //   formData.value.title = ''
      //   formData.value.price = 0
      //   formData.value.description = ''
    }, 2000);
  } catch (error) {
    console.log("this is error", error);
  }
};
</script>
