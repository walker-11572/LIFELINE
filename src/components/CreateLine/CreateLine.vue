<template>
  <div class="d-flex">
    <!-- 时间进度条 -->
    <transition @enter="onEnter_t" @leave="onLeave_t" :css="false">
      <TopNode
        v-if="isStart || lineType === 'timeline'"
        @click="Create('timeline')"
        line-type="timeline"
      />
    </transition>
    <!-- 创建按钮 -->
    <transition leave-active-class="animate__animated animate__fadeOut">
      <div
        class="d-flex justify-content-center"
        style="margin: 0 70px 0 70px"
        v-if="lineType !== 'progressline' && lineType !== 'timeline'"
      >
        <transition @enter="onEnter_c" @leave="onLeave_c" mode="out-in" appear>
          <!-- 创建进度条 -->
          <div v-if="!isStart && store.newlineType === ''" style="z-index: 1">
            <a-tooltip background-color="var(--color-neutral-1)">
              <a-button
                shape="circle"
                type="primary"
                style="width: 4.2vw; height: 4.2vw"
                @click="isStart = !isStart"
                class="btn-shadow btn-create"
              >
                <template #icon>
                  <svg
                    t="1666575889032"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2603"
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(-2,0)"
                  >
                    <path
                      d="M166.464 448.704l212.64 128.736a32 32 0 1 1-33.152 54.72l-266.528-161.312a32 32 0 0 1 4.256-56.928l832-347.456a32 32 0 0 1 43.744 35.52l-145.76 768a32 32 0 0 1-48.576 21.056l-270.208-171.328a32 32 0 0 1 34.24-54.08l230.464 146.112L885.44 148.48 166.464 448.704z"
                      p-id="2604"
                    ></path>
                    <path
                      d="M416 632.096V896a32 32 0 0 1-64 0v-278.624a32 32 0 0 1 11.2-24.32L752.192 260a32 32 0 0 1 41.6 48.64L416 632.064z"
                      p-id="2605"
                    ></path>
                  </svg>
                </template>
              </a-button>
              <template #content>
                <div class="tip-title">创建进度条</div>
                <div style="color: var(--color-neutral-10); text-align: center">
                  目标要有规划
                </div>
              </template>
            </a-tooltip>
          </div>
          <!-- 人生进度条 -->
          <LHeadNode v-else-if="isStart" @click="Create('lifeline')" />
        </transition>
        <Ripple v-if="!isStart" />
      </div>
    </transition>
    <!-- 普通进度条 -->
    <transition @enter="onEnter_p" @leave="onLeave_p" :css="false">
      <TopNode
        v-if="isStart || lineType === 'progressline'"
        @click="Create('progressline')"
        line-type="progressline"
      />
    </transition>
  </div>
</template>
<script setup lang="ts">
import TopNode from "../Headnodes/TopNode.vue";
import LHeadNode from "../Headnodes/LHeadNode.vue";
import Ripple from "@/components/Ripple.vue";
import "animate.css";
import gsap from "gsap";
import { reactive, toRefs, ref, watch } from "vue";
import { mainStore } from "@/store/index";
const store = mainStore();
const isStart = ref(false);
const lineType = ref(store.newlineType);
function Create(value: string) {
  isStart.value = false;
  lineType.value = value;
  store.newlineType = value;
}
function onEnter_c(el: gsap.TweenTarget, done: gsap.Callback) {
  if (store.newlineType === "") {
    gsap.fromTo(
      el,
      { x: 0, y: 0, scale: 1.3 },
      {
        x: 0,
        y: 0,
        scale: 1,
        duration: 4,
        ease: "elastic.out(1.2, 0.3)",
        onComplete: done,
      }
    );
  }
  console.log("onEnter-Createline");
}
function onLeave_c(el: gsap.TweenTarget, done: gsap.Callback) {
  if (store.newlineType === "lifeline") {
    gsap.to(el, {
      x: 0,
      y: 0,
      scale: 1.3,
      duration: 6,
      zIndex: 1,
      ease: "elastic.out(1.2, 0.3)",
      onComplete: done,
    });
    console.log("onLeave-Createline");
  } else {
    gsap.to(el, {
      duration: 0.5,
      scale: 1.3,
      onComplete: done,
    });
  }
}
function onEnter_t(el: gsap.TweenTarget, done: gsap.Callback) {
  gsap.fromTo(
    el,
    { x: 100, y: 0, scale: 1.3, opacity: 0 },
    {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 0.7,
      onComplete: done,
    }
  );
}
function onEnter_p(el: gsap.TweenTarget, done: gsap.Callback) {
  gsap.fromTo(
    el,
    { x: -100, y: 0, scale: 1.3, opacity: 0 },
    {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 0.7,
      onComplete: done,
    }
  );
  console.log("onEnter-p");
}
function onLeave_t(el: gsap.TweenTarget, done: gsap.Callback) {
  gsap.to(el, {
    x: 100,
    y: 0,
    scale: 1.3,
    opacity: 0,
    duration: 1,
    onComplete: done,
  });

  console.log("onLeave-t");
}
function onLeave_p(el: gsap.TweenTarget, done: gsap.Callback) {
  gsap.to(el, {
    x: -100,
    y: 0,
    scale: 1.3,
    opacity: 0,
    duration: 1,
    onComplete: done,
  });
  console.log("onLeave-p");
}
</script>
<style>
.d0-5 {
  animation-delay: 0.8s;
}
.btn-shadow {
  box-shadow: 0 0 30px 0.1vw rgba(var(--arcoblue-6), 0.5);
  transition: width 1s linear;
}
.tip-title {
  font-size: 1vw;
  font-weight: bolder;
  text-align: center;
  color: var(--color-neutral-10);
}
</style>
