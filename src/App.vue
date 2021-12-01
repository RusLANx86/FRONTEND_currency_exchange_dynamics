<template>
  <sidebar-menu :menu="menu"/>
    <div id="nav">
    <router-link to="/charts/primeline">Home</router-link>
  </div>
  <router-view/>
</template>

<script>
import {SidebarMenu} from 'vue-sidebar-menu'


export default {
  name: 'app',
  components: {
    SidebarMenu
  },
  data(){
    return{
        menu: [
          {
            header: 'Главное меню',
            hiddenOnCollapse: true
          },
          {
            href: '/',
            title: 'Dashboard',
            icon: 'fa fa-user'
          },
          {
            href: '/charts',
            title: 'Графики',
            icon: 'fa fa-chart-area',
            child: [
              {
                href: '/charts/primeline',
                title: 'PrimeLine'
              }
            ]
          }
        ]
    }
  }
}
</script>

<style>

</style>