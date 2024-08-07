<script setup>
import { reactive } from 'vue'
import md5 from 'md5'

const state = reactive({
  salt: '',
  plaintext: '',
  hashtext: null
})

function hashIt() {
  state.hashtext = md5(state.salt + state.plaintext)
}
</script>

<template>
  <h1>MD5 Salt + Hash</h1>
  <form @submit.prevent="hashIt()">
    <input
      type="text"
      id="salt"
      v-model="state.salt"
      placeholder="salt"
      autocomplete="off"
    />
    <input
      type="text"
      id="plaintext"
      v-model="state.plaintext"
      placeholder="input text"
      autocomplete="off"
    />
    <input type="submit" value="Hash it" />
  </form>
  <p>{{ state.hashtext }}</p>
</template>
