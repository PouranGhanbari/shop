<template>
  <div class="login">
    <p>this is login</p>
    <div class="main-login  bg-emerald-100">
      <div class="pic-login bg-emerald-50">
        <img src="@/assets/img/login.jpg" alt="pic-login" class="pic" />
        <h1 class="text-2xl text-center mt-[1rem]">Bookstore Bab</h1>
        <p class="text-sm text-center">
          To access all site features, please log in to your account. <br />
          Register if you do not have an account
        </p>
      </div>
      <!-- --------------------- -->
      <div class="form-login  text-center bg-slate-100">
        <h1 class="text-2xl"><span class="text-emerald-400">LogIn</span>Page</h1>
        <a-form
          :model="formState"
          name="normal_login"
          class="login-form justify-center p-2"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
         <div class="item">
           <!-- ---- -->
           <a-form-item
           class="label-item"
            label="Username"
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
          </a-form-item>
          <!-- - -->
          <a-form-item class="input-item"
          >
            <a-input v-model:value="formState.username" class="w-80">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>
         </div>
         <div class="item">
  <a-form-item
  class="label-item"
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
          </a-form-item>
          <!-- - -->
          <a-form-item class="input-item">
            <a-input-password v-model:value="formState.password" class="w-80">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>
         </div>
          <!-- ------- -->
          <!-- -------- -->
          <a-form-item>
            <a-form-item name="remember" no-style>
              <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
            </a-form-item>
            <br />
            <a class="login-form-forgot text-emerald-400" href="">Forgot password</a>
          </a-form-item>

          <a-form-item class="btn">
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
.input-item{
  margin-left: -55px;
 
}
.login{
}
.main-login{
  display: flex;
    flex-direction: row;
    padding: 45px;
    border-radius: 15px;
    margin: 80px 160px;

}
.pic-login{
width: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 15px 0px 0px 15px;
}
.pic{
width: 80%;
}
.form-login {
width: 50%;
border-radius:0px 15px 15px 0px;
padding: 30px 0px;
}

@media screen and ( max-width:1024px) {
  .main-login{
    width: 100%;
    display: flex;
    flex-direction: row ;
    margin: 30px 0px;
  }
}

@media screen and ( max-width:768px) {
  .main-login{
    width: 100%;
    display: flex;
    flex-direction: column ;
  }
  .pic-login{
     width: 100%;
  }
  .form-login {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.label-item{
  margin: 10px;
}
.btn{
  margin-right: 155px;
}
.form-login {
  width: 100%;
}
.pic-login{
width: 100%;
}
}
</style>
  