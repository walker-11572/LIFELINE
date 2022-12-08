<template>
  <a-row class="mt-4">
    <!-- 轮播图 -->
    <a-col :span="10">
      <a-carousel
        :style="{
          width: '100%',
          height: '240px',
        }"
        :auto-play="true"
      >
        <a-carousel-item v-for="image in images">
          <img
            :src="image"
            :style="{
              width: '100%',
            }"
          />
        </a-carousel-item>
      </a-carousel>
    </a-col>
    <!--  -->
    <a-col :span="6" :offset="1">
      <a-card :bordered="false"></a-card>
    </a-col>
    <!--  -->
    <a-col :span="6" :offset="1">
      <a-card :bordered="false"></a-card>
    </a-col>
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
const images = ["/1.jpg", "/2.png", "/3.jpg", "/4.jpg", "/5.jpg"];
const ExtraInfos = reactive({
  Likes: store.topic.likes,
  Replies: store.topic.replies,
  Views: store.topic.views,
  Activity: "1h",
});
</script>
<style lang="scss" scoped></style>
