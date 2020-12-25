<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import './assets/css/htmleaf-demo.css';
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>
<script>
export default {
  mounted() {
    // 检测浏览器路由改变页面不刷新问题,hash模式的工作原理是hashchange事件
    window.addEventListener(
      "hashchange",
      () => {
        let currentPath = window.location.hash.slice(1);
        //console.log(currentPath);
        if (this.$route.path !== currentPath) {
          this.$router.push(currentPath);
        }
      },
      false
    );
  },
};
</script>
