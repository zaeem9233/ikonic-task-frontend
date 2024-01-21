<template>
  <div class="h-screen flex items-center justify-center">
    <div class="md:w-1/3 sm:w-1/2 w-[92%] bg-white text-center p-5 rounded-md">
      
      <LogoHome />
      
      <h1 class="text-2xl font-bold mb-8">Register</h1>
      
      <div class="my-2">
        <input type="text" placeholder="Full Name" class="custom-input">
      </div>

      <div class="my-2">
        <input type="text" placeholder="Email" class="custom-input">
      </div>

      <div class="my-2">
        <input type="text" placeholder="Username" class="custom-input">
      </div>
     
      <div class="my-2">
        <input type="text" placeholder="Password" class="custom-input">
      </div>

      <div class="my-2">
        <input type="text" placeholder="Confirm Password" class="custom-input">
      </div>

      <div class="flex items-center justify-center mt-2">
        
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" type="submit">
           Register
        </button>

        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-4" type="reset">
           Reset
        </button>

      </div>

      <div class="border-t border-gray-200 mt-3">
        <router-link to="/login">
          <p class="py-2 text-blue-500 hover:text-blue-700">Already have account?</p>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import LogoHome from '@/components/LogoHome.vue';

export default {
  components: {
    LogoHome
  }
}
</script>