import request from '@/utils/request'

export const articleGetChannelService = () => request.get('/my/cate/list')

export const articleAddChannelService = (data) =>
  request.post('/my/cate/add', data)

export const articleEditChannelService = (data) =>
  request.put('/my/cate/info', data)

export const articleDeleteChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })
