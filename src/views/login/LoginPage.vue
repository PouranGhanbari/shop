<template>
  <div>
    <p>this is login</p>
    <div class="main-login flex flex-wrap justify-center p-[10rem] bg-emerald-100">
      <div class="pic-login basis-1/2 bg-emerald-50">
        <img src="@/assets/img/login.jpg" alt="pic-login" class="w-[35rem] ml-[3rem] mt-[4rem]" />
        <h1 class="text-2xl text-center mt-[1rem]">Bookstore Bab</h1>
        <p class="text-sm text-center">
          To access all site features, please log in to your account. <br />
          Register if you do not have an account
        </p>
      </div>
      <!-- --------------------- -->
      <div class="form-login basis-1/2 pt-8 p-3 text-center bg-slate-100">
        <h1 class="text-2xl"><span class="text-emerald-400">LogIn</span>Page</h1>
        <a-form
          :model="formState"
          name="normal_login"
          class="login-form   justify-center p-2"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <!-- ---- -->
          <a-form-item
            label="Username"
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
          </a-form-item>
          <!-- - -->
          <a-form-item>
            <a-input v-model:value="formState.username" class="w-80">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>

          <!-- ------- -->
          <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
          </a-form-item>
          <!-- - -->
          <a-form-item>
            <a-input-password v-model:value="formState.password" class="w-80">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>
          <!-- -------- -->
          <a-form-item>
            <a-form-item name="remember" no-style>
              <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
            </a-form-item>
            <br />
            <a class="login-form-forgot text-emerald-400" href="">Forgot password</a>
          </a-form-item>

          <a-form-item>
            <a-button
              :disabled="disabled"
              type="primary"
              html-type="submit"
              class="login-form-button w-80 bg-gray-600"
            >
              Log in
            </a-button>
            <!-- Or
            <a href="">register now!</a> -->
          </a-form-item>
          <span>_______________ or _______________</span>
          <a-form-item>
            <div class="create-account">
              <p>Are you new? <a href="#" class="text-emerald-400"> Create an Account</a></p>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
interface FormState {
  username: string
  password: string
  remember: boolean
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})
const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
const disabled = computed(() => {
  return !(formState.username && formState.password)
})
</script>

<style >
.ant-row {
  justify-content: center;
}
.ant-row > .ant-col {
  max-width: 50% ;
}
</style>
  