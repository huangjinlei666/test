import Vue from 'vue'
import App from './App.vue'
import store from '@/store';
import router from '@/router'
// 让mock执行一次
import '@/mock/mockServe';
//三级联动组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
// 引入swiper样式
import "swiper/css/swiper.css";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name,Pagination);
//让配置路由执行
Vue.config.productionTip = false;
//测试一下
// import {reqCategoryList} from '@/api';
// reqCategoryList();
new Vue({
  render: h => h(App),
  //注册路由信息
  router,
  //注册仓库
  store,
  // 全局事件总线配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
