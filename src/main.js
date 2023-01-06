import { createApp } from 'vue'
import './style.css'
// 引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app=createApp(App)
app.use(ElementPlus)
// 引入winddicss
import 'virtual:windi.css'
app.use(router)
app.mount('#app')
