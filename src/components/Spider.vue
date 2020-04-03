<template>
  <div id="spiderContainer">
    <img
      @click="navigateHome()"
      title="Back to Home"
      ref="spiderLogo"
      class="spiderLogo"
      src="/spiderLogoLong.png"
      alt="logo"
      height="200"
      width="90"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Spider extends Vue {
  // eslint-disable-next-line
  logo: any = undefined;

  mounted() {
    this.logo = this.$refs.spiderLogo;
    setTimeout(() => {
      this.logo.classList.add("slideDownWeb");
    }, 500);
  }
  navigateHome() {
    this.logo.classList.remove("slideDownWeb");
    setTimeout(() => {
      this.$router.push({ path: "/" });
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.spiderLogo {
  cursor: pointer;
  z-index: 100;
  position: fixed;
  top: -200px;
  left: 30px;
  transition: all 1s ease;
}
.slideDownWeb {
  top: 0px;
}
</style>
