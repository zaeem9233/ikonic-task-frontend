<template>
   <header class="bg-white py-2 shadow-md">
      <nav class="flex justify-between items-center w-[92%] mx-auto">
         
         <div>
            <router-link to="feedbacks">
               <img class="w-30 h-8" src="/logo.png" alt="Logo">
            </router-link>
         </div>

         <div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-40 left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
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

            <router-link to="/login" class="bg-blue-500 text-white py-2 rounded-md px-3 hover:bg-blue-700">
               Sign in
            </router-link>

         </div>

      </nav>
   </header>
</template>