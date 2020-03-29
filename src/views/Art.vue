<template>
  <div id="container">
    <Spider />
    <div class="carousel">
      <figure>
        <img
          class="image"
          src="/art/bioMechanicalBinaryForest.jpg"
          alt="Binary Forest Art"
        />
        <img class="image" src="/art/cubes.png" alt="Cubes Art" />
        <img
          class="image"
          src="art/forestFire.png"
          alt="Forest Fire Art"
          style="margin-top: 50px; width: 100%; height: 80%;"
        />
        <img class="image" src="/art/landscape.jpg" alt="Landscape Art" />
        <img
          class="image"
          src="/art/paintTear.jpg"
          alt="Paint tear Art"
          style="margin-top: 10px"
        />
        <img
          class="image"
          src="/art/plantingTheSeedsOfLife.jpeg"
          alt="Planting the seeds of Life Art"
          style="margin-top: -25px"
        />
        <img
          class="image"
          src="/art/incanIncarnation.jpg"
          alt="Incan Incarnation Art"
        />
        <img
          class="image"
          src="/art/theEyeOfHorus.jpg"
          alt="The Eye of Horus Art"
          style="margin-top: -35px;"
        />
        <img
          class="image"
          src="/art/lucious.jpg"
          alt="Lucious Art"
          style="margin-top: -25px"
        />
      </figure>
      <nav @click.stop="">
        <button
          @click.stop="animateButtons('prev')"
          ref="prev"
          class="nav prev"
        >
          Prev
        </button>
        <button
          @click.stop="animateButtons('next')"
          ref="next"
          class="nav next"
        >
          Next
        </button>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Spider from "@/components/Spider.vue";
@Component({
  components: {
    Spider
  }
})
export default class Art extends Vue {
  /* eslint-disable */
  carousel: any = undefined;
  figure: any = undefined;
  nav: any = undefined;
  numImages: any = undefined;
  theta: any = undefined;
  currImage = 0;

  mounted() {
    this.carousel = document.querySelector(".carousel");
    this.figure = this.carousel.querySelector("figure");
    this.nav = this.carousel.querySelector("nav");
    this.numImages = this.figure.childElementCount;
    this.theta = (2 * Math.PI) / this.numImages;
    this.nav.addEventListener("click", this.onClick, true);

    setTimeout(() => {
      const logo: any = this.$refs.spiderLogo;
      logo.classList.add("slideDownWeb");
    }, 500);
  }

  animateButtons(direction: string) {
    const prev: any = this.$refs.prev;
    const next: any = this.$refs.next;
    if (direction === "next") next.classList.toggle("nextAnimation");
    if (direction === "prev") prev.classList.toggle("prevAnimation");
  }

  onClick(e: any) {
    const t = e.target;
    if (t.tagName.toUpperCase() != "BUTTON") return;
    if (t.classList.contains("next")) this.currImage++;
    else this.currImage--;
    this.figure.style.transform = `rotateY(${this.currImage * -this.theta}rad)`;
  }
}
</script>

<style lang="scss" scoped>
#container {
  margin: 0;
  font-family: "Ubuntu", sans-serif !important;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
nav {
  transition: all 0.5s ease-out;
  z-index: 1;
  button {
    transition: all 0.5s ease-out;
    background: white !important;
    z-index: 1;
  }
  .prevAnimation {
    transition: all 0.5s ease-out;
    transform: rotateY(-360deg) !important;
  }
  .nextAnimation {
    transition: all 0.5s ease-out;
    transform: rotateY(360deg) !important;
  }
}

.image {
  opacity: 0.99 !important;
}

// Carousel configuration parameters
$n: 9;
$item-width: 400px;
$item-separation: 80px;
$viewer-distance: 500px;

// Derived variables
$theta: 2 * 3.141592653589793 / $n;
$apothem: 482.842712474619px;

.carousel {
  padding: 50px;

  perspective: $viewer-distance;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    flex: 0 0 auto;
  }

  figure {
    margin: 0;

    width: $item-width;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    transform-origin: 50% 50% (-$apothem);

    img {
      width: 100%;
      box-sizing: border-box;
      padding: 0 $item-separation / 2;

      opacity: 0.9;

      &:not(:first-of-type) {
        position: absolute;
        left: 0;
        top: 0;
        transform-origin: 50% 50% (-$apothem);
      }

      @for $i from 2 through $n {
        &:nth-child(#{$i}) {
          transform: rotateY(#{($i - 1) * $theta}rad);
        }
      }
    }
  }

  nav {
    display: flex;
    justify-content: center;
    margin: 20px 0 0;

    button {
      flex: 0 0 auto;
      margin: 0 5px;

      cursor: pointer;

      color: #333;
      background: none;
      border: 1px solid;
      letter-spacing: 1px;
      padding: 5px 10px;
    }
  }
}
</style>
