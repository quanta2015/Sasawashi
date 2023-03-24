import { makeAutoObservable } from 'mobx'
import { message } from 'antd'
import {get,post} from '@/util/net.js'
import * as urls from '@/constant/urls'


class Store {
  constructor() {
    makeAutoObservable(this);
  }

  open = false
  show = false
  contact = false

  setShow = (e) =>{
    this.show = e
  }


  async post(url, params) {
    return await post(url,params)
  }

  async get(url, params) {
    const r = await get(url,params)
    if (r.code === 0) {
      return r.data
    }else{
      return null
      message.error(' 网络接口数据出错!')
    }
  }

  async prodList(params) {
    return await this.get(urls.API_PROD_LIST)
  }

  async prodListBest(params) {
    return await this.get(urls.API_PROD_LIST_BEST)
  }




  async exportStud(params) {
    const r = await this.post(urls.API_MENU_LOAD,params)
    if (r.code === 200) {
      return r.path
    }else{
      message.error('加载数据出错!')
    }
  }






}

export default new Store()