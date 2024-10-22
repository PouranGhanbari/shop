<template>
  <a-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="inline"
    :items="items"
    @click="handleClick"
  >
  </a-menu>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h } from "vue";
import {
  SlidersOutlined,
  TagOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps, ItemType } from "ant-design-vue";
import { Checkbox } from 'ant-design-vue';

const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: "group"
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}
const items: ItemType[] = reactive([
  getItem("Filter", "sub1", () => h(SlidersOutlined), [
    getItem(
      "Category",
      "g1",
      null,
      [
        getItem(h('li', [h(Checkbox), ' Adventure']), "1"),
        getItem(h('li', [h(Checkbox), "Fantasy"]), "2"),
        getItem(h('li', [h(Checkbox), "Science fiction"]), "3"),
        getItem(h('li', [h(Checkbox), "Romance"]), "4"),
      ],
      "group"
    ),
  ]),

  getItem("Location", "sub2", () => h(EnvironmentOutlined), [
    getItem(h('li', [h(Checkbox), "a"]), "5"),
    getItem(h('li', [h(Checkbox), "b"]), "6"),
  ]),

  { type: "divider" },

  getItem("Price", "sub4", () => h(TagOutlined), [
    getItem(h('li', [h(Checkbox), "a"]), "9"),
    getItem(h('li', [h(Checkbox), "b"]), "10"),
  ])
]);

const handleClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);
};

watch(openKeys, (val) => {
  console.log("openKeys", val);
});
</script>


<style>
ul li{
    list-style: none;
}
</style>