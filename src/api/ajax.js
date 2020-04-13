/*
ajax请求函数封装模块
  url:请求路径
  data:请求参数，默认为空(是一个对象)
  type:请求方式,默认是GET
  返回值：promise对象(异步返回的数据是：response.data)
*/

import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
  /*高阶函数*/
  return new Promise(function (resolve,reject) {
    let promise
    if (type === "GET") {
      //准备url query参数数据
      let dataStr = '';//数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })

      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    //成功了调用resolve
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
        //失败了调用reject
        reject(error);
     })
  });
}
