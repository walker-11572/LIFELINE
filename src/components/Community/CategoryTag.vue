<template>
  <router-link :to="'/community/categorySingle'" style="text-decoration: none">
    <a-tag class="a-tag" :style="style" :size="props.size">
      {{ props.Category }}
    </a-tag>
  </router-link>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { Icon } from "@arco-design/web-vue";
import { generate, presetColor, getPresetColors } from "@arco-design/color";
const style = reactive({
  backgroundColor: "var(--color-neutral-3)",
  color: "var(--color-neutral-10)",
});
const props = defineProps({
  Category: String,
  size: {
    type: String,
    default: "medium",
  },
});
switch (props.Category) {
  default:
    {
      (style.backgroundColor = "var(--color-neutral-3)"),
        (style.color = "var(--color-neutral-8)");
    }
    break;
  case "politics":
    {
      (style.backgroundColor = "rgb(var(--arcoblue-6))"),
        (style.color = "#fff");
    }
    break;
}
</script>
<style lang="scss" scoped></style>
