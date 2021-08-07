export default {
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
}
