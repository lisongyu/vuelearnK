import Vue from 'vue'
import Router from 'vue-router';
//   初始化页面

//回到顶部
import toChild from '@/components/toChild';
import toParent from '@/components/toParent';
import todownmore from '@/components/todownmore';
import toupfn from '@/components/toupfn';

import cart from '@/components/cart';


//使用路由
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      meta:{index:0},
      name: "cart",
      component: cart,
    },
    {
        path: "/tochild",
        meta:{index:1},
        name: "tochild",
        component: toChild,
    },
    {
        path: "/toparent",
        meta:{index:2},
        name: "toparent",
        component: toParent,
    },
    {
        path: "/todownmore",
        meta:{index:3},
        name: "todownmore",
        component: todownmore,
    },
    {
        path: "/toupfn",
        meta:{index:4},
        name: "toupfn",
        component: toupfn,
    }


   
  ]
})
