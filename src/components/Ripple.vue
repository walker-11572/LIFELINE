<template>
  <div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<style lang="scss" scoped>
/* 波纹动效（向外） */
div {
  position: absolute;
  width: 4.2vw;
  height: 4.2vw;
  span {
    border-radius: 50%;
    width: 4.2vw;
    height: 4.2vw;
    background-color: rgb(var(--arcoblue-6), 0.5);
    position: absolute;
    animation: ripple 4s infinite;
    display: inline-block;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 1s;
    }
    &:nth-child(3) {
      animation-delay: 2s;
    }
    &:nth-child(4) {
      animation-delay: 3s;
    }
  }
}
@keyframes ripple {
  0% {
    transform: scale(1);
  }
  50% {
  }
  100% {
    transform: scale(2);
    background-color: rgba(var(--arcoblue-1), 0);
  }
}
</style>
