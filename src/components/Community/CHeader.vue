<template>
  <a-row class="menu" align="center" id="header" @onscroll="hide">
    <!-- LOGO -->
    <a-col :lg="{ span: 3, offset: 3 }" :xxl="{ span: 3, offset: 4 }">
      <router-link to="/">
        <img
          src="@/assets/LOGO.png"
          style="width: 90%"
          v-show="MyTheme === 'light'"
        />
        <img
          src="@/assets/LOGO-dark.png"
          style="width: 70%"
          v-show="MyTheme === 'dark'"
        />
      </router-link>
    </a-col>
    <!-- 首页 -->
    <a-col
      :span="1"
      class="nav-text"
      @click="ChangeTab('index')"
      :class="{ active: isActive.index }"
    >
      首页
    </a-col>
    <!-- 版块 -->
    <a-col
      :span="1"
      class="nav-text"
      @click="ChangeTab('category')"
      :class="{ active: isActive.category }"
    >
      版块
    </a-col>
    <!-- 分类 -->
    <a-col
      :span="1"
      class="nav-text"
      @click="ChangeTab('trending')"
      :class="{ active: isActive.trending }"
    >
      分类
    </a-col>
    <!-- 搜索 -->
    <a-col class="ms-4" :lg="{ span: 8 }" :xxl="{ span: 5 }">
      <a-input-search placeholder="Search" />
    </a-col>
    <!-- 功能按钮 -->
    <a-col flex="160px" class="d-flex justify-content-end">
      <!-- 小程序二维码 -->
      <a-popover position="bottom">
        <a-button type="text" class="nav-btn">
          <svg
            t="1665715166253"
            class="nav-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4839"
            style="fill: var(--color-neutral-8)"
            width="23"
            height="23"
          >
            <path
              d="M712.388923 10.24A268.918154 268.918154 0 0 0 442.683077 279.788308v408.49723c0 74.830769-61.44 136.270769-136.192 136.27077-74.830769 0-138.870154-61.44-138.870154-138.948923 0-77.430154 61.44-136.113231 136.270769-136.113231a66.166154 66.166154 0 0 0 66.717539-66.796308 66.166154 66.166154 0 0 0-66.796308-66.717538A268.366769 268.366769 0 0 0 44.898462 675.052308C39.384615 824.556308 154.308923 949.956923 303.812923 955.470769a268.918154 268.918154 0 0 0 269.705846-269.784615V277.267692c0-74.830769 61.44-136.192 136.192-136.192 74.752 0 136.113231 61.44 136.113231 136.192 0 74.830769-61.44 136.192-133.435077 136.192H709.710769a66.166154 66.166154 0 0 0-66.796307 66.717539 66.166154 66.166154 0 0 0 66.796307 66.796307 268.918154 268.918154 0 0 0 269.627077-269.705846 264.428308 264.428308 0 0 0-267.027692-267.027692z"
              p-id="4840"
            ></path>
          </svg>
        </a-button>
        <template #content>
          <a-empty />
        </template>
      </a-popover>
      <!-- 主题切换 -->
      <a-dropdown trigger="hover">
        <a-button type="text" class="nav-btn" @click="ToggleTheme()">
          <icon-sun-fill class="nav-icon" v-show="store.theme === 'light'" />
          <icon-moon-fill class="nav-icon" v-show="store.theme === 'dark'" />
          <icon-desktop
            class="nav-icon"
            v-show="store.theme === 'FollowSystem'"
          />
        </a-button>
        <template #content>
          <a-doption
            class="d-flex justify-content-end"
            @click="ChangeTheme('light')"
          >
            <template #icon>
              <icon-check v-show="store.theme === 'light'" />
            </template>
            <template #default> 浅色模式 </template>
          </a-doption>
          <a-doption
            class="d-flex justify-content-end"
            @click="ChangeTheme('dark')"
          >
            <template #icon>
              <icon-check v-show="store.theme === 'dark'" />
            </template>
            <template #default> 深色模式 </template>
          </a-doption>
          <a-doption
            class="d-flex justify-content-end"
            @click="ChangeTheme('FollowSystem')"
          >
            <template #icon>
              <icon-check v-show="store.theme === 'FollowSystem'" />
            </template>
            <template #default> 跟随系统 </template>
          </a-doption>
        </template>
      </a-dropdown>
      <!-- 消息 -->
      <a-button type="text" class="nav-btn">
        <icon-message class="nav-icon" />
      </a-button>
    </a-col>
    <!-- 用户头像 -->
    <a-col :span="1">
      <a-dropdown trigger="hover">
        <a-avatar class="avatar">
          <img src="@/assets/avatar.png" alt="" />
        </a-avatar>
        <template #content class="">
          <div class="d-flex flex-column">
            <a-doption class="set-btn">
              <template #icon>
                <icon-user />
              </template>
              <template #default> 个人中心 </template>
            </a-doption>
            <a-doption class="set-btn">
              <template #icon>
                <icon-settings />
              </template>
              <template #default> 全局设置 </template>
            </a-doption>
            <a-doption class="set-btn">
              <template #icon>
                <icon-export />
              </template>
              <template #default> 退出登录 </template>
            </a-doption>
          </div>
        </template>
      </a-dropdown>
    </a-col>
    <!-- 发布话题 -->
    <a-col flex="auto" class="d-flex justify-content-end">
      <a-dropdown trigger="hover">
        <a-button
          type="primary"
          shape="circle"
          size="large"
          class="me-3"
          @click="CreateTopic()"
        >
          <template #icon>
            <icon-plus :style="{ fontSize: '23px' }" />
          </template>
        </a-button>
        <template #content>
          <a-doption
            class="d-flex justify-content-end"
            @click="ChangeTheme('light')"
          >
            <template #icon>
              <icon-check v-show="store.theme === 'light'" />
            </template>
            <template #default> 浅色模式 </template>
          </a-doption>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { mainStore } from "@/store/index";
