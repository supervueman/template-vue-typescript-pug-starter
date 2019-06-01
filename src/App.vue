<template lang="pug">
  div(id="app")
    toolbar(:firstname="profile.firstname" :avatarPath="`${staticImgBasePath}/${profile.avatar}`")
    div(id="nav")
    router-view
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import config from "@/config";

@Component
export default class App extends Vue {
  @Action("fetchProfile", { namespace: "profile" }) fetchProfile: any;
  @Getter("getProfile", { namespace: "profile" }) profile: string;

  async mounted() {
    await this.fetchProfile();
  }

  staticImgBasePath: string = config.staticImgBasePath;
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
