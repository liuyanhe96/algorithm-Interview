<template>
  <div id="app">
  {{result}}
    <p>-------------________________------------------------</p>
    <hello-world></hello-world>
  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from "./components/HelloWorld";

  export default {
    name: 'App',
    components: {
      HelloWorld

    },
    data(){
      return{
        result:''
      }
    },
    created() {
      axios({
        url:"http://152.136.185.210:8000/api/w6/home/data?type=sell&page=3"
      }).then(res=>{
        this.result = res
      })

    }

  }
</script>

<style>

</style>
