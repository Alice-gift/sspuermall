import {request} from './request'

export function getDetail(iid) {
  return request({
    //传入一些参数
    url: '/detail',
    params: {
      iid
    }
  })
}
