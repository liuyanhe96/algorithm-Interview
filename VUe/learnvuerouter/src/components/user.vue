<template>
<div>
  <h2>我是用户界面</h2>
  <p>我是用户的相关信息，哈哈哈哈呵呵额呵呵额</p>
  <p>{{userId}}</p>
  <p>{{$route.params.userId}}</p>
</div>
</template>

<script>
  export default {
    name: "user",
    computed:{
      userId(){
        //$route 处于活跃路由的对象
        return this.$route.params.userId
      }
    },
  }
</script>

<style scoped>

</style>
