<template>
  <div id="container">
    <Spider />
    <section id="gallery">
      <div v-for="thumbnail in thumbnails" :key="thumbnail" class="thumbnail">
        <div class="img-container">
          <div :class="`${getName(thumbnail)} size`"></div>
          <div class="img-caption table">
            <span class="table-cell">
              <a
                target="_blank"
                rel="noopener noreferrer"
                :href="`/demos/${getName(thumbnail)}/index.html`"
              >
                <button class="btn btn-p btn-trans" role="button">
                  {{ getName(thumbnail) }}
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Spider from "@/components/Spider.vue";
import axios from "axios";

@Component({
  components: {
    Spider
  }
})
export default class Code extends Vue {
  thumbnails: string[] = [];
  async created() {
    const response = await axios.get("/code");
    this.thumbnails = response.data;
    console.log("this.thumbnails", this.thumbnails);
  }
  getName(thumbnail: string): string {
    const dot = thumbnail.indexOf(".");
    console.log("thumbnail", thumbnail.slice(0, dot));
    return thumbnail.slice(0, dot);
  }
}
</script>

<style lang="scss" scoped>
$font-family: "Ubuntu", sans-serif !important;
$font-size-base: 16px;
$font-weight: 100;
$bg-color: #444;
$bg-color2: #666;
$almost-white: rgb(255, 255, 255);
$btn-transparent-color: rgb(247, 243, 212);
$btn-transparent-bg: rgba(145, 143, 131, 0.5);

#container {
  margin: 0;
  min-height: 100vh;
}
.size{
  height: 100%;
  background-color: white;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
.divz{
  background-image: url("/code/divz.jpg");
}
.robotBuilder{
  background-image: url("/code/robotBuilder.png");
}
.thesis{
  background-image: url("/code/thesis.jpg");
}
.dragAndDrop{
  background-image: url("/code/vectorhead.jpg");
}
.ballpit{
  background-image: url("/code/ballpit.png");
}
.unicode{
  background-image: url("/code/unicode.png");
}
.dragAndDrop{
  background-image: url("/code/dragAndDrop.jpg");
}

html {
  background: linear-gradient($bg-color, $bg-color2);
  min-height: 100%;
  font-family: $font-family;
}
#gallery {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  padding: 200px 0 360px 0;
  p {
    color: $almost-white;
    padding: 0 40px;
  }

  .thumbnail {
    float: left;
    position: relative;
    width: 15%;
    padding-bottom: 15%;
    margin: 0.83%;
    overflow: hidden;
    &:hover {
      -webkit-box-shadow: 5px 5px 50px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 5px 5px 50px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 5px 5px 50px 0px rgba(0, 0, 0, 0.75);
    }
  }

  .img-container {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      width: auto;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    &:hover .img-caption {
      top: 0;
      left: 0;
      .btn-trans {
        background: rgba(255, 255, 255, 0.4);
        border: 1px solid lightgrey;
      }
    }
  }

  .img-caption {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
  }
  .table {
    display: table;
    .table-cell {
      display: table-cell;
      vertical-align: middle;
      border: 2px solid lightgrey;
    }
  }
  .btn {
    border: none;
    font-size: .8em !important;
    font-weight: $font-weight;
    color: $btn-transparent-color;
    display: inline-block;
    text-transform: uppercase;
    position: relative;
    border: 1px solid lightgrey;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
    }
    &::after {
      line-height: 1;
      position: relative;
      -webkit-font-smoothing: antialiased;
    }
  }
  .btn-sep {
    margin: 30px 0px;
  }
  .btn-p {
    font-size: $font-size-base;
    padding: 10px 20px;
    cursor: pointer;
  }

  .btn-trans {
    background: $btn-transparent-bg;
    color: grey
    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
    &:active {
      background: rgba(255, 255, 255, 0.4);
    }
  }

  @media screen and (max-width: 992px) {
    .thumbnail {
      width: 22%;
      padding-bottom: 22%;
      margin: 1.5%;
    }
    .img-container:hover .img-caption {
      top: 0;
      left: 0;
    }

    .img-caption {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      text-align: center;
      a {
        color:  lightgrey;
      }
    }
  }
  @media screen and (max-width: 720px) {
    .thumbnail {
      width: 29%;
      padding-bottom: 29%;
      margin: 2.16%;
    }
  }
  @media screen and (max-width: 470px) {
    .thumbnail {
      width: 44%;
      padding-bottom: 44%;
      margin: 3%;
    }
  }
}
</style>
