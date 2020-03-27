<template>
  <div class="home">
    <nav-menu />
    <div id="selfieAscii"></div>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu/NavMenu.vue";

export default {
  name: "Home",
  components: {
    NavMenu
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  background: white;
}
#selfieAscii {
  position: absolute;
  bottom: 0;
  background-image: url("/SelfieAscii.png");
  background-color: white;
  height: 90vh;
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
