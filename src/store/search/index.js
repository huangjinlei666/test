import { reqGetSearchInfo } from "@/api";
const state = {
    searchList: {},
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
};
const actions = {
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        //    console.log(result);
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data);
        }
    }
};
// 简化仓库中数据
const getters = {
    goodsList(state) {
        // console.log(state);,若网络错误，则返回空数组，否则报错
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList
    },
    attrsList(state) {
        return state.searchList.attrsList
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
}