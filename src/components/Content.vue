<template>
  <div class="content">
    <app-banner></app-banner>
    <app-picture></app-picture>
    <app-hot-com></app-hot-com>
    <app-phone></app-phone>
    <app-parts></app-parts>
  </div>
</template>

<script>
import Banner from './contents/Banner.vue'
import Picture from './contents/Picture.vue'
import HotCom from './contents/HotCom.vue'
import Phone from './contents/Phone.vue'
import Parts from './contents/Parts.vue'

export default {
  name: "Content",
  components: {
    appBanner:Banner,
    appPicture:Picture,
    appHotCom:HotCom,
    appPhone:Phone,
    appParts:Parts
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  min-width: 1280px;
  // height: 3500px;
  background-color: #ededed;
  padding-top: 20px;
  padding-bottom: 70px;
}
</style>
