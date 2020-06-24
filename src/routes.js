
import VueRouter from 'vue-router'

import Demo from './components/Demo'
import HelloWorld from "./components/HelloWorld.vue";

const router = new VueRouter({
    // mode: 'history',
    routes: [
      { 
          path: '/demo/:id/:name/', 
          name: 'Demo',
        component: Demo,
        beforeEnter(to, from, next){
            console.log(to, from)
            next()
        }
    },
      { 
          path: '/:userId', 
          name: 'Home',
        component: HelloWorld  //import("./components/HelloWorld.vue").then..
    }
    ]
  })

export default router