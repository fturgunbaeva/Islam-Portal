import VueRouter from 'vue-router'

// Импорт компонентов
import Quran from './components/quran.vue'
import News from './components/news.vue'
import Home from './components/home.vue'
import Video from './components/video.vue'
import Audio from './components/audio.vue'



export default new VueRouter({
  routes: [      
    { path: '/quran', component: Quran },
    { path: '/news', component: News },
    { path: '/home', component: Home },
    { path: '/audio', component: Audio },
    { path: '/video', component: Video },
     
      
      
  ]
})