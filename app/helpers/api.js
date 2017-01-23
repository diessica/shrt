import axios from 'axios'
import { transformStats } from './utils'

const api = axios.create({ baseURL: '/api' })

export const shorten = url => api(`/shorten`, {
  method: 'post',
  data: {
    url
  }
})

export const fetchStats = shortcode => api({
  url: `/${shortcode}/stats`,
  method: 'get',
  transformResponse: data => transformStats(JSON.parse(data))
})
