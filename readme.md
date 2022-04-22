npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project

下载 hbuilder 对应的版本 这里是 alpha 版本

分包机制：

hbuilderX 导入 uni 组件
yarn add sass -D

uni.setStorage({
key:"id",
data:100,
success(){
console.log("存储成功");
}
})

uni.getStorage({
key: "id",
success(res){
console.log("获取成功",res);
}
})

uni.removeStorage({
key:"id",
success(){
console.log("移除数据");
}
})

H5 端为 localStorage，浏览器限制 5M 大小，是缓存概念，可能会被清理
App 端为原生的 plus.storage，无大小限制，不是缓存，是持久化的
微信小程序单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
支付宝小程序单条数据转换成字符串后，字符串长度最大 200\*1024。同一个支付宝用户，同一个小程序缓存总上限为 10MB。
百度、字节跳动小程序文档未说明大小限制

微信获取 wifiwx.startWifi({ //初始化 wifi
success: function(res) {
console.log(res.errMsg + "11654");
wx.getWifiList({ //成功后，就可以获取列表了
success: function(res) {
console.log(res);
//列表获取成功后，要到事件里提取
wx.onGetWifiList(function(res) {
console.log("获取 wifi 列表");
console.log(res.wifiList); //在这里提取列表数据
that.wifiList = res.wifiList
})
}
});
}
});

uni.showToast({
title: `当前连接WIFI名称：${ssid}个文件 `,
icon: "none",
duration: 2000,
});

uni.showLoading({
title: '加载中'
});

uni.hideLoading()
