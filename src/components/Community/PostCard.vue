<template>
  <div class="Container px-4 pt-3">
    <!--#region 用户、时间、标签、分类 -->
    <a-row class="mb-2" align="center" justify="space-between">
      <div class="d-flex align-items-center">
        <div class="user">dylan89</div>
        <a-divider direction="vertical" :margin="8" />
        <div class="time">{{ formatDateTime(props.post.created_at) }}</div>
        <a-divider direction="vertical" />
        <CategoryTag :Category="category" size="small" v-if="!showTag" />
        <CategoryTag
          v-for="tag in tags"
          :Category="tag"
          size="small"
          v-if="!showTag"
        />
      </div>
      <div class="d-flex align-items-center">
        <a-tag :bordered="true">博文</a-tag>
      </div>
    </a-row>
    <!-- #endregion -->
    <a-row class="body">
      <a-col :span="18">
        <!--#region 标题、正文片段 -->
        <router-link
          :to="{ path: `/community/singleBlog/${props.post.id}` }"
          class="router-link"
          target="_blank"
        >
          {{ props.post.title }}
        </router-link>
        <a-typography-paragraph ellipsis class="text">
          {{ getText() }}
        </a-typography-paragraph>
        <!-- #endregion -->
        <!--#region views、likes、replies -->
        <a-row align="center" style="margin-top: 12px">
          <div class="info">
            <icon-eye class="me-1" :size="18" :strokeWidth="2" />
            <span>{{ props.post.view_count }}</span>
          </div>
          <div class="info">
            <icon-thumb-up class="me-1" :size="16" :strokeWidth="2" />
            <span>{{ props.post.liked_count }}</span>
          </div>
          <div class="info">
            <icon-message class="me-1" :size="16" :strokeWidth="2" />
            <span>{{ props.post.comment_count }}</span>
          </div>
          <div class="info">
            <icon-history class="me-1" :size="16" :strokeWidth="2" />
            <span>{{ formatDate(props.post.updated_at) }}</span>
          </div>
        </a-row>
        <!-- #endregion -->
      </a-col>
      <!--#region 文章封面图 -->
      <a-col :span="5" :offset="1">
        <img src="/2.png" class="img" />
      </a-col>
      <!-- #endregion -->
    </a-row>
  </div>
</template>

<script setup lang="ts">
import CategoryTag from "@/components/community/CategoryTag.vue";
import { ref, reactive } from "vue";
import { userStore } from "@/store/user";
import axios from "axios";
import moment from "moment";
import { useRoute } from "vue-router";
const route = useRoute();
var showTag = route.path.includes("categorySingle");
const store = userStore();
const props = defineProps({
  post: Object,
});
const getCategory = async () => {
  const response = await axios.get(`/api/getCategory/${props.post.id}`);
  return response.data;
};
const category = await getCategory();
const getTag = async () => {
  const response = await axios.get(`/api/getTag/${props.post.id}`);
  return response.data;
};
const tags = await getTag();
function formatDate(datetime: any) {
  return moment(datetime).fromNow();
}
function formatDateTime(datetime: moment.MomentInput) {
  return moment(datetime).format("YYYY-MM-DD");
}
//TODO 将预览文段改为由后端返回
//#region
let text = props.post.content;
function getText() {
  if (!text) {
    return;
  }
  return text.replace(/<[^<>]+>/g, " ").slice(0, 200);
}
//#endregion
</script>

<style lang="scss" scoped>
.Container {
  // height: 100px;
  background-color: var(--color-bg-2);
  color: var(--color-neutral-10);
  position: relative;
  .body {
    border-bottom: 1px solid var(--color-neutral-3);
    padding-bottom: 16px;
  }
}
.router-link {
  text-decoration: none;
  color: var(--color-neutral-10);
  transition: all 0.3s;
  &:hover {
    color: rgb(var(--arcoblue-6));
  }
  font-weight: bold;
}
.user {
  color: var(--color-neutral-7);
  font-size: 13px;
}
.time {
  color: var(--color-neutral-6);
  font-size: 12.5px;
}
.info {
  border: transparent;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin-right: 18px;
  color: var(--color-neutral-8);
  transition: all 0.5s;
  span {
    font-size: 13px;
    line-height: 100%;
  }
}
.text {
  color: var(--color-neutral-6);
  font-size: 13px;
  margin-top: 8px;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}
.img {
  height: 80px;
  background-color: var(--color-bg-2);
  border-radius: 2.5px;
  float: right;
}
</style>
