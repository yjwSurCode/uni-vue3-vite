<template>
  <view class="content">
    <p>Fvv Wifi Helper</p>
    <button @click="init">初始化</button>
    <button @click="getHost">获取本机ip，mac</button>
    <button @click="createWifi">开启热点</button>
    <button @click="closeAp">关闭热点</button>
    <button @click="scanWifi">获取wifi列表</button>
    <button @click="connectWifi">连接wifi</button>
    <button @click="staticIP">静态ip</button>
    <button @click="getLAN">获取局域网设备</button>
    <button @click="portScan">端口扫描</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import requestAndroidPermission from "../../static/promiss.js";
const FvvUniWifiHelper = uni.requireNativePlugin("Fvv-UniWifiHelper");
console.log("wifi");
const init = () => {
  console.log("init方法");
  FvvUniWifiHelper.init((res) => {
    console.log(res, "init");
  });
  this.getPermission();
};

const getPermission = async () => {
  var result = await requestAndroidPermission(
    "android.permission.ACCESS_FINE_LOCATION"
  );
  var strStatus;
  if (result == 1) {
    strStatus = "已获得授权";
  } else if (result == 0) {
    strStatus = "未获得授权";
  } else {
    strStatus = "被永久拒绝权限";
  }
  uni.showModal({
    content: permisionID + strStatus,
    showCancel: false,
  });
};
</script>

<style>
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
</style>
