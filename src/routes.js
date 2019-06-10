import VueRouter from 'vue-router'

// Импорт компонентов
import Quran from './components/quran.vue'
import News from './components/news.vue'
import Home from './components/home.vue'



export default new VueRouter({
  routes: [      
    { path: '/quran', component: Quran },
    { path: '/news', component: News },
    { path: '/home', component: Home },
     
      
      
  ]
})