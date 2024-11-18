<template>
  <div class="write">
    <!-- <h1 class="title">Top Writer:</h1> -->
    <ATable :data-source="items" :columns="columns">
      <template #headerCell="{ column }">
          <span>

            {{ column.key }}
          </span>
      </template>
      <template
        #customFilterDropdown="{
          setSelectedKeys,
          selectedKeys,
          confirm,
          clearFilters,
          column,
        }"
      >
        <div style="padding: 8px">
          <AInput
            ref="searchInput"
            :placeholder="`Search ${column.dataIndex}`"
            :value="selectedKeys[0]"
            style="width: 188px; margin-bottom: 8px; display: block"
            @change="(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])"
            @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
          />
          <AButton
            type="primary"
            size="small"
            style="width: 90px; margin-right: 8px"
            @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
          >
            <template #icon>
              <SearchOutlined />
            </template>
            Search
          </AButton>
          <AButton size="small" style="width: 90px" @click="handleReset(clearFilters)">
            Reset
          </AButton>
        </div>
      </template>
      <template #customFilterIcon="{ filtered }">
        <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
      </template>
      <template #bodyCell="{ text, column }">
        <span v-if="state.searchText && state.searchedColumn === column.dataIndex">
          <template
            v-for="(fragment, i) in text
              .toString()
              .split(new RegExp(`(?<=${state.searchText})|(?=${state.searchText})`, 'i'))"
          >
            <mark
              v-if="fragment.toLowerCase() === state.searchText.toLowerCase()"
              :key="i"
              class="highlight"
            >
              {{ fragment }}
            </mark>
            <template v-else>{{ fragment }}</template>
          </template>
        </span>
      </template>
    </ATable>
  </div>
</template>
<script lang="ts" setup>
import { SearchOutlined } from "@ant-design/icons-vue";
import { reactive, ref, defineProps, computed } from "vue";

interface dataTable {
  items: [];
  headers: [];
}

const { items, headers } = defineProps<dataTable>();

const state = reactive({
  searchText: "",
  searchedColumn: "",
});

const searchInput = ref();

const columns = computed(() =>
  headers.map((k) => ({
    ...k,
    dataIndex: k.key,
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.name.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  }))
);

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     customFilterDropdown: true,
//     onFilter: (value, record) =>
//       record.name.toString().toLowerCase().includes(value.toLowerCase()),
//     onFilterDropdownOpenChange: (visible) => {
//       if (visible) {
//         setTimeout(() => {
//           searchInput.value.focus();
//         }, 100);
//       }
//     },
//   },
//   {
//     title: "Awards",
//     dataIndex: "Awards",
//     key: "Awards",
//   },
//   {
//     title: "BestSellingWork",
//     dataIndex: "BestSellingWork",
//     key: "BestSellingWork",
//     customFilterDropdown: true,
//     onFilter: (value, record) =>
//       record.BestSellingWork.toString().toLowerCase().includes(value.toLowerCase()),
//     onFilterDropdownOpenChange: (visible) => {
//       if (visible) {
//         setTimeout(() => {
//           searchInput.value.focus();
//         }, 100);
//       }
//     },
//   },
// ];

const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  state.searchText = selectedKeys[0];
  state.searchedColumn = dataIndex;
};

const handleReset = (clearFilters) => {
  clearFilters({ confirm: true });
  state.searchText = "";
};

// ------
</script>
<style>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.ant-table-thead > tr > .ant-table-cell {
  background-color: #bbf7d0 !important;
}

.title {
  margin-bottom: 15px;
}

.write {
  margin-top: 50px;
  width: 100%;
}

:deep (.ant-table-wrapper) {
  width: 100%;
}
</style>
