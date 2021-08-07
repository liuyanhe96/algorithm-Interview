export default {
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
}
