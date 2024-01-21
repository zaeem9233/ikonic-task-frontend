import { createWebHistory, createRouter } from "vue-router";
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import FeedbacksPage from './pages/FeedbacksPage.vue';
import FeedbackPage from './pages/FeedbackPage.vue';
import CreatePage from './pages/CreatePage.vue';

const routes = [
  {
    name: 'HomePage',
    path: '/',
    component: HomePage
  },
  {
    name: 'LoginPage',
    path: '/login',
    component: LoginPage
  },
  {
    name: 'RegisterPage',
    path: '/register',
    component: RegisterPage
  },
  {
    name: 'FeedbacksPage',
    path: '/feedbacks',
    component: FeedbacksPage
  },
  {
    name: 'FeedbackPage',
    path: '/feedback',
    component: FeedbackPage
  },
  {
    name: 'CreatePage',
    path: '/create',
    component: CreatePage
  }
];

const router = createRouter({
  history:createWebHistory(),
  routes
});
export default router;