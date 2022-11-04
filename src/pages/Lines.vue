<template>
  <Particles />
  <Header page="lines"/>
  <a-row style="margin-top: 22%" align="center" justify="center">
    <transition @enter="onEnter" @leave="onLeave" mode="out-in" appear>
      <Createline v-if="newlineType === ''" />
      <TopNode v-else-if="newlineType === 'timeline'" :line-type="newlineType"/>
      <LHeadNode v-else-if="newlineType === 'lifeline'" />
      <TopNode v-else-if="newlineType === 'progressline'" :line-type="newlineType"/>
    </transition>
  </a-row>
  <a-modal
    v-model:visible="CreationVisible"
    :title="CreationTitle"
    @cancel="handleCancel"
    @before-ok="handleBeforeOk"
  >
    <a-form :model="formL">
      <a-row>
        <a-form-item field="birthName" label="出生姓名">
          <a-input v-model="formL.birthName" :style="{ width: '320px' }" />
        </a-form-item>
        <a-form-item field="birthday" label="出生日期">
          <a-date-picker
            show-time
            format="YYYY-MM-DD HH:mm:ss"
            :style="{ width: '320px' }"
            v-model:value="formL.birthday"
          ></a-date-picker>
        </a-form-item>
        <a-form-item field="birthday" label="出生地">
          <a-cascader
            :options="options"
            :style="{ width: '320px' }"
            placeholder="选择地区或搜索地区"
            allow-search
            v-model="formL.birthplace"
          />
        </a-form-item>
        <a-form-item field="lifeGoal" label="人生目标">
          <a-input
            v-model="formL.lifeGoal"
            :style="{ width: '320px' }"
            placeholder="你人生最大的目标"
          />
        </a-form-item>
        <a-col :offset="1" :span="9">
          <a-form-item field="ReachAge" label="达成岁数" label-col-flex="65px">
            <a-input-number v-model="formL.ReachAge"/>
          </a-form-item>
        </a-col>
        <a-col :span="11">
          <a-form-item field="expectAge" label="期望寿命" label-col-flex="70px">
            <a-input-number placeholder="你想活多久？" v-model="formL.expectAge"/>
          </a-form-item>
        </a-col>
        <a-col :offset="2"  :span="10">
          <a-form-item field="father" label="父亲" label-col-flex="45px">
            <a-input
              v-model="formL.father"
              :style="{ width: '120px' }"
              placeholder="你生父的姓名"
            />
          </a-form-item>
        </a-col>
        <a-col :span="9">
          <a-form-item field="mother" label="母亲" label-col-flex="45px">
            <a-input
              v-model="formL.mother"
              :style="{ width: '120px' }"
              placeholder="你生母的姓名"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>
<script setup lang="ts">
import level from "province-city-china/dist/level.json";
import Particles from "@/components/Particles/index.vue";
import Header from "@/pages/Header.vue";
import Createline from "../components/CreateLine/CreateLine.vue";
import LHeadNode from "../components/Headnodes/LHeadNode.vue";
import TopNode from "../components/Headnodes/TopNode.vue";
import gsap from "gsap";
import "animate.css";
import { reactive, ref, watch } from "vue";
import { mainStore } from "@/store/index";
const store = mainStore();
const newlineType = ref(store.newlineType);
const CreationVisible = ref(false);
const CreationTitle = ref("创建进度条");
const formL = reactive({
  birthName: "",
  birthday: "",
  birthplace: "",
  lifeGoal: "",
  ReachAge: 0,
  expectAge: 0,
  father: "",
  mother: "",
});
const options = new Array();
for (let i = 0; i <= 33; i++) {
  // 省
  (options[i] = {
    value: "",
    label: "",
  }),
    (options[i].value = level[i].name);
  options[i].label = level[i].name;
  // 市
  options[i].children = new Array();
  for (let j = 0; j < level[i].children.length; j++) {
    (options[i].children[j] = {
      value: "",
      label: "",
    }),
      (options[i].children[j].value = level[i].children[j].name);
    options[i].children[j].label = level[i].children[j].name;
    // 区
    if (level[i].children[j].children) {
      options[i].children[j].children = new Array();
      for (let k = 0; k < level[i].children[j].children.length; k++) {
        (options[i].children[j].children[k] = {
          value: "",
          label: "",
        }),
          (options[i].children[j].children[k].value =
            level[i].children[j].children[k].name);
        options[i].children[j].children[k].label =
          level[i].children[j].children[k].name;
      }
    }
  }
}
const handleBeforeOk = (done: () => void) => {
  console.log(formL);
  window.setTimeout(() => {
    done();
    // prevent close
    // done(false)
  }, 3000);
};
const handleCancel = () => {
  CreationVisible.value = false;
};
function onEnter(el: gsap.TweenTarget, done: gsap.Callback) {
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
  } else if (store.newlineType === "lifeline") {
    gsap.fromTo(
      el,
      { x: 0, y: 0, scale: 1.3 },
      {
        x: 0,
        y: 0,
        scale: 1,
        duration: 2,
        ease: "elastic.out(1.2, 0.3)",
        onComplete: done,
      }
    );
  }
  console.log("onEnter-lines");
}
function onLeave(el: gsap.TweenTarget, done: gsap.Callback) {
  if (store.newlineType === "lifeline") {
    gsap.to(el, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      zIndex: 1,
      ease: "elastic.out(1.2, 0.3)",
      onComplete: done,
    });
  }
  console.log("onLeave-lines");
}
watch(
  () => store.newlineType,
  (val) => {
    if (val === "lifeline") {
      setTimeout(() => {
        CreationVisible.value = true;
      }, 3000);
      setTimeout(() => {
        newlineType.value = val;
        console.log("done-l");
      }, 5000);
    } else if (val === "timeline") {
      setTimeout(() => {
        newlineType.value = val;
        console.log("done-t");
      }, 0);
    } else if (val === "progressline") {
      setTimeout(() => {
        newlineType.value = val;
        console.log("done-p");
      }, 0);
    }
  }
);
</script>
<style></style>
