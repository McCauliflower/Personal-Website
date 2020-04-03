<template>
  <div id="container">
    <Spider />
    <div v-show="isLoading" class="loader">
      <img src="/bucketLoader.gif" width="100" height="100" alt="Loading..." />
    </div>
    <art-desktop-view
      v-if="!isMobile"
      :isLoading="isLoading"
      @loaded="isLoading = $event"
    />
    <art-mobile-view
      v-if="isMobile"
      :isLoading="isLoading"
      @loaded="isLoading = $event"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Spider from "@/components/Spider.vue";
import ArtDesktopView from "@/components/ArtDesktopView.vue";
import ArtMobileView from "@/components/ArtMobileView.vue";

@Component({
  components: {
    Spider,
    ArtDesktopView,
    ArtMobileView
  }
})
export default class Art extends Vue {
  isLoading = false;
  isMobile = true;

  mounted() {
    // if (/iPhone|iPad|iPod/i.test(navigator.userAgent) || screen.width > 900) {
    //   this.isMobile = true;
    // }
  }
}
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 250px;
  width: 100%;
}
#container {
  margin: 0;
  font-family: "Ubuntu", sans-serif !important;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
</style>
