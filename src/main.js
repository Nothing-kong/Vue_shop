import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import Header from './components/Header/Header.vue'
import './validate'
import i18n from './i18n'

//注册全局组件
Vue.component('Header', Header)
new Vue({
  // components: {
  //   App
  // },
  // template: '<App/>'
  render: h => h(App),

  // 所有组件都能看到 $router和$route  <router-link> 和 <router-view/>
  router,

  i18n,

  //所有组件都能看到store
  store
}).$mount('#app')