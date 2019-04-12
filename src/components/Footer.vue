<template>
  <footer>
    <div class="footer-main">
      <div class="footer-top">
        <ul class="top-left"> 
          <li>
            <h3>订单服务</h3>
            <a href="javascript:;">购买指南</a>
            <a href="javascript:;">支付方式</a>
            <a href="javascript:;">送货政策</a>
          </li>
          <li>
            <h3>服务支持</h3>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">维修门店</a>
            <a href="javascript:;">零售门店</a>
          </li>
          <li>
            <h3>自助服务</h3>
            <a href="javascript:;">热点咨询</a>
            <a href="javascript:;">预约购买</a>
            <a href="javascript:;">订单物流</a>
          </li>
          <li>
            <h3>媒体中心</h3>
            <a href="javascript:;">新闻动态</a>
            <a href="javascript:;">官方视频</a>
            <a href="javascript:;">图片资源</a>
          </li>
          <li>
            <h3>关于公司</h3>
            <a href="javascript:;">公司简介</a>
            <a href="javascript:;">加入我们</a>
            <a href="javascript:;">荣誉奖项</a>
          </li>
          <li>
            <h3>关注我们</h3>
            <a href="javascript:;">新浪微博</a>
            <a href="javascript:;">官方微信</a>
            <a href="javascript:;">联系我们</a>
          </li>
        </ul>
        <ul class="top-right">
          <li class="tel">400 - 626 - 5666</li>
          <li class="time">周一到周日 9:00 - 18:00</li>
          <li class="desc">(仅收市话费)</li>
          <li class="online">
            <a href="javascript:;">
               <el-button plain icon="el-icon-question" size="small">在线帮助</el-button>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom"></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Header",
  components: {}
};
</script>

<style lang="less" scoped>
footer {
  width: 100%;
  height: 355px;
  background: #fafafa;
  border-top: 1px solid #e6e6e6;
  min-width: 1280px;
  .footer-main {
    width: 1280px;
    height: 355px;
    margin: 0 auto;
    .footer-top {
      width: 100%;
      height: 224px;
      border-bottom: 1px solid #e6e6e6;
      padding-top: 60px;
      padding-bottom: 55px;
      .top-left {
        li {
          width: 48px;
          height: 110px;
          float: left;
          margin-right: 90px;
          h3 {
            color: #646464;
            font-weight: 700;
            font-size: 12px;
            margin-bottom: 15px;
          }
          a {
            font-size: 12px;
            color: #969696;
            text-decoration: none;
            font-weight: 300;
            margin-bottom: 5px;
            display: inline-block;
          }
        }
      }
      .top-right {
        width: 200px;
        height: 110px;
        float: right;
        .tel{
              font-size: 18px;
              font-weight: 900;
              color: #5079d9;
              text-align: right;
        }
        .time{
              margin-top: 10px;
              font-size: 12px;
              color: #999;
              text-align: right;
        }
        .desc{
              font-size: 12px;
              color: #999;
              text-align: right;
        }
        .online{
          a{
            float: right;
            margin-top: 10px; 
          };
        }
      }
    }
    .footer-bottom {
      width: 100%;
      height: 130px;
    }
  }
}
</style>