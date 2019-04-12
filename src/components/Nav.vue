<template>
  <div class="nav">
    <div class="nav-box">
      <ul>
        <li class="first-li">
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/phone">手机</router-link>
        </li>
        <li>
          <a href>“足迹”系列</a>
        </li>
        <li>
          <a href>官方配件</a>
        </li>
        <li>
          <a href>畅呼吸系列</a>
        </li>
        <li>
          <a href>箱包类</a>
        </li>
        <li>
          <a href>品牌周边</a>
        </li>
        <li>
          <a href>智能音箱</a>
        </li>
        <li>
          <a href>服务</a>
        </li>
        <li>
          <a href>企业团购</a>
        </li>
      </ul>
      <div class="search">
        <i class="el-icon-search"></i>
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入搜索的商品"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
    </div>
  </div>
</template>




<script>
  export default {
    name: "Nav",
    components: {},
    data() {
      return {
        restaurants: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "坚果Pro 2S"},
          { "value": "坚果R1"},
          { "value": "坚果3"},
          { "value": "闹钟式无线充电座"},
          { "value": "畅呼吸净化器"}
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>




<style lang="less">
.nav {
  width: 100%;
  height: 75px;
  min-width: 1280px;
  .nav-box {
    width: 1280px;
    height: 75px;
    margin: 0 auto;
    ul {
      li {
        float: left;
        height: 75px;
        padding: 0 15px;
        a {
          text-decoration: none;
          display: block;
          height: 75px;
          line-height: 75px;
          color: rgba(0, 0, 0, 0.7);
          font-size: 14px;
        }
      }
      .first-li {
        margin-left: 15px;
      }
    }
    .search {
      height: 36px;
      width: 330px;
      border: 1px solid #ccc;
      float: right;
      margin-right: 30px;
      margin-top: 20px;
      border-radius: 20px;
      overflow: hidden;
      i {
        display:block;
        height: 26px;
        width: 26px;
        margin-left: 10px;
        cursor: pointer;
        background-color: #fff;
        line-height: 26px;
        font-size: 20px;
        font-weight: 900;
        color: #ccc;
        margin-top: 5px;
        float: left;
      }

      .el-input__inner{
        border: 0;
        padding: 0;
        height: 34px;
        width: 270px;
        line-height: 34px;
        font-size: 15px;
      }
    }
  }
}
</style>