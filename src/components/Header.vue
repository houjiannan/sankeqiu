<template>
  <header>
    <div class="header-left"></div>
    <div class="header-right"></div>
    <div class="header-main">
      <ul>
        <li class="first-li">
          <a href>在线商城</a>
        </li>
        <li>
          <a href>坚果 Pro 2S</a>
        </li>
        <li>
          <a href>坚果 R1</a>
        </li>
        <li>
          <a href>坚果 TNT 工作站</a>
        </li>
        <li>
          <a href>Smartisan OS</a>
        </li>
        <li>
          <a href>欢喜云</a>
        </li>
        <li>
          <a href>应用</a>
        </li>
        <li>
          <a href>论坛</a>
        </li>
        <li>
          <a href>荣誉与奖项</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {}
};
</script>

<style lang="less" scoped>
header {
  height: 45px;
  min-width: 1280px;
  background-image: linear-gradient(90deg, #222325, #3b3c3f, #222325);
  .header-main {
    height: 45px;
    margin: 0 auto;
    width: 1080px;
    ul {
      width: 1080px;
      height: 45px;
      li {
        height: 45px;
        padding: 0 20px;
        float: left;
        a {
          height: 45px;
          line-height: 45px;
          font-size: 12px;
          color: hsla(0, 0%, 100%, 0.7);
          text-decoration: none;
          font-weight: 300;
        }
        a:hover {
          color: #fff;
        }
      }
      .first-li {
        margin-left: 120px;
      }
    }
  }
  .header-left {
    width: 100px;
    height: 100%;
    float: left;
  }
  .header-right {
    width: 100px;
    height: 100%;
    float: right;
  }
}
</style>