<template>
  <view>
    wifi名称---{{ title }}
    <button type="default" @click="getWifiInfo">获取wifi信息</button>
    <button type="default" @click="info">获取wifi信息2</button>
    <button type="default" @click="setting">跳转设置</button>
  </view>
</template>

<script>
// const gbWiFi = uni.requireNativePlugin('Googbuild-WIFI');
const FvvUniWifiHelper = uni.requireNativePlugin("Fvv-UniWifiHelper");
export default {
  data() {
    return {
      title: "",
    };
  },
  onLoad() {},
  onShow() {
    this.getWifiNameInfo()
      .then((res) => {
        console.log(222, res);
        const appWifiName = res.replace(/\"/g, "");
        uni.setStorageSync("SSID", appWifiName);
        this.requestGetWifiInfo(appWifiName);
      })
      .catch((err) => {
        FvvUniWifiHelper.closeWifi();
      });
  },
  mounted() {
    // 触发一次位置获取，否则iphone设置中没有定位服务
    console.log(44444444444444, uni.getStorageSync("SSID"));
  },
  methods: {
    getWifiInfo() {},
    // 获取 wifi 名称
    getWifiNameInfo() {
      return new Promise((resolve, reject) => {
        console.log(1111, "getWifiNameInfo");
        uni.getLocation({
          type: "wgs84",
          success: () => {
            console.log(2222222, "getWifiNameInfo", FvvUniWifiHelper);
            FvvUniWifiHelper.getWifiInfo((res) => {
              const SSID = res.sSID;
              console.log(3333333, "SSID");
              console.log(4545, res);
              if (SSID === "<unknown ssid>") {
                reject();
              } else {
                resolve(SSID);
              }
            });
          },
        });
      });
    },
    requestGetWifiInfo(appWifiName) {
      uni.request({
        url: "https://www.fastmock.site/mock/37fc0d926127a097ac580017eb5a9365/api/api/wifi",
        success: (res) => {
          if (res.data.status === 200) {
            const deviceWifiName = res.data.SSID;
            console.log(
              123132132,
              res.data.SSID,
              appWifiName,
              deviceWifiName === appWifiName
            );
            if (deviceWifiName === appWifiName) {
              this.title = "wifi名称一致";
            }
          }
        },
      });
    },
    info() {
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
      this.title = ssid;

      console.log(info, mac, "macmacmacmacmac1111111", ssid);
      let getSupplican = info.getSupplicanState();
      console.log(info, mac, getSupplican, "macmacmacmacmac2222222", ssid);

      //   if (this.attendanceInformationObj.clockManage.wifi.length > 0) {
      //     let stateIndex =
      //       this.attendanceInformationObj.clockManage.wifi.findIndex(
      //         (ites) => ites.mac === mac
      //       );
      //     if (stateIndex !== -1) {
      //       this.clockState = true;
      //     }
      //   }
    },
    setting() {
      var main = plus.android.runtimeMainActivity();
      var Intent = plus.android.importClass("android.content.Intent");
      var mIntent = new Intent("android.settings.WIFI_SETTINGS");
      main.startActivity(mIntent);
    },
  },
};
</script>

<style></style>
