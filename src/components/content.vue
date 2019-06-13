<template>
  <div>
    <!--  content-section -->
    <div class="box container">
      <b-container class="bv-example-row m-5">           
        <b-row>
          <!-- QA content-section -->
          <b-col cols="10" md="6" class="box-umma">  
              <h5 class="umma">Журнал UMMA</h5>
              <div class="img-hover-zoom">
              <img src="../assets/umma.jpg" class="ummaimg">
              </div>                
              <br>              
              <button type="button" class="btn btn-info" style="width: 220px"><a href="http://ummamag.kg/" class="link">Кенеңирек маалымат</a></button>               
          </b-col> 
          <!-- the end QA content-section -->

          <!-- ________________________________________>

          
          <!- Prayer-time content-section -->
          <b-col cols="6" md="4" class="namaz">
            <p> Намаз убактысы</p> 
            <b-table :items="items"></b-table>              
          </b-col>
            <!-- end the prayer-time content-section-->
        </b-row>    
             
      </b-container> 
      <!-- end the content-section -->                
    </div>    
    <SectionOne></SectionOne> 
    <SectionTwo></SectionTwo>  
    
  </div>
  
    
</template>

<script>
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'

export default {
  data() {
    return {        
      items: [
        { Намаз: 'Фаджр', Убакыт: '03:07'},
        { Намаз: 'Шурук', Убакыт: '05:23' },
        { Намаз: 'Зухр', Убакыт: '13:01' },
        { Намаз: 'Аср', Убакыт: '17:05' },
        { Намаз: 'Магриб', Убакыт: '20:39' },
        { Намаз: 'Иша', Убакыт: '22:44' },                  
      ]
    }
  },
  components: {
    SectionOne,
    SectionTwo,
    

  }
  

}
</script>

<style scoped>
.box {
  margin-top: 50px
   
}
p {
  text-align: center;
  font-size: 22px
}
.picture {
  height: 400px;
  float: right;
}

.box-umma {  
  display: flex;  
  flex-direction: column;
  margin-left: 60px  
}

.ummaimg{
  width: 300px;
  height: 300px;
}
.link {  
  color:beige ;
  text-decoration: none
}  
.link:hover {
  text-decoration: none;
  color: wheat
}

.img-hover-zoom {
  height: 280px; 
  overflow: hidden; 
}
.img-hover-zoom img {
  transition: transform .4s ease;
}
.img-hover-zoom:hover img {
  transform: scale(1.2);
}

</style>
