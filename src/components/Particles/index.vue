<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :options="optionsP"
  />
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { generate, presetColor, getPresetColors } from "@arco-design/color";
const { gray } = getPresetColors();
const optionsP = reactive({
  fpsLimit: 50,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.6,
        size: 10,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: gray.primary,
    },
    links: {
      color: gray.primary,
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 60,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
});
async function particlesInit(engine: Engine): Promise<void> {
  await loadFull(engine);
}
</script>
