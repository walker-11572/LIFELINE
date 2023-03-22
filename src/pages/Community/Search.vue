<template>
    <h1>SearchResult</h1>
    <h2>{{ route.params.keyword }}</h2>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<style scoped></style>