<template>
  <div class="container">
    <div class="row">
      <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h1 class="gallery-title">Gallery</h1>
      </div>

      <div align="center">
        <button class="btn btn-default filter-button" data-filter="all">All</button>
        <button class="btn btn-default filter-button" data-filter="hdpe">HDPE Pipes</button>
        <button class="btn btn-default filter-button" data-filter="sprinkle">Sprinkle Pipes</button>
        <button class="btn btn-default filter-button" data-filter="spray">Spray Nozzle</button>
        <button class="btn btn-default filter-button" data-filter="irrigation">Irrigation Pipes</button>
      </div>
      <br>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>

      <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
        <img src="../assets/img1.jpg" class="img-responsive">
      </div>
    </div>
  </div>
</template>
<style>
.gallery-title {
  font-size: 36px;
  color: #42b32f;
  text-align: center;
  font-weight: 500;
  margin-bottom: 70px;
}
.gallery-title:after {
  content: "";
  position: absolute;
  width: 7.5%;
  left: 46.5%;
  height: 45px;
  border-bottom: 1px solid #5e5e5e;
}
.filter-button {
  font-size: 18px;
  border: 1px solid #42b32f;
  border-radius: 5px;
  text-align: center;
  color: #42b32f;
  margin-bottom: 30px;
}
.filter-button:hover {
  font-size: 18px;
  border: 1px solid #42b32f;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
  background-color: #42b32f;
}
.btn-default:active .filter-button:active {
  background-color: #42b32f;
  color: white;
}

.port-image {
  width: 100%;
}

.gallery_product {
  margin-bottom: 30px;
}
.img-responsive{
  width: 50%;

}

</style>

