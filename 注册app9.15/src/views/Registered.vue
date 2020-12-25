<template>
  <div class="about">
    <div class="title">
      <p>{{ $t("titletop[0]") }}</p>
      <p>{{ $t("titlesecond[0]") }}</p>
    </div>
    <div class="content">{{ $t("content[0]") }}</div>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item>
        <label
          :class="{ movepassword: showpassword }"
          @click="fshowpassword"
          id="mimalabels"
          >{{ $t("password[0]") }}</label
        ></el-form-item
      >

      <!-- 选择语言 -->
      <el-select
        v-model="value"
        @change="switchLanguage(value)"
        class="el-select"
        :placeholder="$i18n.locale"
        id="selectlanguage"
      >
        <el-option
          v-for="item in language"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <!-- 昵称 -->
      <el-form-item prop="name" id="name">
        <label :class="{ movename: showname }">{{ $t("name[0]") }}</label>
        <el-input
          ref="name"
          v-model="ruleForm.name"
          @focus="fshowname"
          @blur="fshownameb"
        ></el-input>
      </el-form-item>
      <!-- 手机号 -->
      <select
        name="public-choice"
        v-model="countrySelected"
        @change="getcountry"
      >
        <option
          :value="coupon.name"
          v-for="coupon in country"
          :key="coupon.id"
          class="selectoption"
          >{{ coupon.name }}</option
        >
      </select>

      <el-form-item prop="phone" id="phone">
        <label :class="{ movephone: showphone }">{{ $t("phone[0]") }}</label>
        <el-input
          v-model="ruleForm.phone"
          @focus="fshowphone"
          @blur="fshowphoneb"
          id="messageInput"
          ref="phone"
        ></el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item prop="yanzhengma" id="verification">
        <label :class="{ movever: showver }" id="verification2">{{
          $t("yanzhengma[0]")
        }}</label>
        <el-input
          v-model="ruleForm.yanzhengma"
          @focus="fshowver"
          @blur="fshowverb"
          id="verification3"
        ></el-input>
        <el-button
          type="primary"
          id="accept"
          :disabled="yandisabled"
          @click="acceptverification"
          v-loading.fullscreen.lock="fullscreenLoading"
        >
          <span v-show="showtimer">{{ $t("yanzhengma2[0]") }}</span>
        </el-button>
        <span v-show="!showtimer" class="count spantimer">{{ count }} s</span>
      </el-form-item>

      <!-- 密码· -->
      <el-form-item prop="password1" id="passwordzong">
        <el-input
          :type="pass"
          v-model="ruleForm.password1"
          ref="show"
          autocomplete="off"
          @focus="fshowpassword"
          @blur="fshowpasswordb"
        ></el-input>
      </el-form-item>
      <img
        src="../assets/images/registration/hide.png"
        v-if="hide == false"
        @click="showhide"
        class="passwordimg1"
      />
      <img
        src="../assets/images/registration/show.png"
        v-else
        @click="showhide"
        class="passwordimg1"
      />
      <!-- 确认密码 -->
      <el-form-item prop="password2" id="confirmpassword">
        <label
          :class="{ movepassword2: showpassword2 }"
          @click="fshowpassword2"
          >{{ $t("confirmpassword[0]") }}</label
        >
        <el-input
          :type="pass2"
          v-model="ruleForm.password2"
          @blur="confirm"
          ref="hide"
          autocomplete="off"
          @focus="fshowpassword2"
        ></el-input>
      </el-form-item>
      <p v-show="notpassword" class="notpassword">{{ $t("notpassword[0]") }}</p>
      <img
        src="../assets/images/registration/hide.png"
        v-if="show == false"
        @click="hideshow"
        id="imgconfirm"
      />
      <img
        src="../assets/images/registration/show.png"
        v-else
        @click="hideshow"
        id="imgconfirm"
      />

      <el-form-item prop="yaoqingma" id="yaoqingma">
        <label>{{ $t("yaoqingma[0]") }}</label>
        <el-input
          v-model.number="ruleForm.yaoqingma"
          disabled="disabled"
        ></el-input>
      </el-form-item>
      <!-- 注册 -->
      <el-form-item id="registered">
        <el-button @click="registered">
          <span>{{ $t("zhuce[0]") }}</span>
        </el-button>
      </el-form-item>
      <!-- 下载 -->
      <el-form-item id="download">
        <el-button class="button1" @click="down">
          {{ $t("xiazai[0]") }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
var qs = require("qs");
import {
  GET,
  GETINDEX,
  GETRECOMMEND,
  GETNEWS,
  DOWNBAIPISHU,
} from "../network/api/api";
import crypto from "crypto";
import { zhCN, country, password, namechecked } from "../assets/rule.js";
import { log } from "util";
export default {
  data() {
    // 昵称验证
    var namecheck = (rule, value, callback) => {
      if (!namechecked.test(value)) {
        if (this.$i18n.locale == "en") {
          callback(
            new Error(
              "Cannot contain special characters, emoticons, within 10 characters"
            )
          );
        } else if (this.$i18n.locale == "cn") {
          callback(new Error("不能包含特殊字符、表情,10个字符以内"));
        }
        this.ruleForm.name = "";
      }
    };
    // 手机号验证
    var checkPhone = (rule, value, callback) => {
      if (this.phoneleave == "86+") {
        if (!zhCN.test(value)) {
          if (this.$i18n.locale == "en") {
            callback(new Error("Number format is incorrect"));
          } else if (this.$i18n.locale == "cn") {
            callback(new Error("号码格式不正确"));
          }
          this.ruleForm.phone = "";
        }
      }
    };
    // 密码框限制
    var passwordxianzhi = (rule, value, callback) => {
      if (!password.test(value)) {
        if (this.$i18n.locale == "en") {
          callback(new Error("Combination of 6-16 digits and letters"));
        } else if (this.$i18n.locale == "cn") {
          callback(new Error("6-16位数字和字母的组合"));
        }
        this.ruleForm.password1 = "";
      }
    };
    return {
      pass: "password",
      pass2: "password",
      value: this.$i18n.locale, //为了把下拉框的默认值和全局变量的值一致，以此实现载入页面时显示的语言和数据配置一致
      language: [
        {
          value: "en-US",
          label: "English",
        },
        {
          value: "zh-CN",
          label: "中文简体",
        },
      ],
      // 密码不一致
      notpassword: false,
      // 倒计时
      showtimer: true,
      count: "",
      timer: null,
      // 加载界面效果
      loading: false,
      yandisabled: false,
      loadingshow: false,
      country: "",
      countrySelected: "",
      // 区号
      phoneleave: "",
      // 手机号加区号
      allphone: "",
      // 手机号+区号+参数
      phonecountry: "",
      // 手机号+区号+参数加密
      phonejiami: "",
      // 注册
      zhucejiami: "",
      // 注册加密
      zhucejiamifinish: "",
      value: "",
      nowLang: "",
      fullscreenLoading: false,
      hide: false,
      show: false,
      InviteCode: "",
      nowLan: "en",
      title: "",
      value: "",
      // 昵称
      showname: false,
      //  手机号
      showphone: false,
      // 验证码
      showver: false,
      yy: "",
      yy2: "",
      // 密码
      showpassword: false,
      //  确认密码
      showpassword2: false,
      // 表单验证规则
      ruleForm: {
        name: "",
        phone: "",
        yanzhengma: "",
        password1: "",
        password2: "",
        yaoqingma: "",
      },
      rules: {
        name: [{ validator: namecheck, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
        password1: [{ validator: passwordxianzhi, trigger: "blur" }],
        password2: [{ trigger: "blur" }],
        yaoqingma: [{ trigger: "blur" }],
      },
    };
  },
  watch: {
    phoneleave(val) {
      //普通的watch监听
      //console.log(val);
    },
  },
  created() {
    //+86
    this.countrySelected = country[0].name;
    // 语言
    this.nowLang = this.$i18n.locale;
    //console.log(this.nowLang);
    // 区号全部
    this.country = country;
    // 获取url地址
    //console.log(window.location.href);
    // 邀请码设置
    this.ruleForm.yaoqingma = this.getQueryString("InviteCode");
    // console.log(this.ruleForm.yaoqingma);
  },
  mounted() {
    this.loading = true;
    // window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    // handleScroll(e) {
    //   var scrollTop =
    //     e.target.documentElement.scrollTop || e.target.body.scrollTop; // 执行代码
    //     console.log(scrollTop);
    // },
    chulanguage() {},
    // 获取区号
    getcountry() {
      this.phoneleave = this.countrySelected.replace(/\+/, "") + "+";
      this.ruleForm.phone = "";
      //console.log(this.phoneleave);
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
    // 发送验证码
    sendyanzhengma() {
      var that = this;
      that.$http
        .post(
          // 测试上
          "http://47.98.110.210/weimi/index/getPhoneCode",
          qs.stringify({
            phone: that.allphone,
            type: 0,
            // 加密
            accessToken: that.phonejiami,
          })
        )
        .then((res) => {
          //console.log(res);
          if (res.data.code == 200) {
            // 倒计时效果
            const TIME_COUNT = 60;
            if (!this.timer) {
              this.count = TIME_COUNT;
              this.showtimer = false;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                  this.count--;
                  this.yandisabled = true;
                } else {
                  this.showtimer = true;
                  this.yandisabled = false;
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000);
            }
            //console.log(this.yandisabled);
            this.yandisabled = true;
          } else if (res.data.code == 400) {
            //console.log(res);
            this.yy = res.data.result;
            this.$message({
              message: this.yy,
              type: "success",
            });
          } else {
            return false;
          }
        })
        .catch((err) => {
          console.log(err, "验证码");
        });
    },
    // 获取手机验证码
    async acceptverification() {
      var that = this;

      if (that.ruleForm.phone !== "") {
        if (this.phoneleave == "86+") {
          // 86+并验证
          if (!zhCN.test(this.ruleForm.phone)) {
            return false;
          } else {
            this.sendyanzhengma();
          }
        } else {
          this.sendyanzhengma();
        }

        //console.log(that.allphone+'0'+that.phonejiami);
      } else if (that.ruleForm.phone == "") {
        if (this.$i18n.locale == "en") {
          this.$message.error("Please enter your phone");
        } else if (this.$i18n.locale == "cn") {
          this.$message.error("请输入手机号码");
        }
      }
    },
    // 离开电话号码blur时
    fshowphoneb() {
      if (this.ruleForm.phone === "") {
        this.showphone = false;
        return false;
      }
      // 手机号加区号
      this.allphone = this.phoneleave + this.ruleForm.phone;
      //console.log(this.allphone);
      // 手机号加区号+参数
      this.phonecountry = this.allphone + "pirate_abominable";
      //console.log(this.phonecountry);
      // 加密处理
      var md5 = crypto.createHash("md5");
      md5.update(this.phonecountry); //需要加密的密码
      // 手机号+区号+参数加密
      var password = md5.digest("hex"); //password 加密完的密码
      this.phonejiami = password;
      //console.log(this.phonejiami);
    },

    // 聚焦手机号
    fshowphone() {
      // this.$refs.phone.scrollTop=0
      // document.documentElement.scrollTop=0
      this.showphone = true;
      // 区号的设置
      if (this.phoneleave == "") {
        this.phoneleave = "86+";
      }
      //console.log(this.phoneleave);
    },

    // 注册路径指向
    registered() {
      if (
        this.ruleForm.name !== "" &&
        this.ruleForm.phone !== "" &&
        this.ruleForm.yanzhengma !== "" &&
        this.ruleForm.password1 !== "" &&
        this.ruleForm.password2 !== "" &&
        this.ruleForm.yaoqingma !== ""
      ) {
        this.$http
        // 47.105.215.191
        // 测试版
        // 192.168.1.60
        //12.9测试版本47.98.110.210
          .post(
            "http://47.98.110.210/weimi/index/register",
            qs.stringify({
              // 昵称
              nickName: this.ruleForm.name,
              // 密码
              pwd: this.ruleForm.password2,
              // 手机号
              phone: this.allphone,
              // 邀请码
              inviteCode: this.ruleForm.yaoqingma,
              // 验证码
              phoneCode: this.ruleForm.yanzhengma,

              accessToken: this.zhucejiamifinish,
            })
          )
          .then((res) => {
            // console.log(res);
            if (res.data.code == 400) {
              //console.log(res);
              this.yy2 = res.data.result;
              alert(this.yy2);
            } else if (res.data.code == 200) {
              this.$message({
                message: "恭喜你，注册成功",
                type: "success",
              });
              this.$router.push({ path: "/download" });
            } else {
              return false;
            }
          });
      } else {
        if (this.$i18n.locale == "en") {
          this.$message.error("Please complete information");
        } else if (this.$i18n.locale == "cn") {
          this.$message.error("请填写完整信息");
        }
      }
    },
    // 下载
    down() {
      this.$router.push({ path: "/download" });
    },
    // 语言的切换

    switchLanguage(value) {
      if (value == "zh-CN") {
        this.$i18n.locale = "cn";
      } else if (value == "en-US") {
        this.$i18n.locale = "en";
      } else {
        return false;
      }
      //在选择了显示的语言后，将配置保存到Cookie中
    },
    // 两次密码的确认
    confirm() {
      if (this.ruleForm.password2 == "") {
        this.showpassword2 = false;
        this.notpassword = false;
      }
      if (this.ruleForm.password1 !== this.ruleForm.password2) {
        this.notpassword = true;
        this.ruleForm.password2 = "";
      }
      if (this.ruleForm.password1 == this.ruleForm.password2) {
        // this.ruleForm.password2 = "";
        this.notpassword = false;
      }
    },
    // 眼睛图片的现实与隐藏
    showhide() {
      this.hide = !this.hide;
      if (this.hide == false) {
        if (this.pass == "text") {
          this.pass = "password";
        }
      } else {
        this.pass = "text";
      }
    },
    hideshow() {
      this.show = !this.show;
      if (this.show == false) {
        if (this.pass2 == "text") {
          this.pass2 = "password";
        }
      } else {
        this.pass2 = "text";
      }
    },
    // label设置
    // 昵称
    fshowname() {
      this.showname = true;
    },
    fshownameb() {
      if (this.ruleForm.name == "") {
        this.showname = false;
      }
    },

    // 验证码
    fshowver() {
      this.showver = true;
    },
    fshowverb() {
      if (this.ruleForm.yanzhengma == "") {
        this.showver = false;
      }
      // 显示验证码
      //console.log(this.ruleForm.yanzhengma);
      this.zhucejiami =
        this.allphone + "weimi_energy_chat" + this.ruleForm.yanzhengma;
      //console.log(this.zhucejiami);
      var md5 = crypto.createHash("md5");
      // 注册加密
      md5.update(this.zhucejiami);
      var password2 = md5.digest("hex");
      this.zhucejiamifinish = password2;
      //console.log(this.zhucejiamifinish);
    },

    // 密码
    fshowpassword() {
      this.showpassword = true;
      //this.$refs.show.autofocus = "autofocus";
    },
    fshowpasswordb() {
      if (this.ruleForm.password1 == "") {
        this.showpassword = false;
      }
    },

    // 确认密码
    fshowpassword2() {
      this.showpassword2 = true;
      //console.log(this.$refs);
      //this.$refs.hide.autofocus = "true";
    },
    fshowpassword2b() {
      if (this.ruleForm.password2 == "") {
        this.showpassword2 = false;
      }
    },
  },
};
</script>
<style lang="less">
.el-select {
  position: relative;
  top: -30px;
}
#mimalabels {
  position: relative;
  top: 307px;
  left: 15px;
  font-size: 14px;
  font-family: "苹方-简";
  font-weight: normal;
  line-height: 13px;
  color: snow;
  opacity: 1;
}
.passwordimg1 {
  position: relative;
  top: 320px !important;
}
#selectlanguage {
  position: relative;
  top: -2px;
}
#name {
  width: 305px;
  height: 40px;
  position: relative;
  top: -36px;
  label {
    position: relative;
    left: 13px;
  }
}
.notpassword {
  position: absolute;
  top: 430px;
  left: 10px;
  font-size: 12px;
  font-family: "苹方-简";
  font-weight: normal;
  line-height: 13px;
  color: #f56c6c;
  opacity: 1;
}
label {
  position: relative;
  top: 40px;
  left: 4px;
  opacity: 1 !important;
  font-size: 12px !important;
}
@keyframes move {
  from {
    position: relative;
    top: 36px;
  }
  to {
    position: relative;
    top: 6px;
    color: rgba(0, 255, 238, 1);
    opacity: 1;
  }
}
@keyframes movelabel {
  from {
    position: relative;
    top: 300px;
  }
  to {
    position: relative;
    top: 270px;
    color: rgba(0, 255, 238, 1);
    opacity: 1;
  }
}
@keyframes moveyanzhengma {
  from {
    position: relative;
    top: 50px;
  }
  to {
    position: relative;
    top: 20px;
    color: rgba(0, 255, 238, 1);
    opacity: 1;
  }
}
.title {
  width: 76%;
  height: 64px;
  font-size: 28px;
  position: relative;
  top: 52px;
  font-family: "苹方-简";
  font-weight: normal;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
  p:nth-child(1) {
    position: relative;
    left: 8vmax;
  }
  p:nth-child(2) {
    position: relative;
    left: 8vmax;
    top: 10px;
    font-size: 17px;
    font-family: "苹方-简";
    font-weight: normal;
    line-height: 17px;
    color: rgba(255, 255, 255, 1);
    opacity: 1;
  }
}
.content {
  width: 240px;
  height: 26px;
  font-size: 9px;
  font-family: "苹方-简";
  position: relative;
  left: 8vmax;
  top: 73px;
  font-weight: normal;
  line-height: 13px;
  color: rgba(255, 255, 255, 1);
  opacity: 0.5;
}
// 区号下拉列表
.selectoption {
  position: relative;
  left: 5px;
  background-color: rgba(2, 52, 111, 0.5);
  color: snow;
}

