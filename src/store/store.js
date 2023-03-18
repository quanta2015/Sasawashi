import { makeAutoObservable } from 'mobx'
import { message } from 'antd'
import {get,post} from '@/util/net.js'
import * as urls from '@/constant/urls'


class Store {
  constructor() {
    makeAutoObservable(this);
  }

  user = null


  async post(url, params) {
    return await post(url,params)
  }

  async get(url, params) {
    return await get(url,params)
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