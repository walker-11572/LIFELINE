<template>
  <div class="d-flex justify-content-center">
    <a-tooltip background-color="var(--color-neutral-1)">
      <a-button
        shape="circle"
        type="primary"
        style="width: 4.2vw; height: 4.2vw; z-index: 1"
        class="btn-shadow rings"
      >
        <template #icon>
          <img :src="iconSrc" alt="" />
        </template>
      </a-button>
      <template #content>
        <div class="tip-title">{{ tipTitle }}</div>
        <div style="color: var(--color-neutral-10)">
          {{ tipContent }}
        </div>
      </template>
    </a-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
const props = defineProps({
  lineType: String,
});
const tips = reactive({
  timeline: {
    title: "时间进度条",
    content: "进度将随着时间的流逝自动推进",
  },
  progressline: {
    title: "普通进度条",
    content: "手动推进进度，具体值由节点根据节点数计算得出",
  },
  lifeline: {
    title: "人生进度条",
    content: "从出生到过世，记录并规划你的每一天",
  },
});
const iconSrc = ref("/timeline.svg");
const tipTitle = ref(tips.timeline.title);
const tipContent = ref(tips.timeline.content);
if (props.lineType === "progressline") {
  iconSrc.value = "/progressline.svg";
  tipTitle.value = tips.progressline.title;
  tipContent.value = tips.progressline.content;
} else if (props.lineType === "lifeline") {
  iconSrc.value = "public/lifeline.svg";
  tipTitle.value = tips.lifeline.title;
  tipContent.value = tips.lifeline.content;
}
</script>
<style lang="scss" scoped></style>
