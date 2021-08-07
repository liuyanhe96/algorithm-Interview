// 1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

const {abc} = require('./js/data')
console.log(abc());

require('./css/normal.css')

require('./css/speical.less')
document.writeln('<h2>你好，明天未来</h2>')


import Vue from 'vue'
// 第一个
// import App from './vue/app'

// 第二个
import App from './vue/App'


// const App={
//   template:`
//       <div>
//   <div>{{mes}}</div>
//       <button>anniu</button>
//       <h2>Coderwhy</h2>
//       </div>
//   `,
//   data(){
//     return{
//       mes:'Hello new knowledge'
//     }
//   },
//   methods:{},
//
// }

// const vm = new Vue({ 真实开发中不需要const vm
new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  },
})