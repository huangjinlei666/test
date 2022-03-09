import { reqGoodsInfo } from "@/api"
const state = {
    goodInfo:{},
}
const actions = {
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data);
        }
    }
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
}
const getters = {
    categoryView(state){
           return state.goodInfo.categoryView || {};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}