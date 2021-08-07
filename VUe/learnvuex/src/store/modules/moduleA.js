export default {
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
