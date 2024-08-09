@ts-ignore
<script setup>
import { reactive } from 'vue'
import * as jose from 'jose'

const state = reactive({
  username: '',
  email: '',
  key: '',
  token: ''
})

async function signIt() {
  const secret = new TextEncoder().encode(state.key)
  const alg = 'HS256'

  const jwt = await new jose.SignJWT({
    username: state.username,
    email: state.email
  })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer('example:issuer')
    .setAudience('example:audience')
    .setExpirationTime('2h')
    .sign(secret)

  state.token = jwt
}
</script>

<template>
  <h1>JWT Sign</h1>

  <form @submit.prevent="signIt">
    <input v-model="state.username" type="text" placeholder="username" />
    <input v-model="state.email" type="email" placeholder="email" />
    <input v-model="state.key" type="text" placeholder="key" />
    <button type="submit">Sign it</button>
  </form>

  <p v-if="state.token">
    <label>Token</label>
    {{ state.token }}
  </p>
</template>
