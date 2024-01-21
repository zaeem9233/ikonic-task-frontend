<template>
  <div class="flex items-center justify-center mt-10">
    <div class="w-[92%] bg-white text-center p-5 rounded-md shadow-md">
      
      <h1 class="text-2xl font-bold pb-4">Feedbacks</h1>

      <div class="flex flex-col justify-between items-center mb-2 border-t border-gray-200 pt-2 sm:flex-row">
        <div class="mb-2 sm:mb-0">
          <h2 class="text-xl font-bold">Feedback Title 1</h2>
          <p class="text-gray-700">Category: Product Improvement</p>
        </div>
        <div class="text-gray-700">
          <p>Posted on: Jan 15, 2023</p>
          <p>Posted by: John Doe</p>
        </div>
      </div>


      <!-- Pagination Buttons -->
      <div class="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mr-2">1</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mr-2">2</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">3</button>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  
}
</script>