#getverification {
  width: 62px;
  height: 21px;
  background: rgba(255, 255, 255, 1);
  color: aqua;
  text-align: center;
  cursor: pointer;
}

// 下拉框设置
select {
  width: 80px;
  height: 41px;
  position: relative;
  top: 51px;
  border: none;
  opacity: 1;
  background: rgba(28, 78, 130, 0.5);
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  color: rgba(255, 255, 255, 0.7);
  outline: none;
  padding-left: 12px;
}
#phone {
  position: relative;
  width: 305px;
  height: 40px;
  left: 26%;
  top: -30px;
  label {
    position: relative;
    top: 40px;
    left: 25px !important;
    opacity: 1;
  }
  .el-input__inner {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    width: 75% !important;
    height: 42px;
    //  color:rgba(255,255,255,1);
  }
}
.about {
  font-size: 16px;
  width: 100%;
  height: 952px;
  overflow: hidden;
  background: url(../assets/images/registration/bg2.png) center/100% 100%;
  // form表格
  .movename {
    animation: move 0.5s linear;
    animation-fill-mode: forwards;
  }
  .movephone {
    animation: move 0.5s linear;
    animation-fill-mode: forwards;
  }
  .movever {
    animation: moveyanzhengma 0.5s linear;
    animation-fill-mode: forwards;
  }
  .movepassword {
    animation: movelabel 0.5s linear;
    animation-fill-mode: forwards;
  }
  .movepassword2 {
    animation: move 0.5s linear;
    animation-fill-mode: forwards;
  }
  .move2 {
    display: none;
  }
  .el-form {
    width: 305px;
    position: relative;
    top: 220px;
    margin: 0 auto;
    .el-input__inner {
      background: rgba(28, 78, 130, 0.5);
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    .el-form-item__error {
      position: relative;
      left: 10px;
    }
    // 密码整体设置
    #passwordzong {
      width: 305px;
      height: 40px;
      position: relative;
      top: 96px;
      label {
        position: relative;
        top: 1.09333rem;
        left: -1rem !important;
        opacity: 1;
        padding-left: 0.26667rem;
      }
    }
    // 确认密码整体设置
    #confirmpassword {
      width: 305px;
      height: 40px;
      position: relative;
      top: 112px;
      label {
        position: relative;
        top: 39px;
        left: 4px !important;
        opacity: 1;
        padding-left: 10px;
      }
      p {
        position: relative;
      }
    }
    #imgconfirm {
      position: absolute;
      top: 400px;
      width: 18px;
    }

    // 邀请码整体设置
    #yaoqingma {
      width: 305px;
      height: 40px;
      position: relative;
      top: 160px;
      label {
        position: relative;
        left: 15px !important;
        top: 11px;
        width: 45px;
        height: 13px;
        font-size: 14px;
        font-family: "苹方-简";
        font-weight: normal;
        line-height: 13px;
        color: rgba(0, 255, 238, 1);
        opacity: 1;
      }
      .el-input__inner:disabled {
        background-color: #1c4e82;
        color: snow;
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }
    }
    #registered {
      width: 305px;
      height: 40px;
      line-height: 40px;
      position: relative;
      top: 245px;
      .el-form-item__content {
        line-height: 40px;
      }
    }
    // 下载整体设置
    #download {
      width: 305px;
      height: 40px;
      position: relative;
      top: 232px;
    }
    label {
      position: relative;
      top: 38px;
      font-size: 14px;
      font-family: "苹方-简";
      font-weight: normal;
      color: rgba(255, 255, 255, 1);
      opacity: 1;
    }
    // 确认密码框
    .password2 {
      width: 305px;
      height: 40px;
      padding-left: 10px;
      border-radius: 25px;
      outline: none;
      border: none;
      background: rgba(28, 78, 130, 0.9);
      color: rgba(255, 255, 255, 1);
      label {
        position: relative;
        top: 40px;
        left: 4px;
        opacity: 0.1;
        padding-left: 10px;
      }
    }
    .password2:focus {
      border: 1px solid #00ffee;
      color: rgba(255, 255, 255, 1);
      background-color: #1b3d71;
    }
    // 密码框里面的图片显示与隐藏
    img {
      position: absolute;
      left: 250px;
      top: 308px;
      width: 18px;
    }
  }
  // element ui 表单
  .el-input {
    position: relative;
    width: 305px;
    height: 40px;
    border-radius: 25px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  // 验证码
  #verification {
    position: relative;
    top: 9px;
    width: 305px;
    height: 40px;
    // 倒计时
    .spantimer {
      position: relative;
      left: 185px;
      top: -43px;
      color: #00ffee;
    }

    .el-button span {
      position: relative;
      left: -8px;
    }
    #verification2 {
      float: left;
      top: 50px;
      left: 15px !important;
    }
    #verification3 {
      margin-top: 10px;
    }
  }
  .el-button {
    position: relative;
    top: -10px;
    width: 304.98px;
    height: 40px;
  }
  // 验证码
  #accept {
    width: 82px;
    position: relative;
    height: 30px;
    top: -40.5px;
    left: 215px;
    cursor: pointer;
    background: rgba(28, 78, 130, 0.1);
    border: none;
    span {
      position: relative;
      right: 32px;
      color: aqua;
    }
  }
  .el-form-item {
    outline: none;
    border: none;
    position: relative;
    margin-bottom: -10px;
  }
  // input里面内容设置
  .el-input__inner {
    border-radius: 25px;
    font-size: 14px;
    font-family: "苹方-简";
    font-weight: normal;
    line-height: 13px;
    border: none;
    outline: none;
    color: rgba(255, 255, 255, 1);
    background-color: #1b3d71;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  .el-input__inner:focus {
    border: 1px solid #00ffee;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
  // 注册下载按钮
  button {
    width: 305px;
    height: 40px;
    outline: none;
    border: 1px solid #00ffee;
    background-color: #023f79;
    opacity: 1;
    border-radius: 25px;
    color: rgba(0, 255, 238, 1);
    position: relative;
    top: 18px;
      span {
      color: rgba(0, 255, 238, 1);
      opacity: 1;
    }
  }
  button:hover{
    background: #00ffee;
     span {
      color: #02346F;
      opacity: 1;
    }
  }
  .button1 {
    background-color: #023f79;
    position: relative;
    top: 40px;
    span {
      color: rgba(0, 255, 238, 1);
      opacity: 1;
    }
  }
}
</style>
