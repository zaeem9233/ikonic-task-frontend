<template>
  <div class="flex items-center justify-center mt-10">
    <div class="md:w-1/2 sm:w-[70%] w-[92%] bg-white text-center p-5 rounded-md  shadow-md">
      
      <h1 class="text-2xl font-bold mb-8">Create Feedback</h1>
      
      <div class="my-2">
        <input name="title" type="text" placeholder="Title of Feedback" class="custom-input">
      </div>

      <div class="my-2">
        <select name="category" class="custom-select">
            <option value="" disabled selected>Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
      </div>

      <div class="my-2">
        <textarea name="description" class="custom-input" cols="30" rows="10"></textarea>
      </div>

      <div class="flex items-center justify-center mt-2">
        
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" type="submit">
           Create Feedback
        </button>

      </div>

    </div>
  </div>
</template>

<script>

export default {
  
}
</script>