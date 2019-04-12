<template>
  <div class="hotCom">
    <div class="hotCom-header">
      <h1>坚果手机及配件</h1>
    </div>
    <div class="hotCom-main">
      <div class="hotCom-big-box">
        <img :src="phoneImg0" alt="">
      </div>

      <div class="hotCom-box">
        <div class="box-img">
          <img :src="phoneImg1" alt>
        </div>
        <div class="box-text">
          <h4>坚果 Pro 2S</h4>
          <h6>双系统，无限屏</h6>
          <div class="text-li">
            <ul>
              <li v-for="(item, index) in liList0.length" :key="index" @mouseenter="aaa(index)">
                <div class="li-box" ref="div">
                  <img :src="liList0[item-1]" alt>
                </div>
              </li>
            </ul>
          </div>
          <h2>¥1,998.00</h2>
        </div>
      </div>

      <div class="hotCom-box" style="border-right:0">
        <div class="box-img">
          <img :src="phoneImg2" alt>
        </div>
        <div class="box-text">
          <h4>坚果 R1</h4>
          <h6>次世代旗舰手机，内藏来自未来的“电脑”</h6>
          <div class="text-li">
            <ul style="width:102px">
              <li v-for="(item, index) in liList1.length" :key="index" @mouseenter="bbb(index)">
                <div class="li-box" ref="div1">
                  <img :src="liList1[item-1]" alt>
                </div>
              </li>
            </ul>
          </div>
          <h2>¥3,799.00</h2>
        </div>
      </div>

      <div class="hotCom-box">
        <div class="box-img">
          <img :src="phoneImg3" alt>
        </div>
        <div class="box-text">
          <h4>坚果 R1“足迹”系列保护套</h4>
          <h6>1848 年 5 月 23 日</h6>
          <div class="text-li">
          
          </div>
          <h2>¥99.00</h2>
        </div>
      </div>

      <div class="hotCom-box">
        <div class="box-img">
          <img :src="phoneImg4" alt>
        </div>
        <div class="box-text">
          <h4>坚果 R1 TPU 软胶半透明保护套</h4>
          <h6>半透明设计，质感精良</h6>
          <div class="text-li">
            
          </div>
          <h2>¥49.00</h2>
        </div>
      </div>

      <div class="hotCom-box">
        <div class="box-img">
          <img :src="phoneImg5" alt>
        </div>
        <div class="box-text">
          <h4>坚果 Pro 2S“足迹”系列保护套</h4>
          <h6>1994 年 9 月 23 日</h6>
          <div class="text-li">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <h2>¥79.00</h2>
        </div>
      </div>

      <div class="hotCom-box" style="border-right:0">
        <div class="box-img">
          <img :src="phoneImg6" alt>
        </div>
        <div class="box-text">
          <h4>坚果 Pro 2S“足迹”系列保护套 薛定谔诞生</h4>
          <h6>1887 年 8 月 12 日</h6>
          <div class="text-li">

          </div>
          <h2>¥79.00</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Phone",
  components: {},
  data() {
    return {
      phoneImg0:
        "https://resource.smartisan.com/resource/896f85d0ee0669ee1fdd8efc19bffc57.jpg?x-oss-process=image/resize,w_1218/format,jpg/quality,Q_100",
      phoneImg1:
        "https://resource.smartisan.com/resource/b07b9765e272f866da6acda4ee107d88.png?x-oss-process=image/resize,w_432/format,webp",
      phoneImg2:
        "https://resource.smartisan.com/resource/17f254e6f809355d8fe66260ccb48fb0.png?x-oss-process=image/resize,w_432/format,webp",
      phoneImg3:
        "https://resource.smartisan.com/resource/e03e957c19f121a9a8e453e6e27b08a8.jpg?x-oss-process=image/resize,w_432/format,webp",
      phoneImg4:
        "https://resource.smartisan.com/resource/f988f7b388f9c49cfec31d666b38a3ee.jpg?x-oss-process=image/resize,w_432/format,webp",
      phoneImg5:
        "https://resource.smartisan.com/resource/ea261659c4a698ed27ccc8d70659b203.jpg?x-oss-process=image/resize,w_432/format,webp",
      phoneImg6:
        "https://resource.smartisan.com/resource/728cc8200d099ee231927a9ccfb08fd1.jpg?x-oss-process=image/resize,w_432/format,webp",

      
      liList0: [
        "https://resource.smartisan.com/resource/attr/v2/1000517/4E69E03CE93DC22F42A905057FB7CB95/origin.png?x-oss-process=image/resize,w_20",
        "https://resource.smartisan.com/resource/attr/v2/1000517/099DCE469DCB49B6D2580989AA0B5851/origin.png?x-oss-process=image/resize,w_20",
        "https://resource.smartisan.com/resource/attr/v2/1000517/3C85C069DF7EDB21B2E5ECFA4C684803/origin.png?x-oss-process=image/resize,w_20",
        "https://resource.smartisan.com/resource/attr/v2/1000517/CA9FDE02CD273B061A4370946EF3B48C/origin.png?x-oss-process=image/resize,w_20"
      ],
      liList1: [
        "https://resource.smartisan.com/resource/attr/v2/1000517/4E69E03CE93DC22F42A905057FB7CB95/origin.png?x-oss-process=image/resize,w_20",
        "https://resource.smartisan.com/resource/attr/v2/1000517/CA9FDE02CD273B061A4370946EF3B48C/origin.png?x-oss-process=image/resize,w_20",
        "https://resource.smartisan.com/resource/attr/v2/1000517/099DCE469DCB49B6D2580989AA0B5851/origin.png?x-oss-process=image/resize,w_20"
      ],
    };
  },
  methods:{
    aaa: function(index) {
      this.$refs.div.forEach(element => {
        element.classList = "li-box";
      });
      this.$refs.div[index].classList = "li-box hover";
      if (index == 0) {
        this.phoneImg1 =
          "https://resource.smartisan.com/resource/b07b9765e272f866da6acda4ee107d88.png?x-oss-process=image/resize,w_432/format,webp";
      } else if (index == 1) {
        this.phoneImg1 =
          "https://resource.smartisan.com/resource/25cc6e783a664fbdf83c3c34774a9826.png?x-oss-process=image/resize,w_432/format,webp";
      } else if (index == 2) {
        this.phoneImg1 =
          "https://resource.smartisan.com/resource/2f2afca6f88e3aef5b1f332ea0c1d65a.png?x-oss-process=image/resize,w_432/format,webp";
      } else if (index == 3) {
        this.phoneImg1 =
          "https://resource.smartisan.com/resource/6668df0e297bf04702df6d166091ac51.png?x-oss-process=image/resize,w_432/format,webp";
      }
    },
    bbb: function(index) {
      this.$refs.div1.forEach(element => {
        element.classList = "li-box";
      });
      this.$refs.div1[index].classList = "li-box hover";
      if(index == 0){
        this.phoneImg2 = "https://resource.smartisan.com/resource/06c2253354096f5e9ebf0616f1af2086.png?x-oss-process=image/resize,w_432/format,webp"
      }else if (index == 1){
        this.phoneImg2 = "https://resource.smartisan.com/resource/efb9aacaab54e8a7fe5bbfbe8979adcd.png?x-oss-process=image/resize,w_432/format,webp"
      }else if (index == 2){
        this.phoneImg2 = "https://resource.smartisan.com/resource/17f254e6f809355d8fe66260ccb48fb0.png?x-oss-process=image/resize,w_432/format,webp"
      }
    }
  }
};
</script>

