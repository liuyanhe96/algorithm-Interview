import {INCREMENT} from "./mutations-types";

export default {
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
}
