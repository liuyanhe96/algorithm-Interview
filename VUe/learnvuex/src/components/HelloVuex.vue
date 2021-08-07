<template>
  <div>
   <h2>{{$store.state.count}}</h2>
    <h2>{{$store.getters.powercount}}</h2>
    <h2>{{$store.getters.gt20}}</h2>

    <h2>{{$store.state.info}}</h2>

  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    // props:{
    //   count:Number
    // },
  }
</script>

<style scoped>

</style>
