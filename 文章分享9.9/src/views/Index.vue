<template>
  <div>
    <div class="index" ref="imageWrapper">
      <img
        src="@assets/images/index/0f9841b2a3a2e78b0ebb407b20b358920196f7cc55bd6-iUxLYw.png"
        class="titleimg"
      />
      <div class="fenxiang">文章分享</div>
      <div class="nicheng">
        <img :src="userimg" alt="" />
        <div class="nichengright">
          <div class="username">{{ username }}</div>
          <div class="time" ref="time">{{ time }}</div>
        </div>
      </div>
      <div class="title">{{ title }}</div>

      <div id="content" v-html="content">
        
      </div>
      <div class="infooter">
        <div class="footercontent">
          扫码下载EnergyClub APP 在学习区块链的路上不独行 11万人和你一起在玩
        </div>
        <div id="qrcode" ref="qrcode"></div>
      </div>
    </div>
    <!-- <div v-if="img" style="height:auto">
      <img :src="imgUrled" style="height:auto;width:375px" ref="shangchuan" />
    </div>-->
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
import html2canvas from "html2canvas";
import uuidv1 from "uuid/v1";
import Qs from "qs";
import crypto from "crypto";
import { log } from "util";
export default {
  name: "index",
  data() {
    return {
      nowLang: "",
      newsId: "",
      userId: "",
      userimg: "",
      username: "",
      title: "",
      time: "",
      content: "",
      height: "",
      imgUrled: "",
      img: true,
      invitecode: "",
      inviteUrl: "",
    };
  },
  created() {
    this.nowLang = this.$i18n.locale;
    // url截取newsid
    this.newsId = this.getQueryString("newsId");
    // d63b8e93ec77454daac41ef40464b245
    //  console.log(this.newsId);
    this.acceptinformation();
  },
  computed: {},
  mounted() {
    // console.log(this.$refs);
    // console.log(this.$refs.imageWrapper.clientHeight);
    // console.log(this.$refs.time.clientHeight);
    // this.height = this.$refs.imageWrapper.clientHeight;
    // console.log(this.height);
    // console.log(this.$refs);
    // console.log(this.$refs.imageWrapper.scrollHeight);
  },
  methods: {
    payOrder() {
      this.innerVisible = true;
      // 二维码内容,一般是由后台返回的跳转链接,这里是写死的一个链接
      // https://www.cnblogs.com${se}p/11271829.html
      this.qrcode = this.inviteUrl;
      // 使用$nextTick确保数据渲染
      this.$nextTick(() => {
        this.crateQrcode();
      });
    },
    crateQrcode() {
      this.qr = new QRCode("qrcode", {
        width: 80,
        height: 80, // 高度
        useCORS: true, // 【重要】开启跨域配置
        allowTaint: true, //允许跨域图片
        taintTest: false, //是否在渲染前测试图片
        // https://www.cnblogs.com/steamed-twisted-roll/p/11271829.html
        text: this.inviteUrl, // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        background: "#f00",
        // foreground: '#ff0'
      });
      //  console.log(this.qrcode)
    },
    // 转成图片
    // toImage() {
    //   window.scrollTo(0, 0);
    //   this.$nextTick(function() {
    //     html2canvas(this.$refs.imageWrapper, {
    //       width: 375,
    //       height: this.$refs.imageWrapper.scrollHeight,
    //     }).then((canvas) => {
    //       // console.log(canvas);
    //       // 转成图片，生成图片地址
    //       this.imgUrled = canvas
    //         .toDataURL("image/webp")
    //         .replace("image/png", "image/octet-stream");
    //       // this.images = false;
    //       // console.log(this.imgUrled);
    //       // this.sub();
    //     });
    //   });
    // },
    timestampToTime(timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate();
      if (D < 10) {
        D = "0" + D + "  ";
      } else {
        D = D + "  ";
      }
      var h = date.getHours();
      if (h < 10) {
        h = "0" + h + ":";
      } else {
        h = h + ":";
      }
      var m = date.getMinutes();
      if (m < 10) {
        m = "0" + m + ":";
      } else {
        m = m + ":";
      }
      var s = date.getSeconds();
      if (s < 10) {
        s = "0" + s;
      } else {
        s = s;
      }
      return Y + M + D + h + m + s;
    },
    // 解析地址
    //获取url中的参数方法
    getQueryString(name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      if (window.location.hash.indexOf("?") < 0) {
        return null;
      }
      let r = window.location.hash.split("?")[1].match(reg);
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    },
    // 上传到后台
    // sub() {
    //   var scrollheight = Qs.stringify({
    //     // length: this.height,
    //     img: this.imgUrled,
    //     newsId: this.newsId,
    //   });
    //   this.$http
    //     // http://192.168.1.60:8080/weimi/news/addNewsCache
    //     .post("http://192.168.1.60:8080/weimi/news/addNewsCache", scrollheight)
    //     // /news/addNewsCache
    //     .then((res) => {
    //       // console.log(res);
    //     })
    //     .catch((data) => {});
    // },
    // 获取页面信息
    acceptinformation() {
      var infor = Qs.stringify({
        newsId: this.newsId,
      });
      this.$http
        // 测试版
        // 192.168.1.60:8080
        //12.9测试版本47.98.110.210:8080
        // 上线版
        // 47.105.215.191
        .post("http://47.98.110.210:8080/weimi/news/webNewsInfo", infor)
        .then((res) => {
          // console.log(res);
          // 头像
          this.userimg = res.data.result.userImg;
          // 昵称
          this.username = res.data.result.nickName;
          // 标题
          this.title = res.data.result.title;
          // 时间
          this.time = this.timestampToTime(
            res.data.result.publishTime
          ).substring(5);
          // 内容
          this.content = res.data.result.content;
          // 邀请码
          this.invitecode = res.data.result.inviteCode;
          this.inviteUrl = res.data.result.inviteUrl;
          // console.log(this.inviteUrl);
          this.payOrder();
          // setTimeout(this.toImage, 500);
        })
        .catch((data) => {});
    },
  },
};
</script>
<style lang="less">
.fenxiang {
  position: absolute;
  left: 84px;
  top: 95px;
  width: 250px;
  height: 56px;
  line-height: 56px;
  font-size: 40px;
  font-family: "苹方-简";
  font-weight: normal;
  color: #ffffff;
  letter-spacing: 20px;
  opacity: 1;
  margin: 0 auto;
}
.index {
  width: 100%;
  height: auto;
  background: white;
  position: relative;
  .nicheng {
    width: 100%;
    height: 70px;
    position: relative;
    top: -5px;

    display: flex;
    flex-direction: row;
    img {
      position: relative;
      left: 20px;
      top: 15px;
      width: 50px;
      height: 50px;
      background: rgba(0, 0, 0, 0);
      border-radius: 50%;
      opacity: 1;
    }
    .nichengright {
      margin-left: 30px;
      margin-top: 15px;
      .username {
        font-size: 20px;
        font-family: "苹方-简";
        font-weight: normal;
        line-height: 28px;
        color: #333333;
        opacity: 1;
      }
    }
  }
  .titleimg {
    position: relative;
    top: 0;
    width: 100%;
    height: 200px;
  }
  .title {
    position: relative;
    top: 0px;
    width: 100%;
    height: auto;
    font-size: 18px;
    font-family: "苹方-简";
    font-weight: normal;
    line-height: 26px;
    color: #333333;
    opacity: 1;
    text-align: center;
    margin: 0 auto;
  }
  .time {
    position: relative;
    top: 0;
    width: 100%;
    height: auto;
    font-size: 12px;
    font-family: "苹方-简";
    font-weight: normal;
    line-height: 26px;
    color: #333333;
    opacity: 1;
    padding-left: 0px;
  }
  #content {
    position: relative;
    top: 0;
    width: 89.3% !important;
    word-break: break-all !important;
    height: auto;
    font-size: 14px;
    font-family: "苹方-简";
    font-weight: normal;
    line-height: 24px;
    color: #666666;
    opacity: 1;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .infooter {
    position: relative;
    top: 0;
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
    background: #f5f5f5;
    opacity: 1;
    .footercontent {
      width: 156px;
      height: auto;
      font-size: 13px;
      font-family: "苹方-简";
      font-weight: normal;
      line-height: 26px;
      color: #666666;
      opacity: 1;
      margin-left: 20px;
      margin-top: 20px;
    }
    #qrcode {
      position: relative;
      // left: 99px;
      right: 20px;
      top: 15px;
      width: 80px;
      height: 80px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      opacity: 1;
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>
