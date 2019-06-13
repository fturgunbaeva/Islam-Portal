<template>
  <div class="html">
    <!-- Хэдэр -->
    <Header></Header>
    <!-- Начало контента -->       
    <div class="content"> 
      <!-- для анимации -->
      <transition name="router-anim" enter-active-class="animated pulse" leave-active-class="animated pulse" >
        <router-view>
          <Home></Home>
        </router-view>   
      </transition>        
    </div>     
    <!-- Конец контента -->


    <!-- Футер -->
    <Footer></Footer>
  </div>
</template>
 

<script>
  // Импортируем нужные компоненты
  import Header from "./components/Header.vue";
  import Home from "./components/home.vue";
  import Footer from "./components/Footer.vue";

  export default {    
    name: "app",    
    components: {
      Footer,
      Header,
      Home
    }
  }
  
</script>


<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  #html {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
    color: #2c3e50;
    min-height: calc(100vh - 70px);    
  }
  li {
    list-style: none;
  }
  
  .router-anim-enter-active {
    animation: coming 1s;
    animation-delay: .5s;
    opacity: 0;
  }
  .router-anim-leave-active {
    animation: going 1s;
  }

  @keyframes going {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50px);
      opacity: 0;
    }
  }
  @keyframes coming {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
    

</style>
