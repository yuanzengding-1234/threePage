<!--
 * @Author: yuanzengding
 * @Date: 2023-09-26 15:52:34
 * @LastEditors: yuanzengding
 * @LastEditTime: 2023-09-27 10:08:59
 * @Description:
-->
<template>
  <div id="id1"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { onMounted } from 'vue'
console.log(THREE)
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5
renderer.setSize(innerWidth, innerHeight)

function animate() {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
animate()
onMounted(() => {
  if (renderer?.domElement) {
    document.getElementById('id1')?.appendChild(renderer?.domElement as any)
  }
})
</script>

<style lang="scss" scoped></style>
