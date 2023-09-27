/*
 * @Author: yuanzengding
 * @Date: 2023-09-26 15:22:50
 * @LastEditors: yuanzengding
 * @LastEditTime: 2023-09-26 16:36:06
 * @Description:
 */
import { fileURLToPath, URL } from 'node:url'

import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css:{
    postcss:{
      plugins:[
      ]
    }
  }
})
