<template>
  <!-- 主要内容 -->
  <a-row justify="space-between" class="mt-4">
    <a-col :span="18"
      ><a-card class="p-3" :bordered="false">
        <!-- #region 标题 -->
        <a-row class="mt-1">
          <a-col>
            <h5>Web Hosting Packages for ThemeForest WordPress</h5>
          </a-col>
        </a-row>
        <!-- #endregion -->
        <!-- #region 标签 -->
        <a-row class="mt-1">
          <a-col :span="19">
            <a-space>
              <CategoryTag :Category="topic.category" />
              <CategoryTag :Category="topic.tags[0]" />
              <CategoryTag :Category="topic.tags[1]" />
            </a-space>
          </a-col>
          <a-col
            :span="5"
            class="d-flex align-center justify-content-end"
            style="color: var(--color-neutral-6); font-size: 13px"
          >
            <!-- <icon-schedule size="18" class="me-2" /> -->
            <span>2022年11月11日</span>
            <span class="ms-3">#1</span>
          </a-col>
        </a-row>
        <!-- #endregion -->
        <!-- #region 分隔线 -->
        <a-row justify="center">
          <a-col :span="24"><a-divider /></a-col>
        </a-row>
        <!-- #endregion -->
        <!-- #region 正文 -->
        <a-row>
          <a-col :span="24">
            <h5 class="tt-title">Get ready for Movember!</h5>
            <p>
              It&rsquo;s time to channel your inner Magnum P.I., Ron Swanson or
              Hercule Poroit! It&rsquo;s the time that all guys (or gals) love
              and all our partners hate It&rsquo;s Movember!
            </p>
            <p>
              Throughout November we will be inviting all community members to
              help raise awareness and funds for the lives of men affected by
              cancer and mental health problems via the Movember Foundation 10.
            </p>
            <h5 class="tt-title">How Does it Work?</h5>
            <p>
              Authors and customers with facial hair unite! Simply grow, groom,
              and share your facial hair during November! Even females can enter
              if they desire (be creative, ladies!). Be inspired by checking out
              last year&rsquo;s highlights 28.
            </p>
          </a-col>
        </a-row>
        <!-- #endregion -->
        <!-- #region 交互按钮 -->
        <a-row class="mt-4">
          <a-col :span="2">
            <button class="a-btn">
              <icon-thumb-up size="20" class="me-2" />
              <span>{{ 111 }}</span>
            </button>
          </a-col>
          <a-col :span="2">
            <button class="a-btn">
              <icon-star size="20" class="me-2" />
              <span>{{ 111 }}</span>
            </button>
          </a-col>

          <a-col :span="2">
            <button class="a-btn">
              <icon-message size="20" class="me-2" />
              <span>{{ 111 }}</span>
            </button>
          </a-col>
          <a-col :offset="15" :span="1">
            <a-popover position="left">
              <button class="a-btn">
                <icon-bar-chart size="20" class="me-2" />
              </button>
              <template #content> </template>
            </a-popover>
          </a-col>
          <a-col :span="1">
            <button class="a-btn">
              <icon-share-alt size="20" class="me-2" />
            </button>
          </a-col>
          <a-col :span="1">
            <button class="a-btn">
              <svg
                viewBox="0 0 1127 1024"
                width="20"
                height="20"
                fill="var(--color-neutral-8)"
              >
                <path
                  d="M1108.468296 824.890547C1159.055032 910.219597 1097.227863 1024 990.429373 1024L130.432879 1024C29.258031 1024-32.574625 910.219597 18.012112 824.890547L450.825613 68.266574C473.306472 22.754136 518.276424 0 563.240888 0 608.209469 0 653.173934 22.754136 675.660283 68.266574L1108.468296 824.890547 1108.468296 824.890547 1108.468296 824.890547 1108.468296 824.890547ZM1020.384123 877.110641 1019.583053 875.735153 586.77504 119.111177 583.854223 113.62523C580.333998 106.500274 573.244216 102.4 563.240888 102.4 553.240806 102.4 546.151071 106.500212 542.636068 113.61633L539.710577 119.111663 106.096287 877.110641C95.301134 895.319767 109.937021 921.6 130.432879 921.6L990.429373 921.6C1016.30634 921.6 1031.298263 895.520476 1020.384123 877.110641L1020.384123 877.110641 1020.384123 877.110641 1020.384123 877.110641ZM558.08319 307.2C532.482248 307.2 512 322.819385 512 342.344809L512 579.251379C512 598.776801 532.482248 614.4 558.08319 614.4L568.321812 614.4C593.922749 614.4 614.4 598.776801 614.4 579.251379L614.4 342.344809C614.4 322.819385 593.922749 307.2 568.321812 307.2L558.08319 307.2 558.08319 307.2 558.08319 307.2 558.08319 307.2ZM512 766.885176C512 780.001705 517.522432 793.032632 526.999818 802.305669 536.477199 811.577487 549.797038 816.975247 563.200625 816.975247 576.602962 816.975247 589.927798 811.577487 599.405184 802.305669 608.882565 793.032632 614.4 780.001705 614.4 766.885176 614.4 753.772319 608.882565 740.741391 599.405184 731.469573 589.927798 722.19776 576.602962 716.8 563.200625 716.8 549.797038 716.8 536.477199 722.19776 526.999818 731.469573 517.522432 740.741391 512 753.772319 512 766.885176L512 766.885176 512 766.885176 512 766.885176Z"
                ></path>
              </svg>
            </button>
          </a-col>
        </a-row>
        <!-- #endregion -->
      </a-card></a-col
    >
    <a-col :span="6"
      ><a-card class="ms-4">
        <!-- #region 用户信息 -->
        <a-row align="center">
          <a-col :span="5"><a-avatar>A</a-avatar></a-col>
          <a-col :offset="1" :span="18">
            <div style="font-size: 18px">dylan89</div>
            <span>Hello world!</span>
          </a-col>
        </a-row>
        <a-row align="center" justify="center">
          
        </a-row>
        <!-- #endregion -->
      </a-card></a-col
    >
  </a-row>

  <!-- 统计 -->
  <a-card class="mt-4 p-3" :bordered="false">
    <a-row class="d-flex">
      <div class="ms-3">
        <h6>Thread Status</h6>
        <a-row class="mt-3">
          <a-tooltip content="浏览数" mini>
            <div class="status">
              <icon-eye size="24" />
              <span>10.1k</span>
            </div>
          </a-tooltip>
          <a-tooltip content="参与人数" mini>
            <div class="status">
              <icon-user-group size="24" />
              <span>10.1k</span>
            </div>
          </a-tooltip>
          <a-tooltip content="总点赞数" mini>
            <div class="status">
              <icon-thumb-up-fill size="24" />
              <span>10.1k</span>
            </div>
          </a-tooltip>
        </a-row>
      </div>
      <div class="ms-3">
        <h6>Frequent Posters</h6>
        <a-space size="medium" class="mt-2"
          ><a-avatar>A</a-avatar><a-avatar>A</a-avatar><a-avatar>A</a-avatar
          ><a-avatar>A</a-avatar><a-avatar>A</a-avatar></a-space
        >
      </div>
    </a-row>
    <!-- #region 分隔线 -->
    <a-row justify="center">
      <a-col :span="24"><a-divider :size="2" /></a-col>
    </a-row>
    <!-- #endregion -->
    <!-- #region 回复分类 -->
    <a-row>
      <a-space :size="16">
        <div style="font-size: 16px" class="ms-3">Sort replies by:</div>
        <a-radio-group default-value="1">
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable color="arcoblue" size="large"
                >Recent</a-tag
              >
            </template>
          </a-radio>
          <a-radio value="2">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable color="arcoblue" size="large"
                >Most Liked</a-tag
              >
            </template>
          </a-radio>
          <a-radio value="3">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable color="arcoblue" size="large"
                >Longest</a-tag
              >
            </template>
          </a-radio>
          <a-radio value="4">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable color="arcoblue" size="large"
                >Shortest</a-tag
              >
            </template>
          </a-radio>
          <a-radio value="5">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable color="arcoblue" size="large"
                >Accepted Answers</a-tag
              >
            </template>
          </a-radio>
        </a-radio-group>
      </a-space>
    </a-row>
    <!-- #endregion -->
  </a-card>
  <Replies />
  <a-row
    style="height: 60px; color: var(--color-neutral-8); font-size: 18px"
    align="end"
    justify="space-between"
    class="px-3 mb-3 fw-bold"
    >Post Your Reply</a-row
  >
  <Editor v-model="newReply" type="newReply" />
  <a-row align="center" justify="space-between" class="my-4">
    <a-col :span="4"
      ><a-checkbox value="1">Subscribe to this topic.</a-checkbox></a-col
    >
    <a-col :span="3">
      <a-button size="large" type="primary" long>Reply</a-button>
    </a-col>
  </a-row>
  <!--#region 推荐帖子 -->
  <a-row
    style="height: 60px; color: var(--color-neutral-8); font-size: 16px"
    align="end"
    justify="space-between"
  >
    <a-col :span="4">Suggested Topics</a-col>
    <a-col :span="6"
      ><a-input-search
        placeholder="Search topics"
        size="large"
        style="background-color: var(--color-neutral-3)"
    /></a-col>
  </a-row>
  <a-row justify="center">
    <a-col :span="24" class="px-3"><a-divider /></a-col>
  </a-row>
  <!-- 帖子列表头 -->
  <a-row
    style="color: var(--color-neutral-8); font-size: 14px"
    align="center"
    class="px-5 mb-4"
  >
    <a-col :span="12">Topic</a-col>
    <a-col :span="4">Category</a-col>
    <a-col :span="2">Likes</a-col>
    <a-col :span="2">Replies</a-col>
    <a-col :span="2">Views</a-col>
    <a-col :span="2">Activity</a-col>
  </a-row>
  <!-- 帖子 -->
  <PostCard
    Topic="Halloween Costume Contest 2018"
    Category="politics"
    :ExtraInfos="ExtraInfos"
  />
  <!-- #endregion -->
</template>
<script setup lang="ts">
import CategoryTag from "@/components/community/CategoryTag.vue";
import Replies from "@/components/community/Replies.vue";
import Editor from "@/components/TinymceEditor.vue";
import PostCard from "@/components/Community/PostCard.vue";
import { reactive, ref } from "vue";
const topic = reactive({
  title: "",
  time: "",
  user: "",
  category: "politics",
  tags: ["world politics", "human rights"],
  body: "",
  extraInfo: {},
});
const ExtraInfos = reactive({
  Likes: 985,
  Replies: 502,
  Views: 15,
  Activity: "1h",
});
const newReply = ref("default");
</script>
<style lang="scss" scoped>
.a-btn {
  border: transparent;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  color: var(--color-neutral-8);
  transition: all 0.5s;
  span {
    font-size: 16px;
    line-height: 100%;
  }
  &:hover {
    color: rgb(var(--arcoblue-6));
  }
}
.status {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 50px;
  transition: all 0.5s;
  &:hover {
    color: rgb(var(--arcoblue-6));
  }
}
</style>
