<template>
  <scroll-view scroll-y="true" :style="{ height: '100%' }">
    <view class="example-body">
      <uni-datetime-picker v-model="range" type="daterange" @change="change" />
    </view>
    <!-- <uni-section title="基础用法" type="line" padding> -->
    <view>
      <image class="tableImg" src="../../static/table.svg"></image>
    </view>
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
    <!-- </uni-section> -->
  </scroll-view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref(11);

const range = ref(["2022-02-1", "2022-3-28"]);

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

const change = (v) => {
  console.log(v, "maskClick");

  //   let filtered = testValue.filter(
  //     (d) =>
  //       new Date(d.substr(1, 19)) >= startDate &&
  //       new Date(d.substr(1, 19)) <= endDate
  //   );

  let filtered = testValue.value.filter((d) => {
    console.log(new Date(d.time), new Date(v[0])); // 2022-02-01
    return (
      new Date(d.time) >= new Date(v[0]) && new Date(d.time) <= new Date(v[1])
    );
  });

  console.log("filtered", filtered);

  testValue.value = filtered;
};
</script>

<style lang="scss" scoped>
.tableImg {
  height: 100rpx;
  width: 100rpx;
}
::v-deep .uni-table {
  /*! min-width: 420px; */
  min-width: 320px !important;
}
</style>
