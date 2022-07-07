<template>
  <div>
    <router-view></router-view>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="rgb(33, 185, 122)" class="tab-bar">
      <van-tabbar-item to="/layout/home"
        >
        <span>首页</span>
        <template #icon>
          <i class="iconfont icon-shouye"></i>
        </template>
        </van-tabbar-item
      >
      <van-tabbar-item to="/layout/find"
        >
        <span>找房</span>
        <template #icon>
          <i class="iconfont icon-sousuo"></i>
        </template>
        </van-tabbar-item
      >
      <van-tabbar-item to="/layout/news"
        ><span>资讯</span>
        <template #icon>
          <i class="iconfont icon-zixun"></i>
        </template>
        </van-tabbar-item
      >
      <van-tabbar-item to="/layout/my"
        ><span>我的</span>
        <template #icon>
          <i class="iconfont icon-wode"></i>
        </template>
        </van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang="less">
/deep/.van-tabbar-item__icon{
.iconfont {
    font-size: 40px !important;
  }
}

/deep/.van-tabbar-item__text {
  font-size: 10px;
}
</style>
