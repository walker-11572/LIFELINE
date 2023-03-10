import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
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
    };
  },
  getters: {},
  actions: {},
});
