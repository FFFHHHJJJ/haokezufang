import axios from '@/utils/request'

export const login = (data) => axios({
  method: 'post',
  url: '/user/login',
  data
})
