<template>
  <a-row style="height: 100px" align="center" class="px-5">
    <a-col :span="2">
      <CategoryTag Category="IT" size="large" />
    </a-col>
    <a-col :span="3" :offset="12">Threads - {{ Threads }}</a-col>
    <a-col :span="1">
      <a-button type="text">
        <template #icon>
          <icon-heart-fill class="btn-icon" />
        </template>
      </a-button>
    </a-col>
    <a-col :span="1">
      <a-button type="text" class="ms-2">
        <template #icon>
          <icon-bar-chart class="btn-icon" />
        </template>
      </a-button>
    </a-col>
    <a-col :span="5">
      <a-input-search
        placeholder="Search in politics"
        style="background-color: var(--color-neutral-3); margin-left: 24px"
        size="large"
      />
    </a-col>
  </a-row>
  <a-typography-paragraph style="font-size: 16px" class="px-5"
    >Lets discuss about whats happening around the world
    politics.</a-typography-paragraph
  >
  <a-typography-paragraph class="fw-bold px-5 mb-1"
    >Similar TAGS</a-typography-paragraph
  >
  <a-space wrap class="px-5"
    ><CategoryTag Category="world politics" />
    <CategoryTag Category="human rights" />
    <CategoryTag Category="trump" />
    <CategoryTag Category="climate change" />
    <CategoryTag Category="foreign policy" />
  </a-space>
  <a-row justify="center">
    <a-col :span="23" class="px-4"><a-divider /></a-col>
  </a-row>
  <PostCard
    :Title="store.topic.title"
    :Category="store.topic.category"
    :ExtraInfos="ExtraInfos"
  />
  <a-back-top />
</template>
<script setup lang="ts">
import CategoryTag from "@/components/Community/CategoryTag.vue";
import PostCard from "@/components/Community/PostCard.vue";
import { ref, reactive } from "vue";
import { mainStore } from "@/store/index";
const store = mainStore();
const Threads = ref(1234);
const ExtraInfos = reactive({
  Likes: 985,
  Replies: 502,
  Views: 15,
  Activity: "1h",
});
</script>
<style>
.btn-icon {
  font-size: 27px;
  color: var(--color-neutral-8);
}
</style>
