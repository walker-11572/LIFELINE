<template>
  <router-link :to="'/community/categorySingle'" class="a-tag me-2">
    <a-tag :style="style" :size="props.size">
      {{ props.Category.name }}
    </a-tag>
  </router-link>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { Icon } from "@arco-design/web-vue";
import { generate, presetColor, getPresetColors } from "@arco-design/color";
const style = reactive({
  backgroundColor: "var(--color-neutral-3)",
  color: "var(--color-neutral-10)",
});
const props = defineProps({
  Category: {
    type: Object,
    default: {
      id: 0,
      name: "",
    },
  },
  size: {
    type: String,
    default: "medium",
  },
});
// 为不同的分类适配合适的颜色
switch (props.Category.name) {
      default:
        {
          (style.backgroundColor = "var(--color-neutral-3)"),
            (style.color = "var(--color-neutral-8)");
        }
        break;
      case "IT":
        {
          (style.backgroundColor = "rgb(var(--arcoblue-6))"),
            (style.color = "#fff");
        }
        break;
    }
</script>
<style lang="scss" scoped>
.a-tag {
  text-decoration: none;
}
</style>
