import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import {Button} from 'mint-ui'
// import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './vuex/store'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
// import CartControl from './components/CartControl/CartControl.vue'
import './validate'
import i18n from './i18n'
import * as API from '@/api'
import './mock/mock-server'
// import loading from '@/common/images/loading.gif'


// Vue.use(VueLazyload, {
//   loading,  // 在要显示的图片没有加载到前显示
// }) // 内部定义一个全局指令: lazy

// 将API对象挂载到Vue的原型对象上
Vue.prototype.$API = API

//注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)
// Vue.component('CartControl', CartControl)
Vue.component(Button.name, Button)  // mt-button

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