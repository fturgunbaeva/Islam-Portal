<template>  
  <div>
    <!-- This is the main page -->

    <!-- Banner -->
    <div class="banner">
      <div class="container">
        <div class="text col-5">
          <h2>добро пожаловать в первый кыргызский исламский портал</h2>
        </div>
      </div>    
    </div>
    <!-- end banner section -->
    <!-- another content-section -->




    <div class="box">
      <b-container class="bv-example-row">        
        <div class="container">
          <b-row>
            <b-col cols="6" md="4">
              <h5>Время намаза</h5> 
              <b-table :items="items"></b-table>
            </b-col>
            <b-col cols="12" md="8">content part</b-col>
          </b-row> 
        </div>          
      </b-container>        
    </div>



  </div>  
</template>



<script>
  export default {
    data() {
      return {        
        items: [
          { Намаз: 'Фаджр', Время: '03:07' },
          { Намаз: 'Шурук', Время: '05:23' },
          { Намаз: 'Зухр', Время: '13:01' },
          { Намаз: 'Аср', Время: '17:05' },
          { Намаз: 'Магриб', Время: '20:39' },
          { Намаз: 'Иша', Время: '22:44' },
                   
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
  }
</script>

<style scoped>
  .banner {
    width: 100%;
    height: 500px;
    background-image: url(../assets/1.jpg);
    background-size: cover;
    background-position: center;  
  }
  .text {
    text-transform: uppercase;
    color: beige;
    height: 400px;
    display: flex;  
    padding: 100px 50px
    
    
  } 
  .box {
    padding: 15px
  }

  /* .section {
    background: red
  } */

</style>


