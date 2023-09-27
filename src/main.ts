/*
 * @Author: yuanzengding
 * @Date: 2023-09-26 15:22:50
 * @LastEditors: yuanzengding
 * @LastEditTime: 2023-09-26 16:37:11
 * @Description:
 */
import element from "element-plus"
import "element-plus/dist/index.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "virtual:uno.css"
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(element)

app.mount('#app')
