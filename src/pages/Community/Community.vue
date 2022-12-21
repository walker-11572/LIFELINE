<template>
  <Particles />
  <CHeader />
  <a-col :lg="{ span: 18 }" :xxl="{ span: 16 }" style="margin: 0 auto">
    <router-view />
  </a-col>
</template>
<script setup lang="ts">
import Particles from "@/components/Particles/index.vue";
import CHeader from "@/components/Community/CHeader.vue";
import TagsNav from "@/components/Community/TagsNav.vue";
import { reactive } from "vue";
</script>
<style lang="scss" scoped></style>
