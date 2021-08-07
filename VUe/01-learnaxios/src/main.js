import Vue from 'vue'
import App from './App'

import axios from 'axios'



Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})

// axios(config)

// axios({
// url:'http://123.207.32.32:8000/home/multidata',
// }).then(res=>{
//   console.log(res);
// })

//http://152.136.185.210:8000/api/w6/home/data?type=pop&page=1


// axios({
//   url: 'http://152.136.185.210:8000/api/w6/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })

//2.axios发送并发请求
// axios.all([
//   axios({
//     url:'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url: 'http://152.136.185.210:8000/api/w6/home/data',
//     params:{
//       type:'pop',
//       page:1
//     },
//   })
// ]).then(result=>{
//   console.log(result);
//   console.log(result[0]);
//   console.log(result[1]);
// })

// 3.使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL='http://152.136.185.210:8000/api/w6';
// axios.defaults.timeout=5000;
//
// axios.all([
//   axios({
//     url:'/home/data',
//     params:{
//       type:'pop',
//       page:1
//     }
//   }),
//   axios({
//     url:'/home/data',
//     params:{
//       type: 'sell',
//       page:1
//     }
//   })
// ]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))

// 4.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL:'http://152.136.185.210:8000/api/w6',
//   timeout:5000
// });
// const instance2 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// });
//
// instance1({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:2,
//   }
// }).then(res=>{
//   console.log(res);
// });
//
// instance2({
//   url:'/home/multidata',
//
// }).then(res=>{
//   console.log(res);
// })


// 5.封装request模块

 import {request} from "./network/request";

// 1 第一种回调函数
// request({url:'/home/multidata'},
//     res=>{console.log(res);},
//   err=>{
//     console.log(err);})


//2
// request({
//   baseConfig:{url:'/home/multidata'},
//   success:function (res) {
//     console.log(res);
//   },
//   failure:function (err) {
//     console.log(err);
//
//   }
// })

//3
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);

})



