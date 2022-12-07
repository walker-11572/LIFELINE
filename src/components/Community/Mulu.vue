<template>
  <a-card class="mt-4 ms-4" :bordered="false">
    <span style="color: var(--color-neutral-10); font-size: 17px">目录</span>
    <a-divider />
    <a-anchor :boundary="80" scroll-container="Window" style="width: 95%">
      <!-- h1 -->
      <a-anchor-link v-for="h1 in content" :key="h1.id" :href="'#' + h1.id"
        >{{ h1.text }}
        <!-- h2 -->
        <template #sublist>
          <a-anchor-link
            v-for="h2 in h1.children"
            :key="h2.id"
            :href="'#' + h2.id"
            >{{ h2.text }}
            <!-- h3 -->
            <template #sublist>
              <a-anchor-link
                v-for="h3 in h2.children"
                :key="h3.id"
                :href="'#' + h3.id"
                >{{ h3.text }}
                <!-- h4 -->
                <template #sublist>
                  <a-anchor-link
                    v-for="h4 in h3.children"
                    :key="h4.id"
                    :href="'#' + h4.id"
                    >{{ h4.text }}</a-anchor-link
                  >
                </template>
              </a-anchor-link>
            </template>
          </a-anchor-link>
        </template>
      </a-anchor-link>
    </a-anchor></a-card
  >
</template>
<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
const props = defineProps(["headerTags"]);
var content: {
  id: string;
  tag: string;
  text: string;
  level: number;
  pid: string;
  children: {
    id: string;
    tag: string;
    text: string;
    level: number;
    pid: string;
    children: {
      id: string;
      tag: string;
      text: string;
      level: number;
      pid: string;
      children: {
        id: string;
        tag: string;
        text: string;
        level: number;
        pid: string;
        children: [];
      }[];
    }[];
  }[];
}[] = reactive([]);
let nodes: {
  id: string;
  tag: string;
  text: string;
  level: number;
  pid: string;
}[] = [];

{
  props.headerTags.forEach((item, index, arr) => {
    let c = "";
    let d = "";
    let e = "";
    c = item.slice(1, 3);
    d = props.headerTags[index].match(
      /(?<=((<[h1-6-]+?){0,1}>))([\s\S]+)(?=([\s]{0,1}<\/[h1-6-]+(>{0,1})))/g
    )[0];
    e = `h-${index + 1}`;
    function getLevel(str: string | any[]) {
      const result = str.slice(-1);
      return Number(result);
    }
    nodes.push({
      id: e,
      tag: c,
      text: d,
      level: getLevel(c),
      pid: "",
    });
  });
  for (let i = 0; i < nodes.length; i++) {
    let f = nodes.filter((item) => {
      if (item.tag === nodes[i].tag) {
        return item.pid;
      }
    });
    nodes[i].pid =
      nodes[i].level > nodes[i !== 0 ? i - 1 : 0].level
        ? nodes[i !== 0 ? i - 1 : 0].id
        : nodes[i].level === nodes[i !== 0 ? i - 1 : 0].level
        ? nodes[i !== 0 ? i - 1 : 0].pid
        : f[0].pid;
  }
}
function arrayToTree(data: any[]) {
  const treeList: any[] = [];
  const map = {};
  data.forEach((item) => {
    if (!item.children) {
      item.children = [];
    }
    map[item.id] = item;
  });
  data.forEach((item: { pid: string | number }) => {
    const parent = map[item.pid];
    if (parent) {
      parent.children.push(item);
    } else {
      treeList.push(item);
    }
  });
  return treeList;
}
content = arrayToTree(nodes);
</script>
