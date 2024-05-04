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

export const articlePublishService = (data) =>
  request.post('/my/article/add', data)

export const articleGetDetailService = (id) =>
  request.get('my/article/info', { params: { id } })

export const articleEditService = (data) => request.put('my/article/info', data)

export const articleDeleteService = (id) =>
  request.delete('my/article/info', { params: { id } })
