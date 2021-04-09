import { get } from './base'

export function getRecommend() {
  // 推荐轮播图数据
  return get('/api/getRecommend')
}
