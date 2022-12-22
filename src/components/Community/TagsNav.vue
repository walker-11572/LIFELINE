<template>
  <a-row class="tags" align="center" id="nav" justify="center">
    <a-col :span="18" class="d-flex justify-content-between">
      <div>
        <span class="items active">综合</span>
        <span class="items">关注</span>
        <span class="items">IT</span>
      </div>
      <div class="items m-0">标签管理</div>
    </a-col>
  </a-row>
</template>
<script lang="ts" setup>
import { ref, reactive, watch, onMounted, onBeforeUnmount } from "vue";
// #region header出现&隐藏
let lastScrollY = 0;
function hide() {
  //记录滚动条高度，以判断是否隐藏
  var nav = document.getElementById("nav");
  if (window.scrollY - lastScrollY > 0 && window.scrollY > 150) {
    //往下滚动，隐藏导航栏
    nav.style.top = "0px";
  } else if (window.scrollY < lastScrollY) {
    //往上滚动，显示导航栏
    nav.style.top = "60px";
  }
  lastScrollY = window.scrollY;
}
onMounted(() => {
  window.addEventListener("scroll", hide, true);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", hide, true);
});
//#endregion
</script>
<style scoped lang="scss">
.tags {
  box-sizing: border-box;
  width: 100%;
  top: 60px;
  height: 40px;
  border-bottom: 1px solid var(--color-neutral-3);
  background-color: var(--color-bg-1);
  position: fixed;
  z-index: 10;
  left: 0;
  transition: all 0.2s;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 200%;
    z-index: 100;
    background-color: var(--color-bg-1);
  }
}
.items {
  font-size: 14px;
  margin-right: 24px;
  color: var(--color-neutral-6);
  cursor: pointer;
  &:hover {
    color: rgb(var(--arcoblue-6));
  }
}
.active {
  color: rgb(var(--arcoblue-6));
}
</style>
