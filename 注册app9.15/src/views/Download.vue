<template>
  <div id="home">
    <div class="container">
      <div class="title">{{ $t("title[0]") }}</div>
      <div class="content-title">
        {{ $t("contenttitle[0]") }}
      </div>

      <div class="footer">
        <div class="left">
          <img
            src="../assets/images/registration/android.png"
            @click="androiddown"
            alt
          />
          <p>  {{ $t("android[0]") }}</p>
        </div>
        <div id="right">
          <img
            src="../assets/images/registration/apple.png"
            @click="appledown"
            alt
          />
          <p>  {{ $t("ios[0]") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    androiddown() {
      // console.log('d');
      window.open("http://pili-vod.uenc.net/EnergyClub.apk");
    },
    appledown() {
      window.open("https://testflight.apple.com/join/vmwxkkuv");
    },
  },
};
</script>
<style lang="less">
#home {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url(../assets/images/registration/bg.png) center/100% 100%;
  .container {
    width: 86%;
    height: 100%;
    // height: 667px;
    position: relative;
    margin: 0 auto;
    p {
      font-size: 12px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 13px;
      color: rgba(255, 255, 255, 1);
      opacity: 1;
    }
    p:nth-of-type(1) {
      position: relative;
      top: -35px;
      left: 25px;
    
    }
   #right p{
      position: relative;
      top: -35px;
      left:40px!important;
   }
  }
  .title {
    width: 375px;
    height: 33px;
    position: relative;
    font-family: "苹方-简";
    top: 67px;
    left: 3px;
    font-size: 24px;
    font-weight: normal;
    line-height: 28px;
    color: rgba(255, 255, 255, 1);
    opacity: 1;
  }

  .content-title {
    width: 340px;
    height: 26px;
    position: relative;
    left: 1px;
    top: 95px;
    font-size: 9px;
    font-family: "苹方-简";
    font-weight: normal;
    line-height: 13px;
    color: rgba(255, 255, 255, 1);
    opacity: 0.5;
  }

  .footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 55vh;
    margin: 0 auto;
    justify-content: space-around;
    img {
      width: 140px;
      height: 140px;
      cursor: pointer;
    }
    //background-color:greenyellow;
  }
}
</style>
