<template>
  <a-row class="mt-4">
    <!-- 轮播图（画册、视频、广告） -->
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
    <!-- 问答列表 -->
    <a-col :span="8" class="ps-4">
      <a-card :bordered="false" style="height: 240px">
        <span style="font-size: 17px">问答</span>
        <a-divider :margin="10" />
        <a-empty />
      </a-card>
    </a-col>
    <!-- 投票列表 -->
    <a-col :span="6" class="ps-4">
      <a-card :bordered="false" style="height: 240px">
        <span style="font-size: 17px">投票</span>
        <a-divider :margin="10" />
        <a-empty />
      </a-card>
    </a-col>
  </a-row>
  <!-- 更新提示 -->
  <!-- <a-row>
    <a-alert banner style="padding-left: 60px">
      <a-col :offset="1" style="padding-left: 1.2vw"
        >4 new posts are added recently, click here to load them.</a-col
      >
    </a-alert>
  </a-row> -->
  <a-row>
    <!-- 帖子 -->
    <a-col :span="18" class="mt-4 list-nav">
      <!-- 帖子列表头 -->
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" title="推荐" class="p-1">
          <PostCard
            :Title="store.topic.title"
            :Category="store.topic.category"
            :ExtraInfos="ExtraInfos"
          />
          <PostCard
            :Title="store.topic.title"
            :Category="store.topic.category"
            :ExtraInfos="ExtraInfos"
          />
          <PostCard
            :Title="store.topic.title"
            :Category="store.topic.category"
            :ExtraInfos="ExtraInfos"
          />
        </a-tab-pane>
        <a-tab-pane key="2" title="最新"> Content of Tab Panel 2 </a-tab-pane>
        <a-tab-pane key="3" title="热门"> Content of Tab Panel 3 </a-tab-pane>
      </a-tabs>
    </a-col>
    <!-- 侧边栏 -->
    <a-col :span="6">
      <a-card class="ms-4 mt-4" :bordered="false"> <a-empty /> </a-card>
      <a-card class="ms-4 mt-4" :bordered="false"> <a-empty /> </a-card>
      <a-card class="ms-4 mt-4" :bordered="false">
        <a-empty />
      </a-card>
    </a-col>
  </a-row>
</template>
<script setup lang="ts">
import PostCard from "@/components/Community/PostCard.vue";
import { reactive, onMounted } from "vue";
import { mainStore } from "@/store/index";
const store = mainStore();
const images = ["/1.jpg", "/2.png", "/3.jpg", "/4.jpg", "/5.jpg"];
const ExtraInfos = reactive({
  Likes: store.topic.likes,
  Replies: store.topic.replies,
  Views: store.topic.views,
  Activity: "1h",
});
onMounted(() => {
  document.querySelector(".arco-tabs-content").style.padding = "0";
  document.querySelector(".arco-tabs-nav-tab-list").style.marginLeft = "18px";
});
</script>
<style lang="scss" scoped>
.list-nav {
  background-color: var(--color-bg-2);
}
</style>
