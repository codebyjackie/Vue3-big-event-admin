import request from '@/utils/request'

// 分类
export const articleGetChannelService = () => request.get('/my/cate/list')

export const articleAddChannelService = (data) =>
  request.post('/my/cate/add', data)

export const articleEditChannelService = (data) =>
  request.put('/my/cate/info', data)

export const articleDeleteChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })

// 文章
export const articleGetListService = (params) =>
  request.get('/my/article/list', {
    params
  })
