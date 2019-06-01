<template lang="pug">
  div.page.d-flex.align-center.content-center
    div.profile-card.d-flex.column.align-center.content-center
      avatar(:imagePath="`${staticImgBasePath}/${profile.avatar}`")
      h3.name {{profile.lastname}} {{profile.firstname}}
      div Age: {{profile.age}}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import config from "@/config";

@Component
export default class Index extends Vue {
  @Getter("getProfile", { namespace: "profile" }) profile: string;

  staticImgBasePath: string = config.staticImgBasePath;
}
</script>

<style lang="sass">
.page
  .profile-card
    width: 400px
    background-color: #000
    color: #fff
    padding: 20px
    .name
      margin-top: 20px
    .avatar
      width: 150px
      height: 150px
</style>

