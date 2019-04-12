<template>
  <div class="hotCom">
    <div class="hotCom-header">
      <h1>官方精选配件</h1>
    </div>
    <div class="hotCom-main">
      <div class="hotCom-big-box">
        <img :src="phoneImg0" alt>
      </div>

      <div class="hotCom-box">
        <div class="box-img">
          <img :src="phoneImg1" alt>
        </div>
        <div class="box-text">
          <h4>坚果砖式蓝牙小音箱</h4>
          <h6>一款设计出色、音质出众的随身音箱</h6>
          <div class="text-li">
            <ul style="width:68px;">
              <li v-for="(item, index) in liList0.length" :key="index" @mouseenter="aaa(index)">
                <div class="li-box" ref="div">
                  <img :src="liList0[item-1]" alt>
                </div>
              </li>
            </ul>
          </div>
          <h2>¥149.00</h2>
        </div>
      </div>

      <div class="hotCom-box" style="border-right:0">
        <div class="box-img">
          <img :src="phoneImg2" alt>
        </div>
        <div class="box-text">
          <h4>Smartisan 快充移动电源 10000mAh</h4>
          <h6>10000mAh 双向快充、轻盈便携、高标准安全保护</h6>
          <div class="text-li">
            <ul style="width:68px">
              <li v-for="(item, index) in liList1.length" :key="index" @mouseenter="bbb(index)">
                <div class="li-box" ref="div1">
                  <img :src="liList1[item-1]" alt>
                </div>
              </li>
            </ul>
          </div>
          <h2>¥199.00</h2>
        </div>
      </div>

      <div class="hotCom-box">
        <div class="box-img">
          <img :src="phoneImg3" alt>
        </div>
        <div class="box-text">
          <h4>坚果 QuickCharge 4+ 快速充电器</h4>
          <h6>全面兼容的 18W 快速充电</h6>
          <div class="text-li">
            <ul style="width:34px;">
              <li v-for="(item, index) in liList2.length" :key="index" @mouseenter="ccc(index)">
                <div class="li-box" ref="div2">
                  <img :src="liList2[item-1]" alt>
                </div>
              </li>
            </ul>
          </div>
          <h2>¥59.00</h2>
        </div>
      </div>

      <div class="hotCom-box">
        <div class="box-img">
          <img :src="phoneImg4" alt>
        </div>
        <div class="box-text">
          <h4>坚果 “电池形电池”移动电源</h4>
          <h6>别具一格的“全能型”移动电源</h6>
          <div class="text-li">
            <ul style="width:136px;">
              <li v-for="(item, index) in liList3.length" :key="index" @mouseenter="ddd(index)">
                <div class="li-box" ref="div3">
                  <img :src="liList3[item-1]" alt>
                </div>
              </li>
            </ul>
          </div>
          <h2>¥49.00</h2>
        </div>
      </div>

      <div class="hotCom-box">
        <div class="box-img">
          <img :src="phoneImg5" alt>
        </div>
        <div class="box-text">
          <h4>坚果蓝牙小黑（小白）耳机</h4>
          <h6>一副干净的蓝牙耳机</h6>
          <div class="text-li">
            <ul style="width:68px;">
              <li v-for="(item, index) in liList4.length" :key="index" @mouseenter="eee(index)">
                <div class="li-box" ref="div4">
                  <img :src="liList4[item-1]" alt>
                </div>
              </li>
            </ul>
          </div>
          <h2>¥99.00</h2>
        </div>
      </div>

      <div class="hotCom-box" style="border-right:0">
        <div class="box-img">
          <img :src="phoneImg6" alt>
        </div>
        <div class="box-text">
          <h4>坚果三脚架自拍杆</h4>
          <h6>两种模式，随时随地都能拍得开心</h6>
          <div class="text-li">
            <ul style="width:34px;">
              <li v-for="(item, index) in liList5.length" :key="index" @mouseenter="fff(index)">
                <div class="li-box" ref="div5">
                  <img :src="liList5[item-1]" alt>
                </div>
              </li>
            </ul>
          </div>
          <h2>¥99.00</h2>
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
        "https://resource.smartisan.com/resource/1ec0399c19a31029f2b16c67c8f864a5.jpg?x-oss-process=image/resize,w_1218/format,jpg/quality,Q_100",
      phoneImg1:
        "https://resource.smartisan.com/resource/c44f0ab4da5591fc3d0f82b7ac0f4f65.jpg?x-oss-process=image/resize,w_432/format,webp",
      phoneImg2:
        "https://resource.smartisan.com/resource/b7105b0d819e610a9c38d7ca2a813e58.jpg?x-oss-process=image/resize,w_432/format,webp",
      phoneImg3:
        "https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_432/format,webp",
      phoneImg4:
        "https://resource.smartisan.com/resource/afcec520933673b8e03a867e6502f6e0.jpg?x-oss-process=image/resize,w_432/format,webp",
      phoneImg5:
        "https://resource.smartisan.com/resource/110ef73bbe87d01d0e958f9c85d1c566.jpg?x-oss-process=image/resize,w_432/format,webp",
      phoneImg6:
        "https://resource.smartisan.com/resource/f55641e23f35f6dd82226b6c4a043f00.jpg?x-oss-process=image/resize,w_432/format,webp",

      liList0: [
        "https://resource.smartisan.com/resource/27ccd62fe055f49d7cf15ec9c09b659c.jpg?x-oss-process=image/resize,w_20",
        "https://resource.smartisan.com/resource/a8d97ea7099e27dab0259cd7bc68fd5c.jpg?x-oss-process=image/resize,w_20"
      ],
      liList1: [
        "https://resource.smartisan.com/resource/e45874c82ba2025ab49fe05ec413948b.jpg?x-oss-process=image/resize,w_20",
        "https://resource.smartisan.com/resource/bf7930d45d9a577d505b473eb52215fa.jpg?x-oss-process=image/resize,w_20"
      ],
      liList2: [
        "https://resource.smartisan.com/resource/b52f0adf664f383b300bafda6aa3295a.jpg?x-oss-process=image/resize,w_20"
      ],
      liList3: [
        "https://resource.smartisan.com/resource/73ed9b2a0a26e7476e5246245eef31c1.jpg?x-oss-process=image/resize,w_20",
        "https://resource.smartisan.com/resource/53356c7293c217f39ea62d65bf3452ac.jpg?x-oss-process=image/resize,w_20",
        "https://resource.smartisan.com/resource/917d8581c941a0f075233a8100c3db7a.jpg?x-oss-process=image/resize,w_20",
        "https://resource.smartisan.com/resource/5cd5688051e2e5c5f715c33ef992dd88.jpg?x-oss-process=image/resize,w_20"
      ],
      liList4: [
        "https://resource.smartisan.com/resource/e3ead3b62c6e23b0d68ac42ee421c06d.jpg?x-oss-process=image/resize,w_20",
        "https://resource.smartisan.com/resource/946fae02f01a9503025609c737bd5f2f.jpg?x-oss-process=image/resize,w_20"
      ],
      liList5: [
        "https://resource.smartisan.com/resource/5b4da8bcedbb8e18a0ad60e982013a81.jpg?x-oss-process=image/resize,w_20"
      ]
    };
  },
  methods: {
    aaa: function(index) {
      this.$refs.div.forEach(element => {
        element.classList = "li-box";
      });
      this.$refs.div[index].classList = "li-box hover";
      if (index == 0) {
        this.phoneImg1 =
          "https://resource.smartisan.com/resource/6e96ccea3bd56bdd2243eb20330cec30.jpg?x-oss-process=image/resize,w_432/format,webp";
      } else if (index == 1) {
        this.phoneImg1 =
          "https://resource.smartisan.com/resource/c44f0ab4da5591fc3d0f82b7ac0f4f65.jpg?x-oss-process=image/resize,w_432/format,webp";
      } 
    },
    bbb: function(index) {
      this.$refs.div1.forEach(element => {
        element.classList = "li-box";
      });
      this.$refs.div1[index].classList = "li-box hover";
      if (index == 0) {
        this.phoneImg2 =
          "https://resource.smartisan.com/resource/f319b26eb69e8ba351423abfad347eae.jpg?x-oss-process=image/resize,w_432/format,webp";
      } else if (index == 1) {
        this.phoneImg2 =
          "https://resource.smartisan.com/resource/b7105b0d819e610a9c38d7ca2a813e58.jpg?x-oss-process=image/resize,w_432/format,webp";
      }
    },
    ccc: function(index) {
      this.$refs.div2.forEach(element => {
        element.classList = "li-box";
      });
      this.$refs.div2[index].classList = "li-box hover";
    },
    ddd: function(index) {
      this.$refs.div3.forEach(element => {
        element.classList = "li-box";
      });
      this.$refs.div3[index].classList = "li-box hover";
      if (index == 0) {
        this.phoneImg4 =
          "https://resource.smartisan.com/resource/afcec520933673b8e03a867e6502f6e0.jpg?x-oss-process=image/resize,w_432/format,webp";
      } else if (index == 1) {
        this.phoneImg4 =
          "https://resource.smartisan.com/resource/70d345eb737b8118823e50cfa08658c5.jpg?x-oss-process=image/resize,w_432/format,webp";
      } else if (index == 2) {
        this.phoneImg4 =
          "https://resource.smartisan.com/resource/f5a36dfc37d52a643683f4a21247f3ff.jpg?x-oss-process=image/resize,w_432/format,webp";
      } else if (index == 3) {
        this.phoneImg4 =
          "https://resource.smartisan.com/resource/8d8f9a1e239f8fcd2308776f49ba09f6.jpg?x-oss-process=image/resize,w_432/format,webp";
      } 
    },
    eee: function(index) {
      this.$refs.div4.forEach(element => {
        element.classList = "li-box";
      });
      this.$refs.div4[index].classList = "li-box hover";
      if (index == 0) {
        this.phoneImg5 =
          "https://resource.smartisan.com/resource/110ef73bbe87d01d0e958f9c85d1c566.jpg?x-oss-process=image/resize,w_432/format,webp";
      } else if (index == 1) {
        this.phoneImg5 =
          "https://resource.smartisan.com/resource/a02b263d84911cb7316eeb1102584f4b.jpg?x-oss-process=image/resize,w_432/format,webp";
      } 
    },
    fff: function(index) {
      this.$refs.div5.forEach(element => {
        element.classList = "li-box";
      });
      this.$refs.div5[index].classList = "li-box hover";
    },
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
                  border-radius: 100%;
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