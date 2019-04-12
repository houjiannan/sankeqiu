<template>
  <div class="picture">
    <div class="picture-box" v-for="(item,index) in hotImgs" :key="index">
      <a :href="item.url">
        <img :src="item.imgurl" alt>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Picture",
  components: {},
  data() {
    return {
      hotImgs: [
        {
          url: "http://www.baidu.com",
          imgurl:
            "https://resource.smartisan.com/resource/509ed0455df8fda5d00ef0355d1e31ca.jpg?x-oss-process=image/format,jpg/quality,Q_100"
        },
        {
          url: "http://www.baidu.com",
          imgurl:
            "https://resource.smartisan.com/resource/3311d2d535ece2f8bf8380530ddd4ef8.jpg?x-oss-process=image/format,jpg/quality,Q_100"
        },
        {
          url: "http://www.baidu.com",
          imgurl:
            "https://resource.smartisan.com/resource/3c9489bedef473d26af2ffa15d4b114f.jpg?x-oss-process=image/format,jpg/quality,Q_100"
        },
        {
          url: "http://www.baidu.com",
          imgurl:
            "https://resource.smartisan.com/resource/3e1ddbac5336b586100c1bfb79112a5c.jpg?x-oss-process=image/format,jpg/quality,Q_100"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.picture {
  width: 1280px;
  height: 210px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  .picture-box {
    width: 25%;
    height: 100%;
    float: left;
    border-right: 1px solid #ccc;
    a {
      width: 100%;
      height: 100%;
      display: block;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>