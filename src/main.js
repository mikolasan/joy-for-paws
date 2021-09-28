import { createApp } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import VueApexCharts from "vue3-apexcharts";
import routes from './routes'
import './index.css'


const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes    
})

const app = createApp({})
app.use(router)
// The app.use(VueApexCharts) will make <apexchart> component available everywhere.
app.use(VueApexCharts);
app.mount('#app')
