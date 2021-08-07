<template>
  <div id="app">
    <h2>----------App内容: modules中的内容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>


    <h2>----------App内容: info对象的内容是否是响应式----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>----------App内容----------</h2>
    {{message}}
    <h2>{{$store.state.count}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addcount(5)">+5</button>
    <button @click="addcount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>----------App内容: getters相关信息----------</h2>
    <h2>{{$store.getters.powercount}}</h2>
<!--    powercount按照属性来的不用加（）-->
    <h2>{{$store.getters.gt20}}</h2>

    <h2>长度是{{$store.getters.gt20Length}}</h2>

    <h2>输入年龄:{{$store.getters.gtAge(18)}}</h2>


    <h2>----------Hello Vuex内容----------</h2>
  <hello-vuex ></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {INCREMENT} from "./store/mutations-types";


export default {
    name: 'App',
    components:{
      HelloVuex
    },
    data(){
      return{
        message:'我是APP组件',

      }
    },
    methods:{
      add(){
        this.$store.commit(INCREMENT)
      },
      sub(){
        this.$store.commit('decrement')
      },
      addcount(num){
        //第一种提交风格
        // this.$store.commit('incrementCount',num)
        //第二种提交风格
        this.$store.commit({
          type:'incrementCount',
          num
        })
      },
      addStudent(){
        const stu = {id: 114, name: 'Allen', age: 35};
        this.$store.commit('addStu',stu)

      },
      updateInfo(){
        // this.$store.commit('updateInfo')
        this.$store.dispatch('aupdateInfo','我是payload')
          .then(
          res=>{
            console.log('里面提交完毕');
            console.log(res)

          }
        )

      },
      updateName(){
        this.$store.commit('updateName','LiSi')
      },
      asyncUpdateName(){
        this.$store.dispatch('aupdateName')
      },
    },


  }
</script>

<style>

</style>
