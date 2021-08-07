import Vue from 'vue'
import Vuex from 'vuex'

import {INCREMENT} from "./mutations-types";


//1
Vue.use(Vuex)

//2
const moduleA={
  state:{
    name:'zhangsan'
  },

  mutations:{
    updateName(state,payload) {
      state.name= payload
    }
  },

  getters:{
    fullName(state){
      return state.name + '111'
    },
    fullName2(state,getters){
      return getters.fullName +'222'
    },
    //加上下面的count!!!!!!!! rootState
    fullName3(state,getters,rootState){
      return getters.fullName2 + rootState.count
    },
  },

  actions: {
    aupdateName(context){
      setTimeout(()=>{
        context.commit('updateName',"wangwu")
      },2000)
    }
  },

  modules:{},
}



const store = new Vuex.Store({

  state:{
    //state 保存共享状态 状态信息
    count:1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'kobe', age: 24},
      {id: 112, name: 'james', age: 30},
      {id: 113, name: 'curry', age: 10}
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },


  mutations:{
    //方法 修改state状态 状态更新 Vuex的store状态的更新唯一方式：提交Mutation  getters是从state拿出来用 只能同步操作 不能异步不然devtools不能跟踪 异步去action
    [INCREMENT](state){
      state.count++
    },
    decrement(state){
      state.count--
    },
    //第一种提交风格
    // incrementCount(state,num){
    //   state.count+=num;
    // },
    //第二种提交风格 payload 是对象
    incrementCount(state,payload){
      state.count += payload.num
    },
    addStu(state,stu){
      state.students.push(stu)
    },
    updateInfo(state){
      //响应式 添加Vue.set  删除 Vue.delete
      // Vue.set(state.info,'address','Los Angles')
      // Vue.delete(state.info,'age')
      //错误代码
      // setTimeout(()=>{
      //   state.info.name='coderwhy'
      // },2000)
      state.info.name='coderwhy'

    },
  },


  actions:{
    //负责异步操作 当有异步操作时在这里处理，然后再去mutations里修改对应的状态
    aupdateInfo(context,payload){
      // setTimeout(()=>{
      //   context.commit('updateInfo')
      // },2000)
      // console.log(payload);

      return new Promise((resolve, reject) => {

        setTimeout(()=>{
          context.commit('updateInfo');
          console.log(payload);
          resolve('1111111')
        },2000)
      })
    }
  },


  getters:{
    //类似于组件中computed属性 state当数据经过变化后再给其他组件使用时 就在这里定义方法 再去组件里通过$store.getters获取
    powercount(state){
      return Math.pow(state.count,2)
    },
    gt20(state){
      return state.students.filter(s=>s.age>=20)
    },

    gt20Length(state,getters){
      return getters.gt20.length
    },
    gtAge(state){
      //如果传参数 则返回一个函数
      return age=>{
        return state.students.filter(s=>s.age>=age)
      }
      // return function (age) {
      //   return state.students.filter(s=>s.age>=age)
      // }
    }
  },


  modules:{
    //划分模块，然后针对不同模块对相关数据进行保存
    a: moduleA
  },

})

//3
export default store
