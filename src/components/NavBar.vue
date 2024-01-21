<template>
   <header class="bg-white py-2 shadow-md">
      <nav class="flex justify-between items-center w-[92%] mx-auto">
         
         <div>
            <router-link to="feedbacks">
               <img class="w-30 h-8" src="/logo.png" alt="Logo">
            </router-link>
         </div>

         <div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-40 left-0 top-[-100%] md:w-auto  w-full flex items-center px-5" :class="{ 'top-[8%]': isMenuOpen }">
            <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">

               <li>
                  <router-link class="hover:text-gray-500" to="/feedbacks">
                     Feedbacks
                  </router-link>
               </li>
               
               <li>
                  <router-link class="hover:text-gray-500" to="/create">
                     Create
                  </router-link>
               </li>

            </ul>
         </div>

         <div class="flex items-center gap-6">

            <button @click="logout" class="bg-gray-500 text-white py-2 rounded-md px-3 hover:bg-gray-700">
               Logout
            </button>

            <div v-if="isMenuOpen==false" class="text-blue-500 text-3xl cursor-pointer md:hidden">
               <ion-icon @click="onToggleMenu" name="menu"></ion-icon>
            </div>
            <div v-else class="text-blue-500 text-3xl cursor-pointer md:hidden">
               <ion-icon @click="onToggleMenu" name="close"></ion-icon>
            </div>

         </div>

      </nav>
   </header>
</template>

<script>
   export default{
      data() {
         return {
            isMenuOpen: false,
         }
      },
      methods: {
         logout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
         },
         onToggleMenu(){
            this.isMenuOpen = !this.isMenuOpen;
         }
      },
   }
</script>