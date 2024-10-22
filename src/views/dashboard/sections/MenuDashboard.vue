<template>
  <div style="width: 256px">
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      :items="items"
    >
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { reactive, h } from "vue";
import {
  AppstoreOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  ContactsOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

const state = reactive({
  selectedKeys: ["1"],
  openKeys: ["1"],
  preOpenKeys: ["1"],
});

const items = reactive([
  {
    key: "1",
    icon: () => h(AppstoreOutlined),
    label: "Dashboard",
    title: "Dashboard",
  },
  {
    key: "2",
    icon: () => h(UserOutlined),
    label: "Your Profile",
    title: "Your Profile",
  },
  {
    key: "3",
    icon: () => h(ShoppingCartOutlined),
    label: "Your Cart",
    title: "Your Cart",
  },
  {
    key: "4",
    icon: () => h(BarChartOutlined),
    label: "Analytics",
    title: "Analytics",
  },
  {
    key: "5",
    icon: () => h(ContactsOutlined),
    label: "Contacts",
    title: "Contacts",
  },
  {
    key: "6",
    icon: () => h(MailOutlined),
    label: "Mail",
    title: "Mail",
  },
  {
    key: "7",
    icon: () => h(SettingOutlined),
    label: "Settings",
    title: "Settings",
  },
]);
</script>
