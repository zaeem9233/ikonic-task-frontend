<template>
  <div class="max-w-2xl mx-auto p-8">
    <!-- Feedback Details -->
    <div class="bg-white shadow-md rounded-md p-4 mb-6">
      <h2 class="text-2xl font-bold mb-4">{{ feedback.title }}</h2>
      <p class="text-gray-600 mb-2">Category: {{ feedback.category }}</p>
      <p class="text-gray-700 mb-4">{{ feedback.description }}</p>
      <div class="flex justify-between items-center mb-2">
        <div class="text-gray-500">
          <p>Posted on: {{ formatDate(feedback.postedDate) }}</p>
          <p>Posted by: {{ feedback.user }}</p>
        </div>
      </div>
    </div>

    <!-- Comments Section -->
    <div class="mb-8">
      <h3 class="text-xl font-bold mb-4">Comments</h3>

      <!-- Display Existing Comments -->
      <div v-if="feedback.comments.length > 0">
        <div v-for="comment in feedback.comments" :key="comment.id" class="bg-gray-100 p-4 rounded-md mb-2">
          <p class="text-gray-700">{{ comment.content }}</p>
          <div class="text-gray-500 mt-2">
            <p>Posted on: {{ formatDate(comment.postedDate) }}</p>
            <p>Posted by: {{ comment.user }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>No comments yet.</p>
      </div>

      <!-- Comment Form -->
      <form @submit.prevent="postComment" class="mt-4">
        <label for="comment" class="block text-sm font-medium text-gray-700">Your Comment:</label>
        <textarea v-model="newComment" id="comment" name="comment" rows="4" class="custom-input"></textarea>
        <button type="submit" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">Post Comment</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedback: {
        title: "Sample Feedback",
        category: "General",
        description: "This is a sample feedback description.",
        postedDate: new Date(),
        user: "John Doe",
        comments: [
          { id: 1, content: "Great feedback!", postedDate: new Date(), user: "Jane Smith" },
          { id: 2, content: "I agree!", postedDate: new Date(), user: "Bob Johnson" },
        ],
      },
      newComment: "",
    };
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
    postComment() {
      if (this.newComment.trim() !== "") {
        this.feedback.comments.push({
          id: this.feedback.comments.length + 1,
          content: this.newComment,
          postedDate: new Date(),
          user: "Current User", // Replace with actual user information
        });
        this.newComment = "";
      }
    },
  },
};
</script>