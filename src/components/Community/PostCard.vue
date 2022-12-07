<template>
  <a-row class="Container px-5" align="center">
    <a-col :span="1"><a-avatar>A</a-avatar></a-col>
    <a-col :offset="1" :span="10">
      <router-link to="/community/singleBlog" class="router-link">
        {{ props.Topic }}
      </router-link>
    </a-col>
    <a-col :span="4">
      <CategoryTag :Category="props.Category" />
    </a-col>
    <a-col :span="2">{{ props.ExtraInfos.Likes }}</a-col>
    <a-col :span="2">{{ props.ExtraInfos.Replies }}</a-col>
    <a-col :span="2">{{ props.ExtraInfos.Views }}</a-col>
    <a-col :span="2">{{ props.ExtraInfos.Activity }}</a-col>
  </a-row>
</template>

<script setup lang="ts">
import CategoryTag from "@/components/community/CategoryTag.vue";
const props = defineProps({
  Topic: String,
  Category: String,
  ExtraInfos: Object,
});
</script>

<style lang="scss" scoped>
.Container {
  height: 100px;
  background-color: var(--color-bg-2);
  color: var(--color-neutral-10);
}
.router-link{
  text-decoration: none;
  color: var(--color-neutral-10);
  transition: all 0.3s;
  &:hover{
    color: rgb(var(--arcoblue-6));
  }
}
</style>
