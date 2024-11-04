<template>
  <div class="login">
    <p>this is login</p>
    <div class="main-login bg-emerald-100">
      <div class="pic-login bg-emerald-50">
        <img src="@/assets/img/login.jpg" alt="pic-login" class="pic" />
        <h1 class="text-2xl text-center mt-[1rem]">Bookstore Bab</h1>
        <p class="text-sm text-center">
          To access all site features, please log in to your account. <br />
          Register if you do not have an account
        </p>
      </div>
      <!-- --------------------- -->
      <div class="form-login text-center bg-slate-100">
        <h1 class="text-2xl"><span class="text-emerald-400">LogIn</span>Page</h1>
        <AForm
          :model="formState"
          name="normal_login"
          class="login-form justify-center p-2"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <!-- @submit.prevent="handleLogin({userName:formState.userName, password:formState.password})" -->
          <div class="item">
            <!-- ---- -->
            <AFormItem
              class="label-item"
              label="Username"
              name="userName"
              :rules="[{ required: true, message: 'Please input your username!' }]"
            >
            </AFormItem>
            <!-- - -->
            <AFormItem class="input-item">
              <AInput v-model:value="formState.userName" class="w-80">
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
                </template>
              </AInput>
            </AFormItem>
          </div>
          <div class="item">
            <AFormItem
              class="label-item"
              label="Password"
              name="password"
              :rules="[{ required: true, message: 'Please input your password!' }]"
            >
            </AFormItem>
            <!-- - -->
            <AFormItem class="input-item">
              <AInputPassword v-model:value="formState.password" class="w-80">
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </AInputPassword>
            </AFormItem>
          </div>

          <!-- -------- -->
          <AFormItem>
            <AFormItem name="remember" no-style>
              <ACheckbox v-model:checked="formState.remember">Remember me</ACheckbox>
            </AFormItem>
            <br />
            <a class="login-form-forgot text-emerald-400" href="">Forgot password</a>
          </AFormItem>

          <AFormItem class="btn">
            <AButton
              :disabled="disabled"
              type="primary"
              html-type="submit"
              class="login-form-button w-80 bg-gray-600"
              @click="
              userStore.login({
                  userName: formState.userName,
                  password: formState.password,
                })
              "
            >
              Log in
            </AButton>
            <!-- Or
            <a href="">register now!</a> -->
          </AFormItem>
          <span>_______________ or _______________</span>
          <AFormItem>
            <div class="create-account">
              <p>
                Are you new? <a href="#" class="text-emerald-400"> Create an Account</a>
              </p>
            </div>
          </AFormItem>
        </AForm>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import type { Authentication } from "@/model/authentication";
import { login } from "@/api/authentication";
import { useUserStore } from "@/store/user";
// import router from "@/router";

const userStore = useUserStore();

const formState = reactive<Authentication>({
  userName: "",
  password: "",
  // remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

// const handleLogin = async (auth: Authentication) => {
//   const { data } = await axios.post("http://192.168.1.20:5233/api/user/login", auth);
//   console.log(data.data);
//   return data;
// };

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.userName && formState.password);
});
</script>

<style>
.ant-row {
  justify-content: center;
}
.ant-row > .ant-col {
  max-width: 50%;
}
.input-item {
  margin-left: -55px;
}
.login {
}
.main-login {
  display: flex;
  flex-direction: row;
  padding: 45px;
  border-radius: 15px;
  margin: 80px 160px;
}
.pic-login {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px 0px 0px 15px;
}
.pic {
  width: 80%;
}
.form-login {
  width: 50%;
  border-radius: 0px 15px 15px 0px;
  padding: 30px 0px;
}

@media screen and (max-width: 1024px) {
  .main-login {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 30px 0px;
  }
}

@media screen and (max-width: 768px) {
  .main-login {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .pic-login {
    width: 100%;
  }
  .form-login {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .label-item {
    margin: 10px;
  }
  .btn {
    margin-right: 155px;
  }
  .form-login {
    width: 100%;
  }
  .pic-login {
    width: 100%;
  }
}
</style>
