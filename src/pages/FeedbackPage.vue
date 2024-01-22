<template>
  <div v-for="fb in feedback" :key="fb.id" class="max-w-2xl mx-auto p-8">
    <!-- Feedback Details -->
    <div class="bg-white shadow-md rounded-md p-4 mb-6">
      <h2 class="text-2xl font-bold mb-4">{{ fb.title }}</h2>
      <p class="text-gray-800 mb-2">Category: {{ fb.category.name }}</p>
      <p class="text-gray-800 mb-4">{{ fb.description }}</p>
      <div class="flex justify-between items-center mb-2">
        <div class="text-gray-700">
          <p>Posted on: {{ fb.created_at }}</p>
          <p>Posted by: {{ fb.user.name }}</p>
        </div>
      </div>
    </div>

    <!-- Comments Section -->
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-4">Comments</h3>

      <!-- Display Existing Comments -->
      <div v-if="fb.comment.length > 0">
        <div v-for="cmnt in fb.comment" :key="cmnt.id" class="bg-gray-50 p-4 rounded-md mb-2 shadow-sm">
          <div v-html="cmnt.comment"></div>
          <div class="text-gray-500 mt-2">
            <p>Posted on: {{ cmnt.created_at }}</p>
            <p>Posted by: {{ cmnt.user.name }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No comments yet.</p>
      </div>

      <!-- Comment Form -->
      <div v-if="showNotification" class="fixed bottom-0 right-0 m-4 p-4 bg-green-500 hover:bg-green-700 text-white rounded shadow">
        {{ notificationMessage }}
      </div>

      
      <h6 for="comment" class="block text-md font-medium text-gray-700 mt-2">Post Comment</h6>
      <p class="text-md text-yellow-500">Note: You can use bold, italic and code tags for better readable comment. </p>
      <p class="text-md text-yellow-500">Note: You can also mention other users by @ and first three letters of user's name. </p>
      <form @submit.prevent="postComment" class="">
        <textarea v-model="comment" @input="handleInput" id="comment" name="comment" rows="4" class="custom-input"></textarea>
        <div v-if="errors.comment" class="flex items-center justify-start">
          <span class="text-red-500">{{ errors.comment[0] }}</span>
        </div>
        <button type="submit" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">Post Comment</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: '',
      feedback_id: '',
      user_id: '',
      showNotification: false,
      notificationMessage: '',
      errors: [],
      feedback: [],
      feedbackId: this.$route.params.feedbackId,
      formats: {
        bold: false,
        italic: false,
        code: false,
      }
    };
  },
  mounted(){
    this.fetchFeedbackDetails();
  },
  methods: {
    async fetchFeedbackDetails(){
      const url = 'http://127.0.0.1:8000/api/v1/feedback/'+this.feedbackId;
      const token = localStorage.getItem('token');
      try{
        const response = await this.$axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.feedback = response.data.feedback;
        // console.log(this.feedback);
      }catch(error){
        console.log('Error Fecthing Feedback:', error);
      }
    },
    async postComment(){
      const userId = localStorage.getItem('user_id');
      const token = localStorage.getItem('token');
      try{
        await this.$axios.post('http://127.0.0.1:8000/api/v1/comment', {
          comment: this.comment,
          user_id: userId,
          feedback_id: this.feedbackId
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        });
        this.resetForm();
        this.fetchFeedbackDetails();

        this.showNotification = true;
        this.notificationMessage = 'Comment posted successfully!';

        // Reset notification after a delay
        setTimeout(() => {
          this.showNotification = false;
          this.notificationMessage = '';
        }, 3000); 

      }catch(error){
        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors;
        } else {
          console.error('Posting Comment failed:', error.message);
        }
      }
    },
    resetForm() {
      this.comment = '';
    },
    async handleInput(){
      let mentions = this.comment.match(/@\w+/g);
      if(mentions){
        const lastMention = mentions[mentions.length - 1];
        if (this.comment.indexOf(lastMention) + lastMention.length < this.comment.length && this.comment[this.comment.indexOf(lastMention) + lastMention.length] === ' ') {
          console.log('Not mentioning');
        } else {
          let mention = mentions[0].replace(/@/g, '');
          const vals = this.feedback;
          vals.forEach(e => {
            e.comment.forEach(ee => {
              if (ee.user.name.substring(0, 3) === mention) {
                mentions = ee.user.name;
                this.comment = this.comment.replace(new RegExp(mention, 'g'), ee.user.name);
              }
            });
          });

        }

      }
    }
  },
};
</script>