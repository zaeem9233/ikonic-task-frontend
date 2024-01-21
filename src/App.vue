<template>
  <div id="app">
    <div class="bg-gray-200 flex flex-col min-h-screen">
      <div class="flex-grow">
        <div v-if="showMenu">
          <NavBar />
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
      <div v-if="showMenu">
        <FooterBar />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  },
  computed: {
    showMenu(){
      const routesWithoutMenu = ['/login', '/register', '/'];

      return !routesWithoutMenu.includes(this.$route.path);
    }
  }
};
</script>