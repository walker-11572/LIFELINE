<template>
  <button class="button" @click="TogglePage" :style="style">
    {{ props.Category }}
  </button>
</template>
<script setup lang="ts">
import { ref, reactive } from "Vue";
import { Icon } from "@arco-design/web-vue";
import { generate, presetColor, getPresetColors } from "@arco-design/color";
import router from "@/router";
const style = reactive({
  backgroundColor:"var(--color-neutral-3)",
  color: "var(--color-neutral-10)"
});
const props = defineProps({
  Type: String,
  Category: String,
});
function TogglePage() {
  router.push("/community/categorySingle");
}
if( props.Category === "politics"){
  style.backgroundColor = "rgb(var(--arcoblue-6))",
  style.color = "var(--color-neutral-1)"
}
</script>
<style lang="scss" scoped>
.button {
  border: none;
  background-color: var(--color-neutral-3);
  border-radius: 3px;
  font-size: 14px;
  color: var(--color-neutral-10);
  padding: 2px 6px 2px 6px;
}
</style>
