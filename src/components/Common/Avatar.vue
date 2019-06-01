<template lang="pug">
  div.avatar
    img(:src="imagePath", alt="Avatar")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import config from "@/config";

@Component
export default class Avatar extends Vue {
  @Prop({
    default: ""
  })
  private imagePath: string;

  staticImgBasePath: string = config.staticImgBasePath;
}
</script>

<style lang="sass">
.avatar
  width: 50px
  height: 50px
  border-radius: 100%
  overflow: hidden
  border: 2px solid #fff
  img
    width: 100%
</style>