const props = defineProps({
  page: String,
});
let isActive = reactive({
  index: true,
  category: false,
  trending: false,
});
const router = useRouter();
const route = useRoute();
const store = mainStore();
const MyTheme = ref(store.theme);
function ChangeTab(id: string) {
  if (id === "index") {
    router.push("/community/home");
  } else if (id === "category") {
    router.push("/community/category");
  } else if (id === "trending") {
    router.push("/community/trending");
  }
}
function ChangeTheme(value: string) {
  store.theme = value;
}
function ToggleTheme() {
  if (store.theme === "light") {
    store.theme = "dark";
  } else if (store.theme === "dark") {
    store.theme = "light";
  }
}
function CreateTopic() {
  router.push("/community/CreateTopic");
}
watch(
  () => store.theme,
  (val) => {
    if (val === "light") {
      document.body.removeAttribute("arco-theme");
      MyTheme.value = "light";
      console.log(store.theme);
    } else if (val === "dark") {
      document.body.setAttribute("arco-theme", store.theme);
      MyTheme.value = "dark";
      console.log(store.theme);
    } else if (val === "FollowSystem") {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.body.setAttribute("arco-theme", "dark");
        MyTheme.value = "dark";
      } else {
        document.body.removeAttribute("arco-theme");
        MyTheme.value = "light";
      }
    }
  }
);
// tab activity 切换
watch(
  () => route.path,
  (val) => {
    switch (val) {
      default: {
        isActive.index = false;
        isActive.category = false;
        isActive.trending = false;
        break;
      }
      case "/community/home": {
        isActive.index = true;
        isActive.category = false;
        isActive.trending = false;
        break;
      }
      case "/community/category": {
        isActive.index = false;
        isActive.category = true;
        isActive.trending = false;
        break;
      }
      case "/community/trending": {
        isActive.index = false;
        isActive.category = false;
        isActive.trending = true;
        break;
      }
    }
  }
);
// #region header出现&隐藏
let lastScrollY = 0;
function hide() {
  //记录滚动条高度，以判断是否隐藏
  var header = document.getElementById("header");
  if (window.scrollY - lastScrollY > 0 && window.scrollY > 150) {
    //往下滚动，隐藏导航栏
    header.style.top = "-60px";
  } else if (window.scrollY < lastScrollY) {
    //往上滚动，显示导航栏
    header.style.top = "0px";
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

<style scoped>
.menu {
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--color-neutral-3);
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: var(--color-bg-1);
  transition: all 0.2s;
}

.nav-btn {
  width: 30px;
  padding: 0;
  margin-right: 15px;
}

.nav-text {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  height: 100%;
  line-height: 60px;
  cursor: pointer;
  color: rgb(var(--arcoblue-4));
  margin-left: 3px;
  margin-right: 3px;
}

.nav-text:hover {
  color: rgb(var(--arcoblue-6));
  border-bottom: 2px solid rgb(var(--arcoblue-6));
}

.active {
  color: rgb(var(--arcoblue-6));
  border-bottom: 2px solid rgb(var(--arcoblue-6));
}

.nav-icon {
  font-size: 24px;
  color: var(--color-neutral-8);
}

.avatar {
  cursor: pointer;
}

.avatar:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
