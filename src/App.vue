<!-- src/App.vue -->
<template>
  <div id="app">
    <div class="bg-gray-200 flex flex-col min-h-screen">
      <div class="flex-grow">
        <NavBar />
      </div>
      <FooterBar />
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
  }
};
</script>