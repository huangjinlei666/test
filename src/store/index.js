import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import search from './search';
import detail from './detail';
Vue.use(Vuex);
// const state={
//     count:1
// };
//修改state的唯一手段
// const mutations={
//     ADD(state){
//         state.count++;
//     }
// };
// const actions={
//     add({commit}){
//           commit('ADD');
//     }
// };
//用于简化仓库数据
// const getters={};
export default new Vuex.Store({
    //    state,
    //    mutations,
    //    actions,
    //    getters,
    modules: {
        home,
        search,
        detail,
    }
})