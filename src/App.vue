<template>
  <div class="html">
    <!-- Хэдэр -->
    <Header></Header>
    <!-- Начало контента -->       
    <div class="content">      
      <router-view></router-view>        
    </div>      
    
    <!-- Конец контента -->
    <!-- Футер -->
    <Footer></Footer>
  </div>
</template>
 

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";

  export default {
    name: "app",
    components: {
      Footer,
      Header
    }
  }
</script>

<style>
  #html {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    
    color: #2c3e50;
    min-height: calc(100vh - 70px);
    
  }
  li {
    list-style: none;
  }
  
  

</style>
