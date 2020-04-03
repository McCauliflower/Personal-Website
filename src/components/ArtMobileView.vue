<template>
  <div class="parent">
    <div class="slider">
      <button
        @mousedown="rightSlide()"
        type="button"
        id="right"
        class="right"
        name="button"
      >
        <svg
          version="1.1"
          id="Capa_1"
          width="40px"
          height="40px "
          x="0px"
          y="0px"
          viewBox="0 0 477.175 477.175"
          style="enable-background:new 0 0 477.175 477.175;"
          xml:space="preserve"
        >
          <g>
            <path
              style="fill: #9d9d9d;"
              d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
          c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
          "
            />
          </g>
        </svg>
      </button>
      <button
        @mousedown="leftSlide()"
        type="button"
        id="left"
        class="left"
        name="button"
      >
        <svg
          version="1.1"
          id="Capa_2"
          x="0px"
          y="0px"
          viewBox="0 0 477.175 477.175"
          style="enable-background:new 0 0 477.175 477.175;"
          xml:space="preserve"
        >
          <g>
            <path
              style="fill: #9d9d9d;"
              d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
          c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
            />
          </g>
        </svg>
      </button>
      <svg id="svg2" class="up2">
        <circle id="circle1" class="circle1 step" cx="34px" cy="49%" r="20" />
        <circle id="circle2" class="circle2 step" cx="34px" cy="49%" r="100" />
        <circle id="circle3" class="circle3 step" cx="34px" cy="49%" r="180" />
        <circle id="circle4" class="circle4 step" cx="34px" cy="49%" r="260" />
        <circle id="circle5" class="circle5 step" cx="34px" cy="49%" r="340" />
        <circle id="circle6" class="circle6 step" cx="34px" cy="49%" r="420" />
        <circle id="circle7" class="circle7 step" cx="34px" cy="49%" r="500" />
        <circle id="circle8" class="circle8 step" cx="34px" cy="49%" r="580" />
        <circle id="circle9" class="circle9 step" cx="34px" cy="49%" r="660" />
      </svg>
      <svg id="svg1" class="up2">
        <circle
          id="circle10"
          class="circle10 step"
          cx="648px"
          cy="49%"
          r="20"
        />
        <circle
          id="circle11"
          class="circle11 step"
          cx="648px"
          cy="49%"
          r="100"
        />
        <circle
          id="circle12"
          class="circle12 step"
          cx="648px"
          cy="49%"
          r="180"
        />
        <circle
          id="circle13"
          class="circle13 step"
          cx="648px"
          cy="49%"
          r="260"
        />
        <circle
          id="circle14"
          class="circle14 step"
          cx="648px"
          cy="49%"
          r="340"
        />
        <circle
          id="circle15"
          class="circle15 step"
          cx="648px"
          cy="49%"
          r="420"
        />
        <circle
          id="circle16"
          class="circle16 step"
          cx="648px"
          cy="49%"
          r="500"
        />
        <circle
          id="circle17"
          class="circle17 step"
          cx="648px"
          cy="49%"
          r="580"
        />
        <circle
          id="circle18"
          class="circle18 step"
          cx="648px"
          cy="49%"
          r="660"
        />
      </svg>
      <div id="slide1" class="slide1 up1"></div>
      <div id="slide2" class="slide2"></div>
      <div id="slide3" class="slide3"></div>
      <div id="slide4" class="slide4"></div>
      <div id="slide5" class="slide5"></div>
      <div id="slide6" class="slide6"></div>
      <div id="slide7" class="slide7"></div>
      <div id="slide8" class="slide8"></div>
      <div id="slide9" class="slide9"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ArtMobileView extends Vue {
  @Prop() isLoading!: boolean;
  curpage = 1;
  sliding = false;
  click = true;
  pageShift = 500;
  svg = true;
  totalImages = 5;

  leftSlide() {
    if (this.click) {
      if (this.curpage == 1) this.curpage = this.totalImages;
      this.sliding = true;
      this.curpage--;
      this.svg = true;
      this.click = false;
      for (let i = 1; i <= this.totalImages; i++) {
        const a1: any = document.getElementById("slide" + i);
        a1.className += " tran";
      }
      setTimeout(() => {
        this.move();
      }, 200);
      setTimeout(() => {
        for (let i = 1; i <= this.totalImages; i++) {
          const a1: any = document.getElementById("slide" + i);
          a1.classList.remove("tran");
        }
      }, 1400);
    }
  }

  rightSlide() {
    if (this.click) {
      if (this.curpage == this.totalImages) this.curpage = 0;
      this.sliding = true;
      this.curpage++;
      this.svg = false;
      this.click = false;
      for (let i = 1; i <= this.totalImages; i++) {
        const a1: any = document.getElementById("slide" + i);
        a1.className += " tran";
      }
      setTimeout(() => {
        this.move();
      }, 200);
      setTimeout(() => {
        for (let i = 1; i <= this.totalImages; i++) {
          const a1: any = document.getElementById("slide" + i);
          a1.classList.remove("tran");
        }
      }, 1400);
    }
  }

  move() {
    if (this.sliding) {
      this.sliding = false;
      if (this.svg) {
        for (let i = 1; i <= this.totalImages; i++) {
          const c: any = document.getElementById("circle" + i);
          c.setAttribute("class", "circle" + i + " streak");
        }
      } else {
        for (let i = 10; i <= 18; i++) {
          const c: any = document.getElementById("circle" + i);
          c.setAttribute("class", "circle" + i + " streak");
        }
      }
      setTimeout(() => {
        for (let i = 1; i <= this.totalImages; i++) {
          if (i == this.curpage) {
            const a: any = document.getElementById("slide" + i);
            a.className += " up1";
          } else {
            const b: any = document.getElementById("slide" + i);
            b.classList.remove("up1");
          }
        }
        this.sliding = true;
      }, 600);
      setTimeout(() => {
        this.click = true;
      }, 1700);

      setTimeout(() => {
        if (this.svg) {
          for (let i = 1; i <= this.totalImages; i++) {
            const c: any = document.getElementById("circle" + i);
            c.classList.remove("streak");
            c.setAttribute("class", "circle" + i + " step");
          }
        } else {
          for (let i = 10; i <= 18; i++) {
            const c: any = document.getElementById("circle" + i);
            c.classList.remove("streak");
            c.setAttribute("class", "circle" + i + " step");
          }
          this.sliding = true;
        }
      }, 850);
      setTimeout(() => {
        this.click = true;
      }, 1700);
    }
  }

  mounted() {
    document.addEventListener(
      "keydown",
      (event: any) => {
        if (event.keyCode == 37) {
          this.leftSlide();
        } else if (event.keyCode == 39) {
          this.rightSlide();
        }
      },
      false
    );
    this.$emit("loaded", true);
  }
}
</script>

