import { createApp } from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { createRouter, createWebHistory } from 'vue-router'
import PrimeLine from "./components/PrimeLine";


const routes = [
  {
    path: '/charts/primeline',
    name: 'PrimeLine Chart',
    component: PrimeLine
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


const app = createApp(App)
app.use(router)
app.use(VueSidebarMenu)
app.mount('#app')
