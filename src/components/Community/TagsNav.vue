<template>
  <a-row class="tags">11</a-row>
</template>
<style scoped lang="scss">
.tags {
  box-sizing: border-box;
  width: 100%;
  top: 60px;
  height: 50px;
  border-bottom: 1px solid var(--color-neutral-3);
  background-color: var(--color-bg-1);
  position: fixed;
  z-index: 10;
  left: 0;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 200%;
    z-index: -1;
    background-color: var(--color-bg-1);
  }
}
</style>
