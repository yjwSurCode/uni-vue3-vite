<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
console.log("App1");
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>

<style lang="scss">
@import "~@/styles/common.scss";
</style>
