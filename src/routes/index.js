import { createWebHistory, createRouter } from 'vue-router'

import Hash from '../components/Hash.vue'
import Salt from '../components/Salt.vue'
import Encrypt from '../components/Encrypt.vue'
import Decrypt from '../components/Decrypt.vue'
import Sign from '../components/Sign.vue'
import Verify from '../components/Verify.vue'
import ContainerQuery from '../components/ContainerQuery.vue'

const routes = [
  { path: '/hash', component: Hash },
  { path: '/salt', component: Salt },
  { path: '/encrypt', component: Encrypt },
  { path: '/decrypt', component: Decrypt },
  { path: '/sign', component: Sign },
  { path: '/verify', component: Verify },
  { path: '/container-query', component: ContainerQuery }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
