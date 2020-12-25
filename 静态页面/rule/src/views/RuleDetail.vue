<template>
  <div class="ruledetail">
    <div class="rule_header">
      <!-- <img src="../assets/返回.png" />
      <span>{{ $t("ruledetail[0]") }}</span> -->
    </div>

    <div class="rule_content">
      <ul class="rule_contentfooter">
        <li>
          {{ $t("ruledetail[1]") }}
        </li>
        <li>
          {{ $t("ruledetail[2]") }}
        </li>
        <li>
          {{ $t("ruledetail[3]") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ruledetail",
  components: {},
  created() {
    this.$i18n.locale = "cn";
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
.ruledetail {
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
      right: 40%;
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
    margin-top: 10px;
    margin-bottom: 181px;
    .rule_contentfooter {
      margin-top: 10px;
      font-size: 13px;
      font-family: "苹方-简";
      font-weight: normal;
      color: #333333;
      li {
        width: 305px;
        margin: 0 auto;
        margin-top: 20px;
      }
      li:nth-child(1) {
        padding-top: 20px;
      }
      li:nth-last-child(1) {
        padding-bottom: 20px;
      }
    }
  }
}
</style>
