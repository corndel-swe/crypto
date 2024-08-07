<script setup>
import { reactive } from 'vue'
import CryptoJS from 'crypto-js'

const state = reactive({
  plaintext: '',
  key: '',
  ciphertext: ''
})

async function encryptIt() {
  const key = state.key
  const plaintext = state.plaintext

  const ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString()
  state.ciphertext = ciphertext
}
</script>

<template>
  <h1>AES Encrypt</h1>
  <form @submit.prevent="encryptIt()">
    <input
      type="text"
      id="plaintext"
      v-model="state.key"
      placeholder="key"
      autocomplete="off"
    />
    <input
      type="text"
      id="plaintext"
      v-model="state.plaintext"
      placeholder="plaintext"
      autocomplete="off"
    />
    <input type="submit" value="Encrypt it" />
  </form>
  <p v-if="state.ciphertext">
    <label>Ciphertext</label>
    {{ state.ciphertext }}
  </p>
</template>
