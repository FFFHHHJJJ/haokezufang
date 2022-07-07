<template>
  <div>
    <van-search
      v-model="value"
      left
      show-action
      label
      background="#21b97a"
      placeholder="请输入搜索关键词"
    >
      <template #left>
        <van-icon name="arrow-left" class="left_arrow" />
      </template>
      <template #label>
        <button
          :style="{ background: '#f6f5f6', border: 0 }"
          @click="searchCity"
        >
          北京
          <van-icon name="arrow-down" />
        </button>
      </template>
      <template #action>
        <div class="map"><i class="iconfont icon-ditu"></i></div>
      </template>
    </van-search>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item title="区域">
        <van-area :area-list="areaList" />
      </van-dropdown-item>
      <van-dropdown-item title="方式" />
      <van-dropdown-item title="租金" />
      <van-dropdown-item title="筛选" />
    </van-dropdown-menu>
  </div>
</template>

<script>
import { findHouse } from '@/api'
export default {
  data() {
    return {
      value: '',
      city: '北京',
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          120100: '天津市'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区'
          // ....
        }
      }
    }
  },
  created() {
    this.findHouse()
  },
  methods: {
    searchCity() {
      this.$router.push('/city')
    },
    async findHouse() {
      const res = await findHouse()
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
.iconfont {
  font-size: 50px;
  margin: 20px 0 20px;
  color: #fff;
  border: 1px solid transparent;
}
.left_arrow {
  color: #fff;
  margin-right: 20px;
}
</style>
