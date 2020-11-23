<template>
  <div>
    <router-view></router-view>
    <van-tabbar route></van-tabbar>
  </div>
</template>

<script>
import vanTabbar from "./views/tabbar";

export default {
  name: "App",
  components: {
    vanTabbar,
  },
};
</script>

<style lang="scss">
@import "assets/css/base.css";
</style>
