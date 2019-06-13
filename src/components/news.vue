<template>
  <div class="news container">
    <h5>Жанылыктар</h5>
    <div class="row">
      <!-- Grid column -->
      <div class="col-lg-4 col-md-12">
        <!--Card-->
        <div class="card" v-for-key="results in results">
          <!--Card image-->
          <div class="view">
            <img src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" class="card-img-top"
              alt="photo">
            <a href="#">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>

          <!--Card content-->
          <div class="card-body">
            <!--Title-->
            <h4 class="card-title">{{ results.title}}</h4>
            <!--Text-->
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a href="#" class="btn btn-primary">Кененирээк</a>
          </div>
        </div>
        <!--/.Card-->          
      </div>
      <!-- Grid column -->
    </div>
    <!-- Grid row -->




























    <!-- <div class="container" id="app">
      <h3 class="text-center">VueNews</h3>
    </div>

    <div class="columns medium-3" v-for-key="result in results">
      <div class="card">
        <div class="card-divider">
          {{ result.title }}
        </div>
        <div class="card-section">
          <p>{{ result.abstract }}.</p>
        </div>
      </div>
    </div> -->
  </div>
  
</template>

<script>
import axios from 'axios'

export default {    
  data: function () {
    return {
      results: [
        {title: "the very first post", abstract: "lorem ipsum some test dimpsum"},
        {title: "and then there was the second", abstract: "lorem ipsum some test dimsum"},
        {title: "third time's a charm", abstract: "lorem ipsum some test dimsum"},
        {title: "four the last time", abstract: "lorem ipsum some test dimsum"}
        ]
    }
  }

  

}
</script>

<style>
.news {
  margin-top: 20px;
  height: 800px;
}

</style>
