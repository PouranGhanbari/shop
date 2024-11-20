<template>
  <div>
    <AButton @click="showModal" :data="data">Edit</AButton>
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
        <!-- <AFormItem
          label="Product Id"
          name="id"
          :rules="[{ required: true, message: 'select correct id' }]"
        >
          <AInput v-model:value="formData.id"></AInput>
        </AFormItem> -->
        <!-- -- -->
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

        <!-- ------ -->
      </AForm>
    </AModal>
  </div>
</template>
<script lang="ts" setup>
import { DownOutlined } from "@ant-design/icons-vue";
import { ref, defineProps } from "vue";
import { useProducts } from "@/store/products";

const Products = useProducts();

interface FormData {
  data: {
    id: number;
    title: string;
    productCategory: string;
    price?: number;
    description?: string;
    url?: string;
  };
  //
}
const selectedItem = (item: string) => {
  formData.value.productCategory = item;
};
const { data } = defineProps<FormData>();

const formData = ref<FormData>({
  id: data.id,
  title: data.name,
  productCategory: data.productCategory,
});

const formRef = ref();

const open = ref<boolean>(false);
const confirmLoading = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = async () => {
  try {
    await formRef.value.validate();
    confirmLoading.value = true;
    await Products.editProduct({
      id: formData.value.id,
      name: formData.value.title,
      productCategory: formData.value.productCategory,
    });

    setTimeout(() => {
      confirmLoading.value = false;
      open.value = false;
    }, 1000);
  } catch (error) {
    console.log("error edit product", error);
  }
};
</script>
