<template>
  <div class="home">
    <div class="align strong">南通宏达玩具销售单</div>
    <ul class="align">
      <li>客户名称:海安宏达玩具</li>
      <li>开单日期:</li>
      <li>联系电话:88838813</li>
      <li>
        备注:无
      </li>
    </ul>
    <table border="1">
      <tr>
        <td>行号</td>
        <td>商品名称</td>
        <td>单位</td>
        <td>数量</td>
        <td>单价</td>
        <td>金额</td>
        <td>备注</td>
        <td>条形码</td>
      </tr>
      <tr v-for="item in tableData" :key="item.name">
        <td>{{ item.date }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.name }}</td>
      </tr>
      <tr>
        <td>小计</td>
        <td></td>
        <td></td>
        <td>10</td>
        <td></td>
        <td>20</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>合计</td>
        <td></td>
        <td></td>
        <td>10</td>
        <td></td>
        <td>20</td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <span
      >注:所售物品，如有质量问题，请在办月内凭此单调换，过期或无此单不得调换</span
    ><span class="align_right">盖章生效</span>
    <!-- <svg width="300px" height="175px" version="1.1">
      <path
        fill="transparent"
        stroke="#000000"
        stroke-width="4"
        d="M10 80 Q 77.5 10, 145 80 T 280 80"
        class="path"
      ></path>
      <path
        fill="transparent"
        stroke="#FF2851"
        stroke-width="4"
        d="M10 80 Q 77.5 10, 145 80 T 280 80"
        class="line2"
      ></path>
      <path
        fill="transparent"
        stroke="#000000"
        stroke-width="4"
        d="M10 80 Q 77.5 10, 145 80 T 280 80"
        class="line1"
      ></path>
    </svg> -->
    <svg width="300px" height="175px" version="1.1">
      <!-- <path
        fill="transparent"
        stroke="#888888"
        stroke-width="1"
        d="M10 80 Q 77.5 10, 145 80 T 280 80"
        class="path"
      ></path> -->
      <circle
        cx="100"
        cy="50"
        r="40"
        stroke="#888888"
        stroke-width="2"
        fill="transparent"
        class="path"
      />
    </svg>
    <div class="ball"></div>
  </div>
</template>

<script>
// var qs = require("qs");
export default {
  name: "Home",
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "王小虎a",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2",
          name: "王小虎s",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "3",
          name: "王小虎c",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "4",
          name: "王小虎d",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  components: {},
  methods: {
    //获取数据
    getData() {
      let that = this;
      that.$http
        .get(`${BASEURL}` + "/weimioffice/web/content/getRecommend")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getData() {
      this.$http
        .post(
          // 测试上
          //47.105.215.191/weimi/index/getPhoneCode
          `${BASEURL}` + "/weimioffice/vote/getAllActivity ",
          qs.stringify({
            type: 0,
            pageNum: this.votealllistnumber,
            pageSize: 8,
            keywords: this.searchnumber,
          })
        )
        .then((res) => {
          // console.log(res);
        });
    },
  },
};
</script>
<style lang="less">
// svg {
//   width: 300px;
//   display: block;
//   position: absolute;
// }
// svg .line1 {
//   stroke-dasharray: 340;
//   stroke-dashoffset: 40;
//   animation: dash 1.5s linear alternate infinite;
// }
// svg .line2 {
//   stroke-dasharray: 320;
//   stroke-dashoffset: 320;
//   animation: dash2 1.5s linear alternate infinite;
// }
// @keyframes dash {
//   from {
//     stroke-dashoffset: 360;
//   }
//   to {
//     stroke-dashoffset: 40;
//   }
// }
// @keyframes dash2 {
//   from {
//     stroke-dashoffset: 280;
//   }
//   to {
//     stroke-dashoffset: -40;
//   }
// }
svg {
  width: 300px;
  display: block;
  position: absolute;
}
.ball {
  width: 10px;
  height: 10px;
  background-color: yellow;
  border-radius: 50%;
  offset-path: path("M10 80 Q 77.5 10, 145 80 T 280 80");
  offset-distance: 0%;
  animation: red-ball 2s linear alternate infinite;
}
@keyframes red-ball {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}

.align {
  text-align: center !important;
  margin: 10px auto 10px !important;
}
ul {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.strong {
  font-size: 18px;
}
.align_right {
  margin-left: 50px;
}
table {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
  tr {
    width: 100%;
    text-align: center;
  }
}
</style>
