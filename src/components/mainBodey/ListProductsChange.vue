<template>
  <div>
    <AList>
      <template #renderItem>
        <AListItem>
          <template #actions>
            <a href="#" key="list-loadmore-edit">Edit</a>
            <a href="#" key="list-loadmore-delete">Delete</a>
          </template>
        </AListItem>
      </template>
    </AList>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
