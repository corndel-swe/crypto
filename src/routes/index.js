import { createWebHistory, createRouter } from 'vue-router'

import Hash from '../components/Hash.vue'
import Encrypt from '../components/Encrypt.vue'
import Decrypt from '../components/Decrypt.vue'

const routes = [
  { path: '/hash', component: Hash },
  { path: '/encrypt', component: Encrypt },
  { path: '/decrypt', component: Decrypt }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router