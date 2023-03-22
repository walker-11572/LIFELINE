<template>
  <a-row justify="space-between" style="margin-top: 85px" id="height">
    <a-col :span="18"
      ><a-card class="p-3" :bordered="false">
        <!-- #region 标题 -->
        <a-row class="mt-1 fw-bold h2 mb-3">
          {{ blog.title }}
        </a-row>
        <!-- #endregion -->
        <!-- #region 标签 -->
        <a-row class="mt-1" align="center">
          <a-col :span="16" class="d-flex">
            <CategoryTag :Category="Category" />
            <CategoryTag v-for="tag in Tags" :Category="tag" />
          </a-col>
          <!-- 附加信息 -->
          <a-col
            :span="8"
            class="d-flex justify-content-end"
            style="color: var(--color-neutral-6); font-size: 13px"
          >
            <!-- <icon-schedule size="18" class="me-2" /> -->
            <span>{{ formatDateTime(blog.created_at) }}</span>
            <span class="ms-3">阅读 {{ blog.view_count }}</span>
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
            <div v-html="handleBody()"></div>
          </a-col>
        </a-row>
        <!-- #endregion -->
        <!-- #region 交互按钮 -->
        <a-row class="mt-4" align="center" justify="space-between">
          <div class="d-flex">
            <!-- 点赞 -->
            <button class="a-btn me-4" @click="like()">
              <span v-if="isLiked"
                ><icon-thumb-up-fill
                  size="20"
                  class="me-1"
                  style="color: rgb(var(--arcoblue-6))"
                />
              </span>
              <span v-else><icon-thumb-up size="20" class="me-1" /></span>
              <span>{{ liked_count }}</span>
            </button>
            <!-- 收藏 -->
            <button class="a-btn me-4" @click="like()">
              <span v-if="store.topic.starred"
                ><icon-star-fill
                  size="20"
                  class="me-1"
                  style="color: rgb(var(--yellow-6))"
                />
              </span>
              <span v-else><icon-star size="20" class="me-1" /></span>
              <span>{{ store.topic.stars }}</span>
            </button>
            <!-- 评论 -->
            <a href="#myReply" style="text-decoration: none">
              <button
                class="a-btn"
                @mouseenter="topic.replyCount = '发布评论'"
                @mouseleave="topic.replyCount = tempNum"
              >
                <icon-message size="20" class="me-1" />
                <span>{{ store.topic.replies }}</span>
              </button>
            </a>
          </div>
          <div class="d-flex">
            <a-popover position="left">
              <button class="a-btn">
                <icon-bar-chart size="20" class="me-2" />
              </button>
              <template #content> </template>
            </a-popover>
            <button class="a-btn">
              <icon-share-alt size="20" class="me-2" />
            </button>
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
          </div>
        </a-row>
        <!-- #endregion -->
      </a-card>
      <!-- #region 评论 -->
      <a-row class="mt-4">
        <a-col>
          <a-card :bordered="false" class="m-0 p-0">
            <div class="d-flex justify-content-between align-items-center mt-3">
              <h5 class="fw-bold ms-3">评论 {{ store.topic.replies }}</h5>
              <a-radio-group type="button" class="me-3" default-value="recent">
                <a-radio value="recent">最新</a-radio>
                <a-radio value="Hottest">最热</a-radio>
              </a-radio-group>
            </div>
          </a-card>
        </a-col>
      </a-row>
      <a-row id="height3">
        <a-col>
          <Comments />
        </a-col>
      </a-row>
      <!-- #endregion -->
      <!-- #region 回复 -->
      <a-row
        style="height: 60px; color: var(--color-neutral-8); font-size: 18px"
        align="end"
        justify="space-between"
        class="px-3 mb-3 fw-bold"
        id="myReply"
        >您的评论</a-row
      >
      <a-row>
        <Editor v-model="newReply" type="blogReply" />
      </a-row>
      <a-row align="center" justify="space-between" class="my-4">
        <a-col class="d-flex justify-content-between">
          <a-checkbox value="1">Subscribe to this topic.</a-checkbox>
          <a-button size="large" type="primary">Reply</a-button>
        </a-col>
      </a-row>
      <!-- #endregion -->
    </a-col>
    <!-- #region 侧边栏 -->
    <a-col :span="6">
      <!-- 作者 -->
      <a-card class="ms-4" :bordered="false">
        <!-- #region 用户信息 -->
        <div class="d-flex align-items-center mb-3">
          <a-avatar :size="48">D</a-avatar>
          <div class="ms-3">
            <div style="font-size: 18px">dylan89</div>
            <span>Hello world!</span>
          </div>
        </div>
        <div class="d-flex justify-content-around abc">
          <a-button long class="me-2" size="large" v-if="store.topic.subscribed"
            >已关注</a-button
          >
          <!-- TODO 穿插加载中按钮 -->
          <a-button type="primary" long class="me-2" size="large" v-else
            >关注</a-button
          >
          <a-button type="outline" long class="ms-2" size="large"
            >私信</a-button
          >
        </div>
        <!-- #endregion -->
      </a-card>
      <!-- 目录 -->
      <a-affix :offsetTop="45" v-show="contentsVisibility">
        <Contents :headerTags="a" />
      </a-affix>
    </a-col>
    <!-- #endregion -->
  </a-row>
  <!--#region 推荐帖子 -->
  <a-row
    style="height: 60px; color: var(--color-neutral-8); font-size: 16px"
    align="end"
    justify="space-between"
    id="height5"
  >
    <a-col :span="4" class="fw-bold fs-5">相关推荐</a-col>
    <a-col :span="4"
      ><a-input-search
        placeholder="Search topics"
        size="large"
        style="background-color: var(--color-neutral-3)"
    /></a-col>
  </a-row>
  <a-row justify="center">
    <a-col :span="24"><a-divider :margin="16" /></a-col>
  </a-row>
  <!-- 帖子 -->
  <!-- <PostCard
    :Title="store.topic.title"
    :Category="store.topic.category"
    :ExtraInfos="ExtraInfos"
  /> -->
  <!-- #endregion -->
  <a-back-top />
