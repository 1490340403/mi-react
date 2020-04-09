import axios from 'axios'
console.log(axios,axios.defauls,998)
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true
axios.defaults.timeout = 100000
// // axios拦截器
 axios.interceptors.request.use(config => {
//     config.setHeaders([
//         // 在这里设置请求头与携带token信息
//     ])
    return config
 })
 axios.interceptors.response.use(function(response){
    let res = response.data;
    if(res.status == 0){
      return res.data;
    }else if(res.status == 10){
      window.location.href = '/#/login';
      return Promise.reject(res);
    }else{
      return Promise.reject(res);
    }
  },(error)=>{
    let res = error.response;
    return Promise.reject(error);
  });
export default axios