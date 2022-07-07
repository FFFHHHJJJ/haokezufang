import axios from '@/utils/request'
export const getCity = (level) => axios({
  url: '/area/city',
  params: { level }
})
