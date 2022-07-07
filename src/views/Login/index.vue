<template>
  <div class="login-container">
    <van-nav-bar title="账号登录" left-arrow @click-left="$router.back()" />
    <van-form @submit="onSubmit" ref="form">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="rules.username"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="rules.password"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <van-cell title="还没有账号，去注册~" class="register"></van-cell>
  </div>
</template>

<script>
import { login } from '@/api'
import { Toast } from 'vant'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data() {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          {
            required: true,
            message: '账号不能为空'
          },
          {
            pattern: /^[a-zA-Z0-9]{5,8}$/,
            message: '用户名为5-8位的数字和字母组合'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空'
          },
          {
            pattern: /^[a-zA-Z0-9]{5,12}$/,
            message: '密码为5-12位的数字和字母组合'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onSubmit(values) {
      // console.log(values)
      const res = await login(values)
      console.log(res)
      if (res.data.status === 200) {
        Toast.success(res.data.description)
        this.$router.push('/layout/my')
      } else {
        Toast.fail(res.data.description)
      }
    }
  }
}
</script>
<style scoped lang="less">

/deep/.van-cell__value {
    height: 100px;
    line-height: 100px;
    font-size: 30px;
}
.register {
  text-align: center;
  margin-top: 20px;
  color: #666666;
}
</style>
