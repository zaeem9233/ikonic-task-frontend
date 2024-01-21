<template>
  <div class="flex items-center justify-center mt-10">
    <div class="w-[92%] bg-white text-center p-5 rounded-md shadow-md">
      
      <h1 class="text-2xl font-bold pb-4">Feedbacks</h1>

      <div v-for="feedback in feedbacks" :key="feedback.id">
        <div class="flex flex-col justify-between items-center mb-2 border-t border-gray-200 pt-2 md:flex-row">
          <div class="mb-2 sm:mb-0 md:text-left">
            <h2 class="text-xl font-bold">
              {{ feedback.title }}
            </h2>
            <p class="text-gray-700">Category: {{ feedback.category.name }}</p>
          </div>
          <div class="text-gray-700 md:text-right">
            <p>Posted on: {{ feedback.created_at }}</p>
            <p>Posted by: {{ feedback.user.name }}</p>
          </div>
        </div>
      </div>


      <!-- Pagination Buttons -->
      <div class="flex justify-center border-t border-gray-300 pt-3">
        <button v-for="link in paginationData" :key="link.label" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mr-2" @click="fecthPage(link.url)" :disabled="!link.url" :class="{ 'hidden': link.url === null }">
          {{ escapeHtml(link.label) }}
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      paginationData: [], 
      feedbacks: [],
    }
  },
  mounted(){
    this.fetchFeedbacks();
  },
  methods: {
    async fetchFeedbacks(url = 'http://127.0.0.1:8000/api/v1/feedback'){
      const token = localStorage.getItem('token');
      try{
        const response = await this.$axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.feedbacks = response.data.feedbacks.data;
        this.paginationData = response.data.feedbacks.links;
      }catch(error){
        console.log('Error Fecthing Feedbacks:', error);
      }
    },
    escapeHtml(html) {
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent;
    },
    fecthPage(url){
      if(url){
        this.fetchFeedbacks(url);
      }
    }
  }
}
</script>