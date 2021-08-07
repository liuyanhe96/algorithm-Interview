<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容, 哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">信息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return{
        message:'你好啊',
        path:'/home/news'
      }
    },
    created() {
      // document.title='首页'
      console.log('home created');
    },
    destroyed() {
      console.log('home destroyed');
    },
    // 这两个函数, 只有该组件被保持了状态使用了keep-alive时, 才是有效的
    activated() {
      console.log('activated');
      this.$router.push(this.path)
    },
    deactivated() {
      console.log('deactivated');
    },

    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      this.path = this.$route.path
      next()
    }



  }
</script>

<style scoped>

</style>
