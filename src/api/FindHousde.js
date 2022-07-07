import axios from '@/utils/request'
export const findHouse = () => axios({
  url: '/houses'
})
