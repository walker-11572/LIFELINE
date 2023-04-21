<template>
  <a-avatar class="avatar" :size="props.size" :image-url="avatar" />
</template>

<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { userStore } from "@/store/user";
const store = userStore();
const props = defineProps({
  size: {
    type: Number,
    default: 36,
  },
  userId: {
    type: String,
    default: "",
  },
});
const avatar = ref("/src/assets/defaultAvatar.png");
if (props.userId !== "") {
  axios
    .get(`/api/user/avatar/${props.userId}`)
    .then((response) => {
      avatar.value = `http://127.0.0.1:7001/public/${response.data.avatar}`;
    })
    .catch((error) => {
      throw error;
    });
}
</script>

<style lang="scss" scoped>
.avatar {
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
}
</style>
