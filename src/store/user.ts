import { defineStore } from "pinia";
export const userStore = defineStore("user", {
  state: () => {
    return {
      theme: "light",
      newlineType: "",
      topic: {
        stars: 24,
        replies: 112,
        read: 123456,
        starred: true,
        liked: true,
        subscribed: true,
      },
      csrfToken: "",
      sessionId: "",
      userToken: "",
      userId: "",
    };
  },
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ["userId", "userToken", "theme"],
      },
    ],
  },
});
