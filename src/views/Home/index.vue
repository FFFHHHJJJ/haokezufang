<template>
  <div>
      <!-- 头部搜索 -->
    <van-search
      v-model="value"
      show-action
      label
      placeholder="请输入搜索关键词"
      background="transparent"
      center
    >
      <template #label>
      <button :style="{background:'#f6f5f6',border:0}" @click="searchCity">
        北京
        <van-icon name="arrow-down" />
        </button>
      </template>
      <template #action>
        <div class="map"><i class="iconfont icon-ditu"></i></div>
      </template>
    </van-search>

    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 整租合租 -->
    <van-tabbar :fixed="false" inactive-color="#21b97a" active-color="#21b97a">
      <van-tabbar-item class="iconfont icon-shouye">整租</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-zhuyaorenyuan"
        >合租</van-tabbar-item
      >
      <van-tabbar-item class="iconfont icon-dituzhaofang"
        >地图找房</van-tabbar-item
      >
      <van-tabbar-item class="iconfont icon-chuzuwu">去出租</van-tabbar-item>
    </van-tabbar>
    <!-- 租房小组 -->
    <div class="group">
      <van-cell title="租房小组" value="更多" />
      <van-grid :column-num="2" direction="horizontal" :gutter="10">
        <van-grid-item
        class="zufang-group"
          v-for="item in group"
          :key="item.id"
        >
        <img :src="baseUrl+item.imgSrc" alt="">
        <div class="text">
          <p>{{item.desc}}</p>
          <p>{{item.title}}</p>
        </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { homeGroup } from '@/api'
export default {
  name: 'Home',
  data() {
    return {
      value: '',
      images: [
        'http://liufusong.top:8080/img/swiper/1.png',
        'http://liufusong.top:8080/img/swiper/2.png',
        'http://liufusong.top:8080/img/swiper/3.png'
      ],
      group: []

    }
  },
  created() {
    this.homeGroup()
  },
  methods: {
    async homeGroup() {
      const res = await homeGroup()
      this.group = res.data.body
    },
    searchCity() {
      this.$router.push('/city')
    }
  }
}
</script>

<style scoped lang="less">
.my-swipe .van-swipe-item {
  color: transparent;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-search {
  position: absolute;
  top: 25px;
  width: 98%;
  padding: 0;
  margin-left: 15px;
  z-index: 2;
  /deep/.iconfont {
    font-size: 48px;
    line-height: 24px;
    color: #fff;
  }
  .map {
    width: 50px;
    height: 50px;
    border: 3px solid #fff;
    border-radius: 50%;
  }
}
.van-swipe-item {
  img {
    width: 100%;
  }
}
.van-tabbar {
  margin: 20px 0 20px;
}
/deep/.van-tabbar-item__text {
  color: #000;
  font-size: 30px;
  margin-bottom: 20px;
}
.iconfont {
  font-size: 50px;
  margin: 20px 0 20px;
  color: rgb(33, 185, 122);
  border: 1px solid transparent;
}

.group {
  background-color: #f6f5f6;
  padding: 20px 0;
}
.van-cell {
  margin-top: 8px;
  background-color: #f6f5f6;
  .van-cell__title {
    font-weight: 700;
  }
}
/deep/.zufang-group {
    img {
      width: 120px ;
    };
    .text {
      font-size: 15px!important;
      color: #333;
    }
  }

</style>
