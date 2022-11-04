<template>
    <div class="root">
    <!-- <Header></Header> -->
    <router-view/>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script setup lang="ts">
import "animate.css";
import Header from "./components/pages/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<style src="./assets/scss/rings.scss" lang="scss"></style>
<style lang="scss" scoped>
.root {
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-neutral-2);
  position: absolute;
}
</style>
