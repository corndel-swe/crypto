<script setup>
import { RouterLink } from 'vue-router'
import { routes } from '../routes/index.js'
</script>

<template>
  <h1>Directory</h1>
  <p v-for="item in routes.filter(i => !!i.title)" :key="item.title">
    <RouterLink :to="item.path">{{ item.title }}</RouterLink>
  </p>
</template>
