<template>
  <div>
    <div class="header">
      <div class="icons flex justify-between flex-row">
        <router-view>
          <router-link to="/login">
            <AButton class="icon-login ics text-lg" v-show="!isToken">
              <UserOutlined />
            </AButton>
          </router-link>
        </router-view>
        <!-- ------------------------------------------------ -->

        <a class="icon-account ics text-lg" v-show="!!isToken">
          <img src="@/assets/img/pic-account.jpg" alt="pic-account" />
        </a>
        <!--------  -->
        <AButton
          class="icon-login ics text-lg"
          @click="userStore.logout()"
          v-show="!!isToken"
        >
          <LogoutOutlined />
        </AButton>
        <!-- --- -->
        <router-view>
          <router-link to="/dashboard">
            <AButton class="icon-login ics text-lg" v-show="!!isToken">
              <AppstoreOutlined />
            </AButton>
          </router-link>
        </router-view>
        <!-- --------------------------------------------------- -->
        <AButton @click="openNotification" class="icon-notif ics text-lg"
          ><BellOutlined
        /></AButton>
        <!-- -- -->
        <AButton class="icon-chat ics text-lg"><MessageOutlined /></AButton>
        <!-- --- -->
        <router-view>
          <router-link to="/cart">
            <AButton class="icon-cart ics text-lg"><ShoppingCartOutlined v-show="!!isToken" /></AButton
          ></router-link>
        </router-view>
      </div>
      <!-- - -->
      <div class="search pt-5">
        <a-space direction="vertical">
          <AInput-search
            v-model:value="value"
            placeholder="Enter name's bood"
            enter-button
            @search="onSearch"
            class="w-[35rem]"
          />
        </a-space>
      </div>
      <div class="icon-bookstore">
        <img src="@/assets/img/logo.png" alt="logo" class="logo-site" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { notification } from "ant-design-vue";
import {
  BellOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MessageOutlined,
  LogoutOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import { useUserStore,  isToken } from "@/store/user";

// ---
const userStore = useUserStore();

const openNotification = () => {
  notification.open({
    message: "Your notifications",
    description: `You don't have any message`,
    style: {
      width: "600px",
      marginLeft: `${335 - 600}px`,
    },
    class: "notification-custom-class",
  });
};

const value = ref<string>("");

const onSearch = (searchValue: string) => {
  console.log("use value", searchValue);
  console.log("or use this.value", value.value);
};
</script>

<style>
.header {
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
}
.icons {
  flex-direction: row-reverse;
}
.icon-account {
  width: 2rem;
  margin-top: 0.5rem;
}
.icon-account img,
.icon-bookstore img {
  border-radius: 50%;
}
.icon-bookstore img {
  border-radius: 25%;
}
.ics {
  border: none;
}
.ics:focus {
  border: none;
  background: none;
}
.icon-bookstore {
  width: 5rem;
}

.ant-input-search-button {
  background-color: #4ade80 !important;
}
</style>
