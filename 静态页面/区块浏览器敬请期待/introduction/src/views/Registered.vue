<template>
  <div class="about">
    <p class="title">区块浏览器</p>
    <img src="@assets/images/0903@3x.png" class="zhong" />
    <p class="title2" @click="lookForward" id="title2">敬请期待...</p>
   
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    lookForward() {
     window.android.setUrl("http://www.uenc.io/")
    },
  },
};
</script>
<style lang="less">
.about {
  position: relative;
  width: 100%;
  .title {
    position: absolute;
    left: 143px;
    top: 42px;
    font-size: 18px;
    font-family: "苹方-简";
    font-weight: normal;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    opacity: 1;
  }
  .zhong {
    position: absolute;
    left: 40px;
    top: 175px;
    width: 295px;
    height: 243.99px;
  }
  .title2 {
    position: absolute;
    left: 150px;
    top: 439px;
    font-size: 16px;
    font-family: "苹方-简";
    font-weight: normal;
    line-height: 22px;
    color: rgba(51, 51, 51, 1);
    opacity: 1;
    cursor: pointer;
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 44px;

    background: rgba(245, 245, 245, 1);
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.16);
    opacity: 1;
    border-radius: 15px 15px 0px 0px;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      li {
        position: relative;
        top: 5px;
        font-size: 9px;
        font-family: "苹方-简";
        font-weight: normal;
        line-height: 13px;
        color: rgba(153, 153, 153, 1);
        opacity: 1;
        text-align: center;
        p {
          text-align: center;
        }
        span {
          position: relative;
          left: -5px;
        }
        .liulanqi {
          color: rgba(68, 137, 247, 1);
          text-align: center;
          // position: relative;
          // left: -8px;
        }
        img {
          width: 22px;
          height: 22px;
          text-align: center;
        }
      }
    }
  }
}
</style>
