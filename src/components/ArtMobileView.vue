<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ArtMobileView extends Vue {
  @Prop() isLoading!: boolean;
}
</script>

<style lang="scss" scoped></style>
