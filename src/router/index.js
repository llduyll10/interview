import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{breadCrumb: "Home"},
    component: () => import('../views/ListData.vue'),
  },
  {
    path: '/like',
    name: 'like',
    meta:{breadCrumb: "Like"},
    component: () => import('../views/LikeItem.vue'),

  },
  {
    path: '/remove',
    name: 'remove',
    meta:{breadCrumb: "Remove"},
    component: () => import('../views/RemoveItem.vue'),

  },
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/', '/login', '/signin'];
//   // Yêu cầu quyền khi khác publicPages
//   const authRequired = !publicPages.includes(to.path);
//   var user = JSON.parse(localStorage.getItem('user'));
//   console.log('user',user)
//   if (authRequired && to.path !== '/login' && !user.token) {
//     return next('/login');
//   }
//   next();
// })

export default router