<style lang="less" scoped>
.hotCom {
  width: 1280px;
  height: 940px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 20px;
  .hotCom-header {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
    h1 {
      height: 60px;
      line-height: 60px;
      padding-left: 30px;
      float: left;
      font-weight: 700;
      color: #666;
      font-size: 17px;
    }
  }
  .hotCom-main {
    height: 880px;
    width: 100%;
    background: #fff;
    .hotCom-big-box {
      height: 440px;
      width: 50%;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .hotCom-box {
      height: 440px;
      width: 25%;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      float: left;
      .box-img {
        width: 100%;
        height: 290px;
        padding-top: 50px;
        img {
          width: 220px;
          height: 220px;
          margin: 0 auto;
          display: block;
        }
      }
      .box-text {
        width: 100%;
        height: 150px;
        h4 {
          font-size: 15px;
          color: #333;
          font-weight: 700;
          text-align: center;
        }
        h6 {
          font-size: 12px;
          color: #999;
          text-align: center;
          font-weight: 400;
          margin-top: 10px;
        }
        .text-li {
          height: 16px;
          width: 100%;
          margin-top: 10px;
          ul {
            height: 16px;
            width: 136px;
            margin: 0 auto;
            li {
              height: 16px;
              width: 24px;
              float: left;
              margin: 0 5px;
              .li-box {
                border: 1px solid #b2b2b2;
                height: 16px;
                width: 16px;
                margin: 0 auto;
                text-align: center;
                border-radius: 100%;
                img {
                  width: 10px;
                  height: 10px;
                  margin-bottom: 5px;
                }
              }
              .hover {
                border: 2px solid #666666;
                img {
                  margin-bottom: 6px;
                }
              }
            }
          }
        }
        h2 {
          font-size: 18px;
          color: #d44d44;
          font-weight: 700;
          text-align: center;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>


