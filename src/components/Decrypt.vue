<script setup>
import { reactive } from 'vue'
import CryptoJS from 'crypto-js'

const state = reactive({
  key: '',
  ciphertext: '',
  plaintext: '',
  error: ''
})

async function decryptIt() {
  try {
    const bytes = CryptoJS.AES.decrypt(state.ciphertext, state.key)
    state.plaintext = bytes.toString(CryptoJS.enc.Utf8)
    state.error = ''
  } catch (error) {
    console.error('Decryption error:', error)
    state.plaintext = ''
    state.error = 'Decryption failed. Please check the key and ciphertext.'
  }
}
</script>

<template>
  <h1>AES Decrypt</h1>
  <form @submit.prevent="decryptIt()">
    <input type="text" id="key" v-model="state.key" placeholder="key" />
    <input
      type="text"
      id="ciphertext"
      v-model="state.ciphertext"
      placeholder="ciphertext"
    />

    <input type="submit" value="Decrypt it" />
  </form>

  <p v-if="state.plaintext">
    <label>Plaintext:</label>
    {{ state.plaintext }}
  </p>
  <p v-if="state.error">{{ state.error }}</p>
</template>
