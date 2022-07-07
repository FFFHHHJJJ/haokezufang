<template>
  <div class="app">
    <van-nav-bar
      title="城市列表"
      left-arrow
      @click-left="onClickLeft"
      class="navBar"
      fixed
    />
    <van-index-bar :sticky="false" :index-list="FirstPin">
      <div :index="name" v-for="(item, name) in city" :key="name">
        <van-index-anchor>
          <b>{{ name }}</b>
        </van-index-anchor>
        <van-cell
          v-for="(row, index) in item"
          :key="index"
          :title="row.label"
        ></van-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCity } from '@/api'
export default {
  name: 'city',
  data() {
    return {
      city: {},
      FirstPin: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'W',
        'X',
        'Y',
        'Z'
      ]
    }
  },
  created() {
    this.getCity()
  },
  methods: {
    onClickLeft() {
      this.$router.push('/layout/home')
    },
    async getCity() {
      const { data } = await getCity(1)
      const cityName = {}
      // 循环24个字母的数组
      this.FirstPin.forEach((item) => {
        cityName[item] = []
        data.body.forEach((el) => {
        // 对比开头字母是否对应
          const first = el.short.toUpperCase()[0]
          if (first === item) {
            cityName[item].push(el)
          }
        })
      })
      console.log(cityName)
      this.$nextTick(() => {
        this.city = cityName
      })
    }
  }
}
</script>

<style scoped lang="less">
.app {
    padding-top: 80px;
}
.van-nav-bar {
  background-color: #21b97a;
  /deep/.van-icon {
    color: #fff;
  }
}
/deep/.van-nav-bar__title {
  color: #fff;
}
</style>
