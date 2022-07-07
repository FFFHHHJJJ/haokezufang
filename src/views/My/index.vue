<template>
  <div class="homePage">
      <!-- 未登录 -->
      <header v-if="isLogin">
            <van-image
      width="100%"
      src="http://liufusong.top:8080/img/profile/bg.png"
      />
      <div class="login">
        <div class="username">游客</div>
        <van-button type="primary" size="small" class="btn" @click="fn">去登录</van-button>
      </div>
        <van-image
      src="http://liufusong.top:8080/img/profile/avatar.png"
      class="touxiang"
      />
      </header>
      <!-- 已登录 -->
      <header v-else>
            <van-image
      width="100%"
      src="http://liufusong.top:8080/img/profile/bg.png"
      />
      <div class="login">
        <div class="username">游客</div>
        <van-button type="primary" size="small" class="btn">去登录</van-button>
      </div>
        <van-image
      src="http://liufusong.top:8080/img/profile/avatar.png"
      class="touxiang"
      />
      </header>
      <van-grid :border="false" :column-num="3" class="nav-garid">
          <van-grid-item>
            <template #icon>
              <i class="iconfont icon-shoucang"></i>
            </template>
            <template #text>
              <span class="text">我的收藏</span>
            </template>
          </van-grid-item>
          <van-grid-item>
            <template #icon>
              <i class="iconfont icon-shouye"></i>
            </template>
            <template #text>
              <span class="text">我的出租</span>
            </template>
          </van-grid-item>
          <van-grid-item>
            <template #icon>
              <i class="iconfont icon-jilu"></i>
            </template>
            <template #text>
              <span class="text">看房记录</span>
            </template>
          </van-grid-item>
           <van-grid-item>
            <template #icon>
              <i class="iconfont icon-24gl-debitCard"></i>
            </template>
            <template #text>
              <span class="text">成为房主</span>
            </template>
          </van-grid-item>
          <van-grid-item>
            <template #icon>
              <i class="iconfont icon-gerenziliao"></i>
            </template>
            <template #text>
              <span class="text">个人资料</span>
            </template>
          </van-grid-item>
          <van-grid-item>
            <template #icon>
              <i class="iconfont icon-24gl-headset"></i>
            </template>
            <template #text>
              <span class="text">联系我们</span>
            </template>
          </van-grid-item>
      </van-grid>
      <van-image
      width="90%"
        src="http://liufusong.top:8080/img/profile/join.png"
        class="footer"
      />
      {{ $store.state.user }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    fn() {
      console.log(111)
    }
  }
}
</script>

<style scoped lang='less'>
header {
  height: 620px;
}
.homePage {
position: relative;
}
.login {
  position: absolute;
  top: 270px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  height: 340px;
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd
}
.username {
  text-align: center;
  margin-top: 120px;
  font-size: 25px;
}
.btn {
    width: 150px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
  }
  .touxiang {
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translateX(-50%);
    padding: 10px;
    border-radius: 50%;
    width:140px;
    height:140px;
    box-shadow: 0 4px 4px #bdbdbd;
    background-color: #fff;
  }
  .nav-garid {
    .iconfont {
      font-size: 50px;
    }
    .text {
      font-size: 13px;
      margin-top: 10px;
    }
  }
  .footer {
    margin-top: 40px;
    margin-left: 35px;
  }
</style>
