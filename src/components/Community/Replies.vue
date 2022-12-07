<template>
  <a-card
    class="p-3 hover"
    :bordered="false"
    @mouseenter="visibility = 'visible'"
    @mouseleave="visibility = 'hidden'"
  >
    <!-- #region 用户信息 -->
    <a-row align="center">
      <a-col :span="1"><a-avatar>A</a-avatar></a-col>
      <a-col :offset="1" :span="2">dylan89</a-col>
      <a-col
        :offset="12"
        :span="8"
        class="d-flex align-center justify-content-end"
        style="color: var(--color-neutral-6); font-size: 13px"
      >
        <!-- <icon-schedule size="18" class="me-2" /> -->
        <span>2022年11月11日</span>
        <span class="ms-3">#2</span>
      </a-col>
    </a-row>
    <!-- #endregion -->
    <!-- #region 正文 -->
    <a-row justify="center">
      <a-col :offset="2" :span="22">
        <p>
          Finally!<br />Are there any special recommendations for design or an
          updated guide that includes new preview sizes, including retina
          displays?
        </p>
        <pre><code class="language-javascript">function toggleType(type: number) {
  isActive.fill(false);
  isActive[type] = true;
  newTopic.type = topicTypes[type];
}</code></pre>
      </a-col>
    </a-row>
    <!-- #endregion -->
    <!-- #region 交互按钮 -->
    <a-row class="mt-3 ms-5 d-flex justify-content-between">
      <div class="d-flex">
        <button class="a-btn ms-3">
          <icon-thumb-up size="20" class="me-1" />
          <span>{{ 111 }}</span>
        </button>
        <button class="a-btn ms-3" @click="Reply">
          <icon-message size="20" class="me-1" />
          <span>{{ replyCount }}</span>
        </button>
      </div>
      <div class="d-flex me-1" :style="{ visibility: visibility }">
        <button class="a-btn">
          <icon-thumb-down size="20" class="me-1" />
          <span>{{ 111 }}</span>
        </button>
        <button class="a-btn ms-3">
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
    <a-row class="ms-5 mt-2" v-show="showReply">
      <a-col
        ><Editor class="ms-3" v-model="newReply" type="blogCommentReply"
      /></a-col>
      <a-col
        ><a-button size="large" type="primary" class="mt-3 float-end"
          >Reply</a-button
        ></a-col
      >
    </a-row>
  </a-card>
</template>
<script lang="ts" setup>
import Editor from "@/components/TinymceEditor.vue";
import { reactive, ref, onMounted } from "vue";
import prism from "prismjs";
import hljs from "highlight.js";
let visibility = ref("hidden");
var newReply = ref("");
var replyCount = ref("111");
const tempNum = replyCount.value;
var showReply = ref(false);
if (replyCount.value === "0") {
  replyCount.value = "回复";
}
function Reply() {
  replyCount.value = replyCount.value === tempNum ? "取消回复" : tempNum;
  showReply.value = !showReply.value;
}
onMounted(() => {
  prism.highlightAll();
});
</script>

<style lang="scss" scoped>
.a-btn {
  border: transparent;
  background-color: transparent;
  display: flex;
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
</style>
