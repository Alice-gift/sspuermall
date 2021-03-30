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
// 面向对象封装的思想 把很多从服务器返回的数据先把它封装到一个类里面 再来创建对应的类的对象 用对象来传到下一层组件里面 组件对它来做一个展示
export class Goods {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title
      this.desc = itemInfo.desc
      this.newPrice = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.discount = itemInfo.discountDesc
      this.columns = columns
      this.services = services
      this.realPrice = itemInfo.lowNowPrice
    }
 }
 export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.cSells;
    this.goodsCount = shopInfo.cGoods;
  }
 }
