<template>
  <div class="section">
     <section class="content-1">
      <div class="container">
        <h5>Биздин партнерлор</h5>
        <div class="reasons-box ">          
          <div class="box">
            <div class="img-hover-zoom">
              <img src="../assets/muftiy.jpg" alt="" class="image">
            </div> 
            <p>Кыргызстан Мусулмандарынын дин башкармалыгы</p>                      
          </div>  
          <div class="box">
            <div class="img-hover-zoom">
              <img src="../assets/nasat.png" alt="" class="image">
            </div>
            <p>Насат Медиа Порталы</p>              
          </div>        
          <div class="box">
            <div class="img-hover-zoom">
              <img src="../assets/iyman.jpg" alt="" class="image">
            </div>
            <p>"Ыйман" диний маданиятты өнүктүрүү фонду</p>            
          </div>
        </div>
      </div>      
    </section>
    <!-- /.content-1 --> 


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section {
  background: #0d182e;
  height: 400px;
}
.content-1 {
  padding: 50px;
  height: 450px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  text-align: center  
}
.reasons-box {
  padding-top: 50px; 
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  color: #ffffff
} 
.box {
  width: 30%;
  text-align: center;
  cursor: pointer;
}
.image {
  width: 120px;
  height: 120px;
}
.img-hover-zoom {
  height: 150px; 
  
}
.img-hover-zoom img {
  transition: transform .4s ease;
}
.img-hover-zoom:hover img {
  transform: scale(1.2);
}
</style>
