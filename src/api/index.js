/*
* 包含N个接口请求函数的模块
*/

import ajax from './ajax'

//1：根据经纬度获取位置详情
export const reqAddress = (geohash) =>ajax('/position/${geohash}')

//2:获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')
//3:根据经纬度获取商铺列表
export const reqShops = (lng,lat) => ajax('/shops',{lng,lat})

//4:根据经纬度和关键字搜索商铺列表
export const reqAddress = (geohash,keywords) =>ajax('/position/search_shops',{geohash,keywords})

//5:获取一次性验证码
export const reqYzm = () => ajax('/captcha')
//6:用户名密码登录
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', { name, pwd, captcha }, 'POST')
//7:发送短信验证码
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
//8:手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
//8:根据回话获取用户信息
export const reqUser = () => ajax('/api/userinfo')
//10:用户登出
export const reqLogout = () => ajax('/api/logout')
