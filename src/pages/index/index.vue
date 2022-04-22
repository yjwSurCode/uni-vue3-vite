<template>
  <scroll-view scroll-y="true" :style="{ height: '100%' }">
    <uni-nav-bar
      dark
      :fixed="true"
      color="#fff"
      backgroundColor="#007aff"
      shadow
      left-icon="home"
      leftText=""
      rightText="WIFI设置"
      title="脉搏体温监控"
      @clickLeft="initWifi"
      @clickRight="toWifi"
      :style="{ width: '100%' }"
    />
    <uni-countdown
      :style="{ display: 'flex', justifyContent: 'center' }"
      :day="1"
      :hour="2"
      :minute="30"
      :second="0"
      color="#FFFFFF"
      background-color="#007AFF"
    />
    <image class="bg" src="../../static/bg.png"></image>

    <view class="block">
      <view class="zerobox">
        <image class="img" src="../../static/zero.svg"></image>
        <view class="box-text">心率：</view>
        <!-- <uni-card>
          <text class="uni-body">100</text>
        </uni-card> -->
        <view class="uni-body">102</view>
        <view class="box-text"
          >阈值：<text :style="{ color: 'red' }">{{ pagerate }}</text></view
        >
      </view>
      <view class="standard">
        <image class="img" src="../../static/zero.svg"></image>
        <view class="box-text">温度：</view>
        <!-- <uni-card>
          <text class="uni-body">100</text>
        </uni-card> -->
        <view class="uni-body">36.8</view>
        <view class="box-text"
          >阈值：<text :style="{ color: 'red' }">{{ pagetemper }}</text></view
        >
      </view>
    </view>

    <view class="button" @click="setValue"> 设置参数阈值 </view>
    <uni-popup ref="inputDialog" type="dialog">
      <uni-popup-dialog
        ref="inputClose"
        mode="input"
        title="输入内容"
        value="对话框预置提示内容!"
        placeholder="请输入内容"
        @confirm="dialogInputConfirm"
      >
        <slot>
          <view :style="{ display: 'flex', alignItems: 'center' }"
            >心率阈值：<uni-easyinput
              v-model="mrate"
              placeholder="请输入心率"
            ></uni-easyinput
          ></view>
          <view :style="{ display: 'flex', alignItems: 'center' }"
            >温度阈值：<uni-easyinput
              v-model="mTemper"
              placeholder="请输入温度"
            ></uni-easyinput
          ></view>
        </slot>
      </uni-popup-dialog>
    </uni-popup>
    <view class="button" @click="gooldValue"> 查看往期监控记录 </view>

    <uni-collapse ref="collapse" @change="change">
      <uni-collapse-item
        :show-animation="true"
        :open="true"
        class="abnormal"
        title="异常记录"
        thumb="../../static/abnormal.svg"
      >
        <uni-table align="center" border stripe emptyText="暂无更多数据">
          <!-- 表头行 -->
          <uni-tr>
            <uni-th align="center">日期</uni-th>
            <uni-th align="center">姓名</uni-th>
            <uni-th align="center">地址</uni-th>
          </uni-tr>
          <!-- 表格数据行 -->
          <uni-tr v-for="item in testValue">
            <uni-td>{{ item.time }}</uni-td>
            <uni-td>{{ item.heartRate }}</uni-td>
            <uni-td>{{ item.temperature }}</uni-td>
          </uni-tr>
        </uni-table>
      </uni-collapse-item>
    </uni-collapse>
    <!-- <view class="text-area">
      <text class="title">{{ title }}</text>
      <view @click="add()">点击</view>
      <view @click="stop()">暂停</view>
      <navigator url="/pages/wifi/index">立即跳转</navigator>
    </view> -->
  </scroll-view>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
console.log("index");
const title = ref(11);
// 文档： https://www.lhsz.xyz/read/uniapp-api/0666297f970470dc.md
const a = uni.createInnerAudioContext();
console.log(a, "aaa");

a.src = "../../static/didi.mp3";
a.loop = true;
const add = () => {
  title.value++;
  a.play();
};

const stop = () => {
  a.stop();
  console.log("已取消");
};

const testValue = ref([
  { time: "2022-04-01", heartRate: "98", temperature: "37.1" },
  { time: "2022-04-02", heartRate: "99", temperature: "37.2" },
  { time: "2022-04-03", heartRate: "100", temperature: "37.3" },
  { time: "2022-04-03", heartRate: "100", temperature: "37.3" },
  { time: "2022-04-03", heartRate: "100", temperature: "37.3" },
  { time: "2022-04-04", heartRate: "110", temperature: "37.4" },
  { time: "2022-04-05", heartRate: "120", temperature: "37.5" },
  { time: "2022-04-06", heartRate: "130", temperature: "37.7" },
]);

//默认
const pagetemper = ref(37.2);
const pagerate = ref(120);

