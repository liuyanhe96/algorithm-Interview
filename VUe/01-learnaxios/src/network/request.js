import axios from 'axios';


//1 回调函数
// export function request(config,success,failure) {
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//
//   instance(config)
//     .then(res=>{
//     success(res)
//   })
//     .catch(res=>{
//       failure(res)
//     })
// }

//2
// export function request(config) {
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//
//   instance(config.baseConfig)
//     .then(res=>{
//     config.success(res)
//   })
//     .catch(res=>{
//       config.failure(res)
//     })
// }

//3
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//
//     instance(config)
//       .then(res=>{
//        resolve(res)
//       })
//       .catch(res=>{
//         reject(err)
//
//       })
//   })
//
// }


//最终使用
export function request(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
//2 axios 拦截器
    instance.interceptors.request.use(config=>{
      // 1.比如config中的一些信息不符合服务器的要求

      // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标

      // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
      console.log(config);
      return config   //拦截后 必须return返回这个config 不拦截不用return
    },error => {
      console.log(error);
    })

    instance.interceptors.response.use(res=>{
      // console.log(res);
      console.log(res.data);
      return res.data  //拦截后 必须return返回这个config 不拦截不用return 还回去
    },error => {
      console.log(error);
    })

    return instance(config)  //调这个函数 返回Promise 所以它本身返回的东西就是个Promise
  })

}
