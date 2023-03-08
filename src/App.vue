<template>
  <!-- <Header></Header> -->
  <suspense>
    <router-view />
  </suspense>
  <!-- <Footer></Footer> -->
</template>

<script setup lang="ts">
import "animate.css";
import Header from "./components/pages/Header.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:7001';
</script>
<style src="./assets/scss/rings.scss" lang="scss"></style>
<style lang="scss"></style>
