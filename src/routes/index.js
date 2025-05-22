import { createWebHistory, createRouter } from 'vue-router'

import Directory from '../components/Directory.vue'
import Hash from '../components/Hash.vue'
import Salt from '../components/Salt.vue'
import Encrypt from '../components/Encrypt.vue'
import Decrypt from '../components/Decrypt.vue'
import Sign from '../components/Sign.vue'
import Verify from '../components/Verify.vue'
import ContainerQuery from '../components/ContainerQuery.vue'
import APIExplorer from '../components/APIExplorer.vue'

export const routes = [
  { path: '/', component: Directory },
  { title: 'Hash', path: '/hash', component: Hash },
  { title: 'Salt and hash', path: '/salt', component: Salt },
  { title: 'Encrypt', path: '/encrypt', component: Encrypt },
  { title: 'Decrypt', path: '/decrypt', component: Decrypt },
  { title: 'Sign JWT', path: '/sign', component: Sign },
  { title: 'Verify JWT', path: '/verify', component: Verify },
  {
    title: 'Responsive CSS',
    path: '/container-query',
    component: ContainerQuery
  },
  { title: 'API Explorer', path: '/api-explorer', component: APIExplorer }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
