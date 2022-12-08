<template>
  <!-- 帖子列表头 -->
  <a-row
    style="height: 60px; color: var(--color-neutral-8); font-size: 14px"
    align="center"
    class="px-5"
  >
    <a-col :span="12">Topic</a-col>
    <a-col :span="4">Category</a-col>
    <a-col :span="2">Likes</a-col>
    <a-col :span="2">Replies</a-col>
    <a-col :span="2">Views</a-col>
    <a-col :span="2">Activity</a-col>
  </a-row>
  <!-- 更新提示 -->
  <a-row>
    <a-alert banner style="padding-left: 60px">
      <a-col :offset="1" style="padding-left: 1.2vw"
        >4 new posts are added recently, click here to load them.</a-col
      >
    </a-alert>
  </a-row>
  <!-- 帖子 -->
  <PostCard
    :Title="store.topic.title"
    :Category="store.topic.category"
    :ExtraInfos="ExtraInfos"
  />
</template>
<script setup lang="ts">
import PostCard from "@/components/Community/PostCard.vue";
import { reactive } from "vue";
import { mainStore } from "@/store/index";
const store = mainStore();
const ExtraInfos = reactive({
  Likes: store.topic.likes,
  Replies: store.topic.replies,
  Views: store.topic.views,
  Activity: "1h",
});
</script>
<style lang="scss" scoped></style>
