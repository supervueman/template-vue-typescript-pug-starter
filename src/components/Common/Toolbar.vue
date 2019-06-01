<template lang="pug">
  header.toolbar.d-flex.content-end
    h3.toolbar-menu.d-flex.content-center.align-center
      avatar(:imagePath="avatarPath")
      div.name {{firstname}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Toolbar extends Vue {
  @Prop({
    default: ""
  })
  private firstname: string;

  @Prop({
    default: ""
  })
  private avatarPath: string;
}
</script>


<style lang="sass">
.toolbar
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 60px
  padding: 0 20px
  background-color: #000
  .name
    margin-left: 10px
    color: #fff
</style>