//输入框
const mTemper = ref(37.2);
const mrate = ref(120);

const inputDialog = ref();

const setValue = () => {
  inputDialog.value.open();
};

const dialogInputConfirm = () => {
  pagetemper.value = mTemper.value;
  pagerate.value = mrate.value;

  console.log(pagetemper, pagerate);
  a.play();
};

watchEffect(() => {
  console.log("222222222222222");
  console.log(pagetemper.value); // 这里的值会被打印两次，0，1
});

watch([pagetemper.value, mTemper.value], () => {
  console.log("111111111111");
  // if (pagetemper.value > mTemper.value || pagerate.value > mrate.value) {
  //   a.play();
  // }
});

const gooldValue = () => {
  uni.navigateTo({
    url: "/pages/record/record", //`/page/wifi/wifi
  });
};

const initWifi = () => {
  uni.showLoading({
    title: "加载中",
  });
  console.log("info");
  let MainActivity = plus.android.runtimeMainActivity();
  // 上下文
  let Context = plus.android.importClass("android.content.Context");
  // 导入WIFI管理 和 WIFI 信息 的class
  plus.android.importClass("android.net.wifi.WifiManager");
  plus.android.importClass("android.net.wifi.WifiInfo");
  plus.android.importClass("android.net.wifi.ScanResult");
  plus.android.importClass("java.util.ArrayList");
  // 获取 WIFI 管理实例
  let wifiManager = MainActivity.getSystemService(Context.WIFI_SERVICE);
  wifiManager.setWifiEnabled(true); //打开wifi,false为关闭
  // 获取当前连接WIFI的信息
  let info = wifiManager.getConnectionInfo();
  //查看已经连接上的WIFI信息，在Android的SDK中为我们提供了一个叫做WifiInfo的对象，这个对象可以通过WifiManager.getConnectionInfo()来获取。WifiInfo中包含了当前连接中的相关信息。
  //getBSSID()  获取BSSID属性
  //getDetailedStateOf()  获取客户端的连通性
  //getHiddenSSID()  获取SSID 是否被隐藏
  //getIpAddress()  获取IP 地址
  //getLinkSpeed()  获取连接的速度
  //getMacAddress()  获取Mac 地址
  //getRssi()  获取802.11n 网络的信号
  //getSSID()  获取SSID
  //getSupplicanState()  获取具体客户端状态的信息
  // 获取当前 WIFI 连接的 SSID (WIFI 名称)
  // let ssid = info.getSSID()
  console.log(info, "info1111");
  let mac = info.getBSSID();
  let ssid = info.getSSID();
  // let getSupplican = info.getSupplicanState(); //TypeError: info.getSupplicanState is not a function
  console.log(info, mac, "macmacmacmacmac2222222", ssid);

  if (ssid) {
    uni.hideLoading();

    setTimeout(() => {
      uni.showToast({
        title: `当前连接WIFI名称：${ssid} `,
        icon: "none",
        duration: 2000,
      });
    }, 200);
  }
};

const toWifi = () => {
  let main = plus.android.runtimeMainActivity();
  let Intent = plus.android.importClass("android.content.Intent");
  let mIntent = new Intent("android.settings.WIFI_SETTINGS");
  main.startActivity(mIntent);
};

const change = () => {};
</script>

<style lang="scss" scoped>
@import "~@/styles/common.scss";

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.bg {
  width: 100%;
  height: rpx(400);
  z-index: 9;
  position: relative;
}
.block {
  position: relative;
  top: rpx(-115);
  z-index: 99;
  // border-radius: rpx(30);

  .zerobox,
  .standard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: rpx(50) rpx(50);
    padding: rpx(30);
    border-radius: rpx(10);
    background-color: white;
    box-shadow: 0px 1px 3px 3px rgba(223, 223, 223, 0.5);

    .img {
      width: rpx(100);
      height: rpx(100);
      margin: rpx(10);
    }
    .uni-body {
      box-shadow: 0px 1px 3px 3px rgba(223, 223, 223, 0.5);

      width: rpx(100);
      margin: rpx(10);
      padding: rpx(30);
      text-align: center;
      font-weight: bold;
      color: #007aff;
      border-radius: rpx(10);
    }
    .box-text {
      color: rgb(27, 27, 27);
      font-size: rpx(40);
      font-weight: 300;
    }
  }
}

.button {
  position: relative;
  top: rpx(-100);
  text-align: center;
  background-color: #007aff;
  color: white;
  margin: rpx(20) rpx(80);
  padding: rpx(30);
  border-radius: rpx(10);
}

.abnormal {
  color: #007aff;
}

::v-deep .uni-collapse-item__title-text {
  color: #007aff;
}

::v-deep .uni-popup-dialog {
  width: 350px;
}

::v-deep .uni-table {
  /*! min-width: 420px; */
  min-width: 320px !important;
}
</style>
