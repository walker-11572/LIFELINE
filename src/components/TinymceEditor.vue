<template>
  <editor
    api-key="6wux3hbhm5bmslqm94h3kplfzoryf95itxa2c73ol4jm7anj"
    cloud-channel="6"
    :disabled="false"
    :id="uuid"
    :init="{
      language: 'zh_CN',
      skin: skin,
      content_css: content_css,
      menubar: menubar,
      icons: 'jam',
      height: height,
      toolbar_location: toolbar_location,
    }"
    initial-value=""
    :inline="false"
    model-events=""
    plugins="wordcount table link codesample code emoticons image help lists save preview "
    tag-name="div"
    :toolbar="toolbar"
    value=""
    style="width: 100%"
    placeholder="输入评论"
  />
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import Editor from "@tinymce/tinymce-vue";
const props = defineProps(["type"]);
let uuid = "uuid";
let skin = "";
let content_css = "";
let height = 240;
let menubar = true;
let toolbar_location = "";
let toolbar =
  "blocks | bold italic underline strikethrough | numlist bullist | image link codesample emoticons save";
switch (props.type) {
  case "blogReply": {
    uuid = "blogReply";
    skin = "naked";
    height = 180;
    menubar = true;
    toolbar =
      "bold italic underline strikethrough | numlist bullist | image link codesample emoticons";
    break;
  }
  case "blogCommentReply": {
    uuid = "blogCommentReply";
    skin = "outside";
    height = 150;
    menubar = false;
    toolbar =
      "bold italic underline strikethrough | numlist bullist | image link codesample emoticons";
    content_css = "material-classic";
    break;
  }
   case "newBlog": {
    uuid = "newBlog";
    skin = "oxide";
    height = 300;
    menubar = true;
    toolbar =
      "bold italic underline strikethrough | numlist bullist | image link codesample emoticons";
    content_css = "material-classic";
    break;
  }
}
</script>
<style lang="scss"></style>
