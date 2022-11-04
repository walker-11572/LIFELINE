<template>
  <a-row
    style="height: 60px; color: var(--color-neutral-8); font-size: 18px"
    align="end"
    justify="space-between"
    class="px-5"
  >
    <a-col :span="1">Categories</a-col>
    <a-col :span="4"
      ><a-input-search
        placeholder="Search categories"
        style="background-color: var(--color-neutral-3)"
        size="large"
    /></a-col>
  </a-row>
  <a-row justify="center">
    <a-col :span="23" class="px-4"><a-divider /></a-col>
  </a-row>
  <a-row class="px-5" :gutter="24">
    <a-col :span="8"><CategoryCards /></a-col>
    <a-col :span="8"><CategoryCards /></a-col>
    <a-col :span="8"><CategoryCards /></a-col>
  </a-row>
</template>
<script setup lang="ts">
import CategoryCards from "@/components/Community/CategoryCards.vue";
</script>
