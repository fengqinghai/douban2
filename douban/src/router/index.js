import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Test from '../components/test.vue'
import Home from '../pages/Home/home.vue'
import Broadcast from '../pages/Broadcast/broadcast.vue'
import Audio from '../pages/Audio/audio.vue'
import Group from '../pages/Group/group.vue'
import Mine from '../pages/Mine/mine.vue'

import Film from '../components/film.vue'
import Tv from '../components/tv.vue'
import City from '../components/city.vue'
import Read from '../components/read.vue'
import Music from '../components/music.vue'

import Zhonghe from '../components/tv/zhonghe.vue'
import Guochan from '../components/tv/guochan.vue'
import Yingmei from '../components/tv/yingmei.vue'
import Riju from '../components/tv/riju.vue'
import Hanju from '../components/tv/hanju.vue'
Vue.use(Router)

export default new Router({
  routes: [  
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children:[
        {path:'',component:Film},
        {path:'film',component:Film},
        {
          path:'tv',
          component:Tv,
          children:[
              {path:'',component:Zhonghe},
              {path:'zhonghe',component:Zhonghe},
              {path:'guochan',component:Guochan},
              {path:'yingmei',component:Yingmei},
              {path:'riju',component:Riju},
              {path:'hanju',component:Hanju},
          ]
        },
        {path:'city',component:City},
        {path:'read',component:Read},
        {path:'music',component:Music}
      ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
