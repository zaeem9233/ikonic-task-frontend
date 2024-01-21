<template>
  <div class="h-screen flex items-center justify-center">
    <div class="md:w-1/3 w-1/1 bg-white text-center p-5 rounded-md">
      <div class="flex justify-center">
        <img class="w-60" src="/logo.png" alt="Logo">
      </div>
      
      <h1 class="text-2xl font-bold mb-8">Feedback Management System</h1>
      
      <!-- Login Button -->
      <router-link to="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
        Login
      </router-link>
  
      <!-- Register Button -->
      <router-link to="/register" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
        Register
      </router-link>
    </div>
  </div>
</template>