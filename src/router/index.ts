import { createRouter, createWebHistory } from "vue-router";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/community/home",
      name: "Lines/community",
      // component: () => import("@/pages/Community/Community.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../components/Register.vue"),
    },
    {
      path: "/community",
      name: "Community",
      component: () => import("@/pages/Community/Community.vue"),
      children: [
        {
          path: "",
          name: "Community",
          component: () => import("@/pages/Community/Home.vue"),
        },
        {
          path: "home",
          name: "Community/Home",
          component: () => import("@/pages/Community/Home.vue"),
        },
        {
          path: "singleBlog/:blog_id",
          name: "Community/SingleBlog",
          component: () => import("@/pages/Community/SingleBlog.vue"),
        },
        {
          path: "category",
          name: "Community/Categories",
          component: () => import("@/pages/Community/Categories.vue"),
        },
        {
          path: "categorySingle",
          name: "Community/categorySingle",
          component: () => import("@/pages/Community/CategorySingle.vue"),
        },
        {
          path: "trending",
          name: "Community/Trending",
          component: () => import("@/pages/Community/Trending.vue"),
        },
        {
          path: "CreateTopic",
          name: "Community/CreateTopic",
          component: () => import("@/pages/Community/CreateTopic.vue"),
        }
        {
          path: "search/:keyword",
          name: "Search",
          component: () => import("../pages/Community/Search.vue"),
        },
      ],
    },
  ],
});
