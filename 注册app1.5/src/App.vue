<template>
  <div id="app">
    <router-view v-if="isRouterAlive"> </router-view>
  </div>
</template>

<style lang="less">
@import "assets/css/normalize.css";
#app {
  font-family: "苹方-简";
  font-size: 16px;
}
</style>
<script>
// import headerTop from "@components/content/HeaderTop.vue";
// import BackTop from "@components/common/BackTop.vue";
//import VFooter from "@components/common/Footer.vue";
export default {
  name: "app",
  data() {
    return { isRouterAlive: true };
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  components: {
    //  headerTop,
    //VFooter
  },
  created() {},
  mounted() {},
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>
