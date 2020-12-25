<template>
  <div class="home">
    <div class="rule_header">
      <!-- <img src="../assets/返回.png"  />
      <span>{{ $t("rule[0]") }}</span> -->
    </div>
    <div class="bg">
      <img src="../assets/组 794.png" />
      <p>{{ $t("rule[1]") }}</p>
    </div>

    <div class="rule_content">
      <p class="rule_contentheader">
        {{ $t("rule[2]") }}
      </p>
      <div class="rule_contentfooter">
        <p>{{ $t("rule[3]") }}</p>
        <p>
          {{ $t("rule[4]") }}<br />
          {{ $t("rule[5]") }}<br />
          {{ $t("rule[6]") }}<br />
          {{ $t("rule[7]") }}<br />
          {{ $t("rule[8]") }}<br />
          {{ $t("rule[9]") }}<br />
          {{ $t("rule[10]") }}<br />
          {{ $t("rule[11]") }}<br />
          {{ $t("rule[12]") }}<br />
          {{ $t("rule[13]") }}<br />
          {{ $t("rule[14]") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  created() {
    this.$i18n.locale = "cn";
    // console.log(this.$i18n.locale);
  },
  methods: {
    callBack() {
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      try {
        if (isiOS) {
          console.log("ios");
          window.webkit.messageHandlers.returnBack.postMessage("ok");
        }
        if (isAndroid) {
          console.log("android");
          window.android.back();
          // window.android.setUrl("http://www.uenc.io/");
        }
      } catch (e) {
        // console.log("出现错误, 如果在非android环境下访问, 出现该警告是正常的.");
      }
    },
  },
};
</script>
<style lang="less">
.home {
  width: 100%;
  height: auto;
  .rule_header {
    padding-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 277px;
    // background: red;
    background: url("../assets/蒙版组 64.png") no-repeat center/100% 100%;
    img {
      width: 12.82px;
      height: 20.82px;
      position: relative;
      left: 15px;
    }
    span {
      font-size: 18px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 25px;
      color: #333333;
      position: relative;
      right: 45%;
    }
  }
  .bg {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    top: -10px;
    img {
      margin: 0 auto;
      width: 129px;
      height: 45px;
    }
    p {
      position: relative;
      top: -30px;
      width: 100%;
      font-size: 14px;
      font-family: "苹方-简";
      font-weight: normal;
      color: #ffffff;
      text-align: center;
    }
  }
  .rule_content {
    width: 335px;
    height: auto;
    background: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
    opacity: 1;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: -52px;
    margin-bottom: 45px;
    .rule_contentheader {
      padding-top: 40px;
      width: 305px;
      height: auto;
      font-size: 13px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 20px;
      color: #333333;
      margin: 0 auto;
    }
    .rule_contentfooter {
      height: auto;
      margin-top: 10px;
      display: flex;
      flex-direction: row;

      font-size: 13px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 20px;
      color: #333333;
      opacity: 1;
      p:nth-child(1) {
        margin-left: 15px;
      }
      p:nth-child(2) {
        width: 279px;
        height: auto;
        padding-bottom: 20px;
      }
    }
  }
}
</style>
