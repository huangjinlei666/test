import Mock from 'mockjs';
// webpack默认对外暴露图片与json数据格式
import banner from './banner.json';
import floor from './floor.json';
// 第一个参数：请求地址，第二个参数：请求数据
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
