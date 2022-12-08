<template>
  <a-card :bordered="false" class="p-3">
    <a-row justify="space-between" align="center" class="mb-4">
      <a-col :span="12"><CategoryTag Category="IT" /></a-col>
      <a-col :span="12" class="text-end">Threads - {{ Threads }}</a-col>
    </a-row>
    <a-typography-paragraph style="font-size: 16px"
      >Lets discuss about whats happening around the world
      politics.</a-typography-paragraph
    >
    <a-typography-paragraph class="fw-bold mb-1"
      >Similar TAGS</a-typography-paragraph
    >
    <a-space wrap
      ><CategoryTag Category="world politics" />
      <CategoryTag Category="human rights" />
      <CategoryTag Category="trump" />
      <CategoryTag Category="climate change" />
      <CategoryTag Category="foreign policy" />
    </a-space>
    <a-row class="mt-3">
      <a-button type="text">
        <template #icon>
          <icon-heart-fill class="btn-icon" />
        </template>
      </a-button>
      <a-popconfirm content="确定屏蔽该话题?" position="bottom" type="warning">
        <a-button type="text" class="ms-2">
          <template #icon>
            <icon-eye-invisible class="btn-icon" />
          </template>
        </a-button>
      </a-popconfirm>
      <a-button type="text" class="ms-2">
        <template #icon>
          <icon-bar-chart class="btn-icon" />
        </template>
      </a-button>
    </a-row>
  </a-card>
</template>
<script setup lang="ts">
import CategoryTag from "./CategoryTag.vue";
import { ref } from "vue";
const Threads = ref(1234);
</script>
<style>
.btn-icon {
  font-size: 27px;
  color: var(--color-neutral-8);
}
</style>