</template>
<script setup lang="ts">
import CategoryTag from "@/components/community/CategoryTag.vue";
import Comments from "@/components/Community/Comments.vue";
import Editor from "@/components/TinymceEditor.vue";
import PostCard from "@/components/Community/PostCard.vue";
import Contents from "@/components/Community/Mulu.vue";
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import prism from "prismjs";
import axios from "axios";
import moment from "moment";
import { useRoute } from "vue-router";
import { userStore } from "@/store/user";
const store = userStore();
const topic = reactive({
  time: "",
  user: "",
  category: "politics",
  body: store.topic.body,
  extraInfo: {},
  replyCount: "111",
});
const user_id = 1;
const tempNum = topic.replyCount;
const route = useRoute();
const newReply = ref("");
// #region Axios从后端获取文章
const getBlog = async () => {
  const response = await axios.get(`/api/getBlog/${route.params.blog_id}`);
  return response.data;
};
const blog = await getBlog();
// #endregion
//#region Axios从后端获取标签和分类
const getCategory = async () => {
  const response = await axios.get(`/api/getCategory/${blog.id}`);
  return response.data;
};
const getTags = async () => {
  const response = await axios.get(`/api/getTag/${blog.id}`);
  return response.data;
};
const Category = await getCategory();
const Tags = await getTags();
// #endregion
//#region 点赞功能
const checkLikeable = async () => {
  const response = await axios.get("/api/isLiked", {
    params: {
      user_id: 1,
      likeable_id: blog.id,
      likeable_type: "blog",
    },
  });
  let res = await response.data;
  if (res.length !== 0) return true;
  else return false;
};
let isLiked = await checkLikeable();
const liked_count = ref(blog.liked_count);
function like() {
  console.log(isLiked);
  if (isLiked) {
    axios.delete(`/api/dislike/${user_id}/blog/${blog.id}`).then(() => {
      --liked_count.value;
      isLiked = false;
    });
  } else {
    axios
      .post("/api/like", {
        likeable_id: blog.id,
        likeable_type: "blog",
        user_id: 1,
      })
      .then(() => {
        ++liked_count.value;
        isLiked = true;
      });
  }
}
// #endregion
// #region 获取并加工文章标题
const a = blog.content.match(/<h[1-6]>([\s\S]*?)<\/h[1-6]>/g) || [];
function handleBody() {
  let handledBody = "";
  let b = new Array();
  a?.forEach((item, index, arr) => {
    b[index] =
      item.slice(0, 3) + " id=" + '"' + `h-${index + 1}` + '"' + item.slice(3);
    handledBody = blog.content.replace(a[0], b[0]);
    for (let i = 0; i < a?.length; i++) {
      handledBody = handledBody.replace(a[i], b[i]);
    }
  });
  return handledBody;
}
// #endregion
// #region 日期格式化
function formatDateTime(datetime: moment.MomentInput) {
  return moment(datetime).format("YYYY-MM-DD hh:mm:ss");
}
// #endregion
// #region 目录出现&隐藏
var contentsVisibility = ref(true);
function ContentsVisibility() {
  var height = document.getElementById("height").offsetHeight;
  var scrollTop = window.pageYOffset;
  if (scrollTop < height - 250) {
    contentsVisibility.value = true;
  } else {
    contentsVisibility.value = false;
  }
}
onMounted(() => {
  window.addEventListener("scroll", ContentsVisibility, true);
  prism.highlightAll();
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", ContentsVisibility, true);
});
//#endregion
// #region 标题字号调整
onMounted(() => {
  let h1 = document.querySelectorAll("h1");
  let h2 = document.querySelectorAll("h2");
  let h3 = document.querySelectorAll("h3");
  let h4 = document.querySelectorAll("h4");
  h1.forEach((currentValue) => {
    currentValue.style.fontSize = "24px";
    currentValue.style.fontWeight = "bold";
  });
  h2.forEach((currentValue) => {
    currentValue.style.fontSize = "20px";
    currentValue.style.fontWeight = "bold";
  });
  h3.forEach((currentValue) => {
    currentValue.style.fontSize = "18px";
    currentValue.style.fontWeight = "bold";
  });
  h4.forEach((currentValue) => {
    currentValue.style.fontSize = "16px";
    currentValue.style.fontWeight = "bold";
  });
});
// #endregion
</script>

<style lang="scss" scoped>
.a-btn {
  border: transparent;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin-right: 5px;
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
  margin: auto;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: rgb(var(--arcoblue-6));
  }
}
</style>
