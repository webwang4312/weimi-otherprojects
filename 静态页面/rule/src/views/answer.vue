<template>
  <div class="answer">
    <div class="rule_header">
      <!-- <img src="../assets/返回.png"  />
      <span>{{ $t("rule[0]") }}</span> -->
    </div>
    <div class="bg">
      <img src="../assets/组 794.png" />
      <p>{{ $t("answer[0]") }}</p>
    </div>

    <ul class="rule_content">
      <li>
        {{ $t("answer[1]") }}
      </li>
      <li>
        {{ $t("answer[2]") }}
      </li>
      <li>
        {{ $t("answer[3]") }}
      </li>
      <li>
        {{ $t("answer[4]") }}
      </li>
      <li>
        {{ $t("answer[5]") }}
      </li>
      <li class="two_column">
        <p>
          {{ $t("answer[6]") }}
        </p>
        <p>
          {{ $t("answer[7]") }}<br />
          {{ $t("answer[8]") }}
        </p>
      </li>
    </ul>
    <div class="bg bg2">
      <img src="../assets/组 794.png" />
      <p>{{ $t("answer[9]") }}</p>
    </div>
    <ul class="rule_content rule_content2">
      <li>
        {{ $t("answer[10]") }}
      </li>
    </ul>
    <div class="bg bg2">
      <img src="../assets/组 794.png" />
      <p>{{ $t("answer[11]") }}</p>
    </div>
    <ul class="rule_content rule_content2 ">
      <li>
        {{ $t("answer[12]") }}
      </li>
      <li>
        {{ $t("answer[13]") }}
      </li>
      <li>
        {{ $t("answer[14]") }}
      </li>
      <li class="two_column">
        <p>{{ $t("answer[15]") }}</p>
        <p>
          <span>{{ $t("answer[16]") }}</span><br />
          <span>{{ $t("answer[17]") }}</span><br />
         <span> {{ $t("answer[18]") }}</span><br />
          <span>{{ $t("answer[19]") }}</span>
        </p>
      </li>
      <li>
        {{ $t("answer[20]") }}
        {{ $t("answer[21]") }}
      </li>
      <li class="two_column">
        <p>{{ $t("answer[22]") }}</p>
        <p>
          <span>{{ $t("answer[23]") }}</span><br />
          <span>{{ $t("answer[24]") }}</span><br />
          <span>{{ $t("answer[25]") }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "answer",
  components: {},
  created() {
    this.$i18n.locale = "cn";
    // console.log(this.$i18n.locale);
  },
  methods: {},
};
</script>
<style lang="less">
.answer {
  width: 100%;
  height: auto;
  .two_column {
    display: flex;
    flex-direction: row;
   span{
     display: inline-block;
    margin-top: 10px!important;
   }
   span:nth-child(1){
      margin-top: 0px!important;
   }
  }
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
  .bg2 {
    position: relative;
    top: -30px !important;
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
  .rule_content2 {
    margin-top: -72px !important;
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
    li {
      width: 305px;
      margin: 0 auto;
      padding-top: 20px;
      font-size: 13px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 20px;
      color: #333333;
    }
    li:nth-child(1) {
      padding-top: 40px;
    }
    li:nth-last-child(1) {
      padding-bottom: 20px;
    }
  }
}
</style>
