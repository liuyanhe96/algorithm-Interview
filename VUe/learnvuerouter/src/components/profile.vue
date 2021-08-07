<template>
  <div>
    <p>我是profile文件</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.Sex}}</p>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      console.log('profile created');
    },
    destroyed() {
      console.log('profile destroyed');
    },
  }
</script>

<style scoped>

</style>
