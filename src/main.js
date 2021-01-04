import Vue from 'vue'
import App from './App.vue'
import router from './router'
//Vuex
import store from './store'
//Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//Toast notification
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
//Loading overlay
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';



Vue.config.productionTip = false

Vue.use(VueToast, { position: 'top' })
Vue.use(Loading, { color: "#8fcbff" });


Vue.prototype.$success = (mes) => {
  Vue.$toast.success(mes)
}
Vue.prototype.$date = (time,hour) => {
  if(hour){
    return moment(time).format('DD/MM/YYYY - h:mm A');
  }
  return moment(time).format('DD/MM/YYYY');
};


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
