<template>
  <div class="h-screen flex items-center justify-center">
    <div class="md:w-1/3 sm:w-1/2 w-[92%] bg-white text-center p-5 rounded-md  shadow-md">
      
      <LogoHome />
      
      <h1 class="text-2xl font-bold mb-8">Login</h1>
      
      <div v-if="error" class="flex items-center justify-center bg-red-100 hover:bg-red-200 py-2 text-red-500 hover:text-red-700">
        <span>Error! {{ error }}</span>
      </div>

      <form @submit.prevent="login">
        <div class="my-2">
          <input v-model="email" type="text" placeholder="Email" class="custom-input">
          <div v-if="errors.email" class="flex items-center justify-start">
            <span class="text-red-500">{{ errors.email[0] }}</span>
          </div>
        </div>
       
        <div class="my-2">
          <input v-model="password" type="password" placeholder="Password" class="custom-input">
          <div v-if="errors.password" class="flex items-center justify-start">
            <span class="text-red-500">{{ errors.password[0] }}</span>
          </div>
        </div>
  
        <div class="flex items-center justify-center mt-2">
            
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" type="submit">
              Login
            </button>
  
        </div>
      </form>

      <div class="border-t border-gray-200 mt-3">
        <router-link to="/register">
          <p class="py-2 text-blue-500 hover:text-blue-700">Don't have account?</p>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
import LogoHome from '@/components/LogoHome.vue';

export default {
  components: {
    LogoHome
  },
  data() {
    return {
      email: '',
      password: '',
      error: null,
      errors: {},
    }
  },
  methods: {
    async login(){
      try {
        const response = await this.$axios.post('http://127.0.0.1:8000/api/v1/login', {
          email: this.email,
          password: this.password,
        });
        const token = response.data.token;
        const user_id = response.data.id;
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', user_id);
        this.$router.push('/feedbacks');
      }catch(error){
        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors;
        } else if(error.response && error.response.status === 401) {
          this.error = error.response.data.error;
        } else {
          console.error('Login failed:', error.response ? error.response.data : error.message);
        }
      }
    }
  }
}
</script>