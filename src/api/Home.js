import axios from '@/utils/request'

export const homeGroup = () => axios({
  url: '/home/groups'
})

export const marquee = () => axios({
  url: '/home/swiper'
})
