<script setup>
import { reactive } from 'vue'
import * as jose from 'jose'

const state = reactive({
  token: '',
  key: '',
  verified: false,
  payload: null,
  header: null
})

async function verifyIt() {
  const secret = new TextEncoder().encode(state.key)

  try {
    const { payload, protectedHeader } = await jose.jwtVerify(
      state.token,
      secret
    )

    state.verified = true
    state.payload = payload
    state.header = protectedHeader
  } catch (err) {
    state.verified = false
    state.payload = null
    state.header = null
    window.alert(err)
  }
}
</script>

<template>
  <h1>JWT Verify</h1>

  <form @submit.prevent="verifyIt">
    <input v-model="state.token" type="text" placeholder="token" />
    <input v-model="state.key" type="text" placeholder="key" />
    <button type="submit">Verify it</button>
  </form>

  <p>
    <label>Verified</label>
    {{ state.verified }}
  </p>
  <div v-if="state.verified">
    <p>
      <label>Payload</label>
      {{ JSON.stringify(state.payload) }}
    </p>
    <p>
      <label>Header</label>
      {{ JSON.stringify(state.header) }}
    </p>
  </div>
</template>
