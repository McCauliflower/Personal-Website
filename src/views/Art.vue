<template>
  <div class="art">
    <div id="carousel">
      <div id="wrapper 3D">
      <h2 class="title threeD">3D Sculpture</h2>
          <div id="myCarousel" data-carousel-3d>
              <img src="/SelfieAscii.png" />
              <img src="/spiderLogoLong.png" selected />
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "Art",
  components: {}
};
</script>
<script src="/carousel-3d-master/dist/jquery.carousel-3d.js"></script>

<style lang="scss">
.threeD{
	clear:both;
	margin-top:5%;
	margin-left:2%;
}
</style>

