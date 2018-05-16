// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 路由配置内容  引入router/index.js文件
import router from './router'
import fastClick from "fastclick"
// 引入重置样式
import "styles/reset.css"
//  解决多次点击时300ms的延迟问题
import "styles/border.css"
//  引入iconfont的css
import iconfont from "styles/iconfont.css"
//  引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
//  引入swiper需要的css文件
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
// 移动端300 毫秒点击延迟的问题
fastClick.attach(document.body)

// use引入的组件
Vue.use(VueAwesomeSwiper, /* { default global options } */);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
