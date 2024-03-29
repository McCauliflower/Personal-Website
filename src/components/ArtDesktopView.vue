<template>
  <div v-show="!isLoading" class="carousel">
    <figure ref="figure">
      <img
        v-for="image in images"
        :key="image.title"
        class="image"
        :src="image.src"
        :title="image.title"
        :style="adjustStyle(image.id)"
        @load="handleLoad()"
      />
    </figure>
    <nav>
      <button @click.stop="onClick($event, 'prev')" ref="prev" class="nav prev">&larr;</button>
      <button @click.stop="onClick($event, 'next')" ref="next" class="nav next">&rarr;</button>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Artwork } from "@/types/types.interface";
import { getImages } from "@/utils/apiCalls";

@Component({
  components: {}
})
export default class ArtDesktopView extends Vue {
  @Prop() isLoading!: boolean;
  images: Artwork[] = [];
  figure: any = undefined;
  numImages = 0;
  theta = 0;
  currImage = 0;
  imagesLoaded = 0;

  async mounted() {
    this.images = await getImages();
    this.figure = this.$refs.figure;
    this.numImages = this.images.length;
    this.theta = (2 * Math.PI) / this.numImages;
  }

  adjustStyle(imageId: number) {
    switch (imageId) {
      case 3:
        return "margin-top: 50px; width: 100%; height: 80%;";
        break;
      case 5:
        return "margin-top: 10px";
        break;
      case 6:
        return "margin-top: -25px";
        break;
      case 8:
        return "margin-top: -35px;";
        break;
      case 9:
        return "margin-top: -25px";
        break;
    }
  }

  handleLoad() {
    this.imagesLoaded++;
    if (this.imagesLoaded === 8) this.$emit("isLoading", false);
  }

  onClick(e: any, direction: string) {
    const t = e.target;
    this.animateButtons(direction);
    if (t.classList.contains("next")) this.currImage++;
    else this.currImage--;
    this.figure.style.transform = `rotateY(${this.currImage * -this.theta}rad)`;
  }

  animateButtons(direction: string) {
    const prev: any = this.$refs.prev;
    const next: any = this.$refs.next;
    if (direction === "next") next.classList.add("nextAnimation");
    if (direction === "prev") prev.classList.add("prevAnimation");
    setTimeout(() => {
      if (direction === "next") next.classList.remove("nextAnimation");
      if (direction === "prev") prev.classList.remove("prevAnimation");
    }, 200);
  }
}
</script>

<style lang="scss" scoped>
.nav {
  font-size: 20px;
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
    transition: all 0.2s ease-out;
    transform: rotateY(-60deg) !important;
  }
  .nextAnimation {
    transition: all 0.2s ease-out;
    transform: rotateY(60deg) !important;
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
