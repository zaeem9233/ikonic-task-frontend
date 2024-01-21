<template>
  <div class="flex items-center justify-center mt-10">
    <div class="md:w-1/2 sm:w-[70%] w-[92%] bg-white text-center p-5 rounded-md  shadow-md">
      
      <h1 class="text-2xl font-bold mb-8">Create Feedback</h1>
      
      <form @submit.prevent="createFeedback">
        <div class="my-2">
          <input v-model="title" name="title" type="text" placeholder="Title of Feedback" class="custom-input">
          <div v-if="errors.title" class="flex items-center justify-start">
            <span class="text-red-500">{{ errors.title[0] }}</span>
          </div>
        </div>

        <div class="my-2">
          <select v-model="category_id" @change="onCategoryChange" name="category" class="custom-select">
              <option value="" disabled selected>Select an option</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
          <div v-if="errors.category_id" class="flex items-center justify-start">
            <span class="text-red-500">{{ errors.category_id[0] }}</span>
          </div>
        </div>

        <div class="my-2">
          <textarea v-model="description" name="description" class="custom-input" cols="30" rows="10"></textarea>
          <div v-if="errors.description" class="flex items-center justify-start">
            <span class="text-red-500">{{ errors.description[0] }}</span>
          </div>
        </div>

        <div class="flex items-center justify-center mt-2">
          
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" type="submit">
            Create Feedback
          </button>

        </div>
      </form>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '',
      categories: [],
      category_id: '',
      description: '',
      errors: {}
    }
  },
  mounted(){
    this.fecthCategories();
  },
  methods: {
    async fecthCategories(){
      const token = localStorage.getItem('token'); 
      try{
        const response = await this.$axios.get('http://127.0.0.1:8000/api/v1/categories', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.categories = response.data.categories;
      }catch(error){
        console.log('Error Fecthing Categories:', error);
      }
    },
    async createFeedback(){
      const token = localStorage.getItem('token'); 
      const userId = localStorage.getItem('user_id'); 
      try{
        const response = await this.$axios.post('http://127.0.0.1:8000/api/v1/feedback', {
          title: this.title,
          category_id: this.category_id,
          user_id: userId,
          description: this.description
        },  {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        });
        this.categories = response.data.categories;
        this.$router.push('/feedbacks');
      }catch(error){
        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors;
        } else {
          console.log('Error Creating Feedback:', error);
        }
      }
    }
  }
}
</script>