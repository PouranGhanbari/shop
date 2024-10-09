<template>
  <a-table :data-source="data" :columns="columns" class="p-8">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span style="color: #1890ff">Name</span>
      </template>
    </template>
    <template
      #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
    >
      <div style="padding: 8px">
        <a-input
          ref="searchInput"
          :placeholder="`Search ${column.dataIndex}`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])"
          @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <a-button
          type="primary"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          <template #icon><SearchOutlined /></template>
          Search
        </a-button>
        <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
          Reset
        </a-button>
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
  </a-table>
</template>
  <script lang="ts" setup>
import { SearchOutlined } from '@ant-design/icons-vue'
import { reactive, ref } from 'vue'
const data = [
  {
    key: '1',
    name: 'John Brown',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  },
  {
    key: '2',
    name: 'Joe Black',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  },
  {
    key: '3',
    name: 'Jim Green',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  },
  {
    key: '4',
    name: 'Jim Red',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  },
  {
    key: '1',
    name: 'John Brown',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  },
  {
    key: '2',
    name: 'Joe Black',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  },
  {
    key: '3',
    name: 'Jim Green',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  },
  {
    key: '4',
    name: 'Jim Red',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  },
  {
    key: '1',
    name: 'John Brown',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  },
  {
    key: '2',
    name: 'Joe Black',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  },
  {
    key: '3',
    name: 'Jim Green',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  },
  {
    key: '4',
    name: 'Jim Red',
    Awards: 'Nobel Prize in Literature',
    BestSellingWork: 'book'
  }
]

const state = reactive({
  searchText: '',
  searchedColumn: ''
})

const searchInput = ref()

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    customFilterDropdown: true,
    onFilter: (value, record) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus()
        }, 100)
      }
    }
  },
  {
    title: 'Awards',
    dataIndex: 'Awards',
    key: 'Awards'
  },
  {
    title: 'BestSellingWork',
    dataIndex: 'BestSellingWork',
    key: 'BestSellingWork',
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.BestSellingWork.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus()
        }, 100)
      }
    }
  }
]

const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm()
  state.searchText = selectedKeys[0]
  state.searchedColumn = dataIndex
}

const handleReset = (clearFilters) => {
  clearFilters({ confirm: true })
  state.searchText = ''
}
</script>
  <style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
  