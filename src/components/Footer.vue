<template>
  <div class="footer">
    <div class="container">
      <div class="row ml-5" >
        <div class="col">
          <b-navbar-brand> <router-link to="/home"> <img src="../icons/logo.png" class="logo" alt=""></router-link></b-navbar-brand>  
          <h6>Ислам Порталы</h6> 
        </div>
        <div class="col mt-5">          
          <div class="widjet-box">            
            <img src="../icons/facebook.png" alt="" class="widjets">
            <img src="../icons/twitter.png" alt="" class="widjets">
            <img src="../icons/whatsapp.png" alt="" class="widjets">
            <img src="../icons/youtube.png" alt="" class="widjets">
          </div> 
                  
        </div>
      </div>      
      <p>Ислам Порталы © 2019. Бардык укуктар корголгон</p>       
    </div>
  </div>

</template>

<script>
export default {
  name: "Footer"
};
</script>

<style> 
.footer {
  padding: 50px;  
  height: 280px;
  background: #4f6275;
  color: beige
}  
.logo {
  width: 60px;
  height:55px;
}  
h6 {
  cursor: pointer;
}  
.widjets {
  width: 25px;
  height: 25px;
  cursor: pointer;
}  
p {   
  text-align: center;
  font-size: 16px
}

.widjet-box {  
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: space-around
}
</style>