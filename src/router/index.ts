import { createRouter, createWebHistory } from "vue-router";
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Lines",
      component: () => import("@/pages/Lines.vue"),
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
          component: () => import("@/pages/Community/Home.vue"),
        },
        {
          path: "home",
          name: "Community/Home",
          component: () => import("@/pages/Community/Home.vue"),
        },
        {
          path: "category",
          name: "Community/Categories",
          component: () => import("@/pages/Community/Categories.vue"),
        },
        {
          path: "categorySingle",
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
      ],
    },
    {
      path: "/tools",
      name: "Tools",
      component: () => import("@/pages/Tools.vue"),
    },
  ],
});
