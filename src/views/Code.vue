<template>
  <div id="container">
    <Spider />
    <div v-show="isLoading" class="loader">
      <img src="/bucketLoader.gif" width="100" height="100" alt="Loading..." />
    </div>
    <section id="gallery">
      <!--Dynamic javascript inserted here-->
      <div v-if="isMobile" class="warn">
        <p>
          &#9888; Note: Most of the code samples do not work on small screens.
          Please view from a desktop for a bug free experience
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Spider from "@/components/Spider.vue";
import { getCodeProjects } from "@/utils/apiCalls";
import { CodeProjects } from "@/types/types.interface"
@Component({
  components: {
    Spider
  }
})
export default class Code extends Vue {
  @Prop(Boolean) isMobile!: boolean;
  thumbnails: CodeProjects[] = [];
  isLoading = true;

  async mounted() {
    const projects: CodeProjects[] = await getCodeProjects();
    this.isLoading = false;
    const container = document.querySelector('#gallery') as HTMLElement
    // Create the html dynamically so we can loop over data and create css background images from an api call
    projects.forEach(project => {
      const wrapper = document.createElement('div')
      const innerWrapper = document.createElement('div')
      const link = document.createElement('a')
      const div = document.createElement('div')
      const imgCaption = document.createElement('div')
      const span = document.createElement('span')
      const button = document.createElement('button')
      wrapper.setAttribute('class', 'thumbnail')
      link.setAttribute('target', "_blank")
      link.setAttribute('rel', "noopener noreferrer")
      link.setAttribute('href', `${project.url}`)
      innerWrapper.setAttribute('class', "img-container");
      div.setAttribute('class', `${this.getClassName(project.id)} size`)
      const thumbnail: string = `url('/codeimages/${project.thumbnail}')`
      div.style.backgroundImage = thumbnail;
      imgCaption.setAttribute('class', 'img-caption table')
      span.setAttribute('class', 'table-cell')
      button.setAttribute('class', 'btn btn-p btn-trans')
      button.setAttribute('role', 'button')
      button.innerHTML = project.title
      container.appendChild(wrapper)
      wrapper.appendChild(link)
      link.appendChild(innerWrapper)
      innerWrapper.appendChild(div)
      div.appendChild(imgCaption)
      imgCaption.appendChild(span)
      span.appendChild(button)
    })
  }

  getClassName(id: number): string {
    switch (id) {
      case 1:
        return "divz";
        break;
      case 2:
        return "dragAndDrop";
        break;
      case 3:
        return "ballpit";
        break;
      case 4:
        return "robotBuilder";
        break;
      case 5:
        return "thesis";
        break;
      case 6:
        return "unicode";
        break;
      case 7:
        return "weather";
        break;
      default: return '';
    }
  }
}
</script>

<style lang="scss">
/* Bugs exist while using scoped css selectors and attaching css to dynamically generated 
html/javascript so, remove the scope and wrap everthing in a container class */
$font-family: "Ubuntu", sans-serif !important;
$font-size-base: 16px;
$font-weight: 100;
$bg-color: #444;
$bg-color2: #666;
$almost-white: rgb(255, 255, 255);
$btn-transparent-color: rgb(247, 243, 212);
$btn-transparent-bg: rgba(145, 143, 131, 0.95);

#container{
  margin: 0;
  min-height: 100vh;
  .loader {
    position: absolute;
    top: 250px;
    width: 100%;
  }
  .warn{
    height: auto;
    background: #F8AB49;
    margin: 10px 20px 20px 20px;
    border-radius: 10px;
    border: 1px solid lightgrey;
    p {
      color: white !important;
    }
  }
  .size{
    height: 100%;
    background-color: white;
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat -9999px -9999px;
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
      text-align: center;
      background: rgba(0, 0, 0, 0.4);
      &:hover{
        background: rgba(0, 0, 0, 0.7);
      }
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
        background: rgba(255, 255, 255, 0.8);
      }
    }
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


</style>