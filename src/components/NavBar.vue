<template>
  <header class="bg-white py-2 shadow-md">
    <nav class="flex justify-between items-center w-[92%] mx-auto">
       
       <div>
          <img class="w-30 h-8" src="/logo.png" alt="Logo">
       </div>

       <div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-40 left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
          <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
             
             <li>
                <router-link class="hover:text-gray-500" to="/">
                   Home
                </router-link>
             </li>

             <li>
                <a class="hover:text-gray-500" href="/feedbacks">
                   Feedbacks
                </a>
             </li>
             
             <li>
                <a class="hover:text-gray-500" href="/create">
                   Create
                </a>
             </li>

          </ul>
       </div>

       <div class="flex items-center gap-6">
          <router-link to="/login" class="bg-blue-500 text-white py-2 rounded-full px-3 hover:bg-blue-700">
             Sign in
          </router-link>

          <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
       </div>

    </nav>
 </header>
</template>