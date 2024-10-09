import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import './assets/tailwind.css'

import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css';
import * as AntIcons from '@ant-design/icons-vue'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.mount('#app')

