import { createApp } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import './index.css'

const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: Object.entries(routes).map(([path, component]) => {
    return {
      path: path,
      component: component
    }
  })
    
})

const app = createApp({})
app.use(router)
app.mount('#app')