<style lang="scss" scoped>
$circle: "circle";
$slide: "slide";
$images: (
  "/art/bioMechanicalBinaryForest.jpg",
  "/art/cubes.png",
  "/art/forestFire.png",
  "/art/landscape.jpg",
  "/art/paintTear.jpg"
);
$width: 381px;
$height: 475px;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.parent {
  width: $width;
  height: $height;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  overflow: hidden;
  position: absolute;
  box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
}
svg {
  position: absolute;
  z-index: 1;
  width: $width;
  height: $height;
}
button {
  position: absolute;
  z-index: 50;
  width: 40px;
  overflow: hidden;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);

  &:focus {
    outline-width: 0;
  }
}
circle {
  stroke: #fff;
  fill: none;
  transition: 0.3s;
}
#svg1 {
  circle {
    transition-timing-function: linear;
  }
}
#svg2 {
  circle {
    transition-timing-function: linear;
  }
}
#Capa_1 {
  position: absolute;
  width: 16px;
  height: 16px;
  transform: translate(-7px, -8px);
}
#Capa_2 {
  position: absolute;
  width: 16px;
  height: 16px;
  transform: translate(-9px, -8px);
}
.right {
  margin-left: 328px;
  margin-top: 213px;
  border: 1px solid #849494;
  background-color: transparent;
  transition: 0.5s;
  &:hover {
    background-color: #fff;
  }
}
.left {
  margin-left: 0.5%;
  margin-top: 213px;
  border: 1px solid #849494;
  background-color: transparent;
  transition: 0.5s;
  &:hover {
    background-color: #fff;
  }
}
@for $i from 1 through 9 {
  .#{$circle}#{$i} {
    transition-delay: ($i/20) + s;
  }
}
@for $i from 1 through 9 {
  .#{$circle}#{$i + 9} {
    transition-delay: ($i/20) + s;
  }
}
@each $image in $images {
  $j: index($images, $image);

  .#{$slide}#{$j} {
    background-image: url($image);
  }
}
.slider {
  position: absolute;
  left: 0;
  width: 400%;
  height: 100%;
  background: #000;
  display: inline-flex;
  overflow: hidden;
}
.slide1,
.slide2,
.slide3,
.slide4,
.slide5,
.slide6,
.slide7,
.slide8,
.slide9 {
  position: absolute;
  background-position: center;
  background-size: cover;
  width: 25%;
  height: 100%;
  z-index: 10;
  transition: 1.4s;
}
.tran {
  transform: scale(1.3);
}
.up1 {
  z-index: 20;
}
.up2 {
  z-index: 40;
}
.step {
  stroke-width: 0;
}
.streak {
  stroke-width: 82px;
}

@media (max-width: 400px) {
  .parent {
    margin-left: 1%;
  }
}
</style>
