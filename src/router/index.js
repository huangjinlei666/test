import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);
//保存一份VueRouter原型对象的push
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }

}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }

}
export default new VueRouter({
    //配置路由
    routes,
    // 滚动行为，y=0代表滚动条在最上方
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})