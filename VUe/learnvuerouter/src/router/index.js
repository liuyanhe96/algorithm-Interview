// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/user'

//懒加载
const Home = () => import('../components/Home');
const News = () => import('../components/HomeNews');
const Mes = () => import('../components/HomeMessage');

const About = () => import('../components/About');
const User = () => import('../components/user');
const Profile = () => import('../components/profile')

// 1.通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    // redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children:[
      {//默认开启 首页显示
        path:'',
        redirect:'news'
      },
      {
        path:'news',
        component: News
      },
      {
        path: 'message',
        component:Mes,
      },
    ],
    meta:{
      title:'首页'
    },
  },
  {
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    },

    beforeEnter: (to, from, next) => {
      console.log('berforeEnter');
      next()
      // ...
    }
  },
  {
    path:'/user/:userId',
    component:User,
    meta:{
      title:'用户'
    },
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案'
    },
  },
]
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

//全局导航守卫
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title;
  // console.log(to);
  next()
  }

)

// 3.将router对象传入到Vue实例
export default router

