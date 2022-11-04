<template>
  <a-row class="Container px-5" align="center">
    <a-col :span="1"><a-avatar>A</a-avatar></a-col>
    <a-col :offset="1" :span="10">
      {{ props.Topic }}
    </a-col>
    <a-col :span="4">
      <CategoryBadge :Category="props.Category" Type="primary"/>
    </a-col>
    <a-col :span="2">{{ props.ExtraInfos.Likes }}</a-col>
    <a-col :span="2">{{ props.ExtraInfos.Replies }}</a-col>
    <a-col :span="2">{{ props.ExtraInfos.Views }}</a-col>
    <a-col :span="2">{{ props.ExtraInfos.Activity }}</a-col>
  </a-row>
</template>

<script setup lang="ts">
import CategoryBadge from "./CategoryBadge.vue";
const props = defineProps({
  Topic: String,
  Category: String,
  ExtraInfos: Object,
});
</script>

<style lang="scss" scoped>
.Container {
  height: 100px;
  background-color: var(--color-neutral-1);
  color: var(--color-neutral-10);
}
</style>
