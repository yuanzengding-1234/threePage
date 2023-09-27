<!--
 * @Author: yuanzengding
 * @Date: 2023-09-26 15:22:50
 * @LastEditors: yuanzengding
 * @LastEditTime: 2023-09-26 16:43:11
 * @Description:
-->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <ul>
          <li>
            <RouterLink class="block w-100% h" to="/">
              11
            </RouterLink>
          </li>
          <li>
            <RouterLink class="block w-100%" to="/1">
              22
            </RouterLink>
          </li>
        </ul>
      </el-aside>
      <el-main><RouterView/></el-main>
    </el-container>
  </div>
</template>

<style scoped>

</style>
