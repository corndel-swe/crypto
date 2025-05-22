<script setup>
import { reactive, computed, ref } from 'vue'
import { codeToHtml } from 'shiki'

const req = reactive({
  method: 'GET',
  base: 'https://api.dictionaryapi.dev',
  endpoint: '/api/v2/entries/en/hello'
})

const json = ref()

async function doFetch() {
  try {
    const res = await fetch(new URL(req.endpoint, req.base), {
      method: req.method
    })
    const data = await res.json()

    json.value = await codeToHtml(JSON.stringify(data, null, 2), {
      lang: 'json',
      theme: 'vitesse-dark'
    })
  } catch (error) {
    window.alert(error)
  }
}
</script>

<template>
  <h1>API Request</h1>
  <form @submit.prevent="doFetch()">
    <input type="text" v-model="req.base" placeholder="base url" />
    <input type="text" v-model="req.endpoint" placeholder="endoint" />
    <select name="method" id="method" v-model="req.method">
      <option value="GET">GET</option>
      <option value="POST">POST</option>
      <option value="PUT">PUT</option>
      <option value="DELETE">DELETE</option>
    </select>
    <input type="submit" />
  </form>

  <div class="code" v-if="json" v-html="json"></div>
</template>

<style>
.code {
  text-align: left;
}

.shiki {
  overflow-x: scroll;
}

.vitesse-dark {
  background-color: transparent !important;
}
</style>
