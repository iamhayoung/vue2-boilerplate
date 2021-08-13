import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import About from '../views/About';

Vue.use(VueRouter); // 뷰 내부에서 라우터를 사용할것임을 알림

const routes = [
  // 사용자가 패스에 접근했을때 실제로 사용자를 어디로 넘길것인지 배열 안에 정의
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
