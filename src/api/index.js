//所有api接口，统一管理
import requests from "./request";
import mockRequests from './mockAjax'
//三级联动接口，get，无参数，/api/product/getBaseCategoryList
export const reqCategoryList = () =>
    //发请求
    requests({ url: '/product/getBaseCategoryList', method: 'get' });
//获取banner
export const reqGetBannerList = () => mockRequests.get('/banner');

//获取floor组件数据
export const reqFloorList = () => mockRequests.get('/floor');

//获取搜索模块数据,地址/api/list,方式：post，需要参数
export const reqGetSearchInfo=(params)=>requests({url:'/list',method:'post',data:params});

// 获取产品详情，/api/item/{ skuId }，get
export const reqGoodsInfo=(skuId)=>requests({url:`/item/${skuId}`,method:'get'});

