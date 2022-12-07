<template>
  <Particles />
  <CHeader />
  <a-row align="center">
    <a-col
      :lg="{ span: 18, offset: 3 }"
      :xxl="{ span: 16, offset: 4 }"
      style="top: 60px"
      class="position-absolute pe-xxl-3"
    >
      <router-view />
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import Particles from "@/components/Particles/index.vue";
import CHeader from "@/components/Community/CHeader.vue";
import { reactive } from "vue";
</script>
<style lang="scss" scoped></style>
