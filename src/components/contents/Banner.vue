<template>
  <div class="banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <a href="http://www.baidu.com">
          <img :src="item" alt>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Banner",
  components: {},
  data() {
    return {
      imgs: [
        "https://resource.smartisan.com/resource/x/xinpinjuheshoujiao1111.png?x-oss-process=image/format,jpg/quality,Q_100",
        "https://resource.smartisan.com/resource/r/rifabuhuishoujiao1111.png?x-oss-process=image/format,jpg/quality,Q_100"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.banner {
  width: 1280px;
  height: 500px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
    margin-top: -30px;
  }
  .el-carousel__button {
    border-radius: 100%;
    width: 10px;
    height: 10px;
  }
}
</style>