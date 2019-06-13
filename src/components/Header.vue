<template>
  <div class="myheader">   
    <b-navbar toggleable="lg"  style="background-color:#4f6275 ">
      <div class="container">     
        <b-navbar-brand> <router-link to="/home"> <img src="../icons/logo.png" class="logo" alt=""></router-link></b-navbar-brand>         
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-nav>                  
            <b-nav-item><router-link to="/news"><img src="../icons/news.png" class="icons" alt=""> Жанылыктар </router-link></b-nav-item>
            <b-nav-item><router-link to="/quran"><img src="../icons/quran.png" class="icons" alt=""> Куран </router-link></b-nav-item>             
            <b-nav-item><router-link to="/video"><img src="../icons/1.png" class="icons" alt=""> Видео-баян </router-link></b-nav-item>
          </b-nav>    

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Издөө"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" variant="info" type="submit">Издөө</b-button>
            </b-nav-form>  
            
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
      
  </div> 
  <!-- /.header --> 


</template>

<script>
  export default {};
</script>


<style scoped>
/*   ----navbar----   */ 

.logo {
  width: 60px;
  height:55px;
}
.icons {
  width: 28px;
  height: 28px;
}
a {
  font-size: 16px;  
  margin-left: 8px;
  color:beige ;
  text-decoration: none
}  
a:hover {
  text-decoration: none;
  color: wheat
}

</style>