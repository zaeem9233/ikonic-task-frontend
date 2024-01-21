import { createWebHistory, createRouter } from "vue-router";
// import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
// import LogoutPage from './pages/LogoutPage.vue';
import FeedbacksPage from './pages/FeedbacksPage.vue';
import FeedbackPage from './pages/FeedbackPage.vue';
import CreatePage from './pages/CreatePage.vue';

const routes = [
  { name: 'HomePage', path: '/', component: HomePage },
  { name: 'LoginPage', path: '/login', component: LoginPage },
  { name: 'RegisterPage', path: '/register', component: RegisterPage },
  // { name: 'LogoutPage', path: '/logout', component: LogoutPage, meta: { requiresAuth: true } },
  { name: 'FeedbacksPage', path: '/feedbacks', component: FeedbacksPage, meta: { requiresAuth: true } },
  { name: 'FeedbackPage', path: '/feedback', component: FeedbackPage, meta: { requiresAuth: true } },
  { name: 'CreatePage', path: '/create', component: CreatePage, meta: { requiresAuth: true } }
];

const router = createRouter({
  history:createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (!token) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;