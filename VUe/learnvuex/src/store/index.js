import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

import {INCREMENT} from "./mutations-types";


//1
Vue.use(Vuex)

//2
const state={
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
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    //划分模块，然后针对不同模块对相关数据进行保存
    a: moduleA
  },

});

//3
export default store
