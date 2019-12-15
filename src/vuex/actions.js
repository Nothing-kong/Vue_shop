
import{
  reqAddress,
  reqCategorys,
  reqShops
} from '@/api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default{
   /*
   获取当前地址信息对象的异步action
   */
  
   async getAddress({commit, state}){
      const {longitude, latitude} = state

      //发异步请求
      const result = await reqAddress(longitude, latitude)
      //请求成功后，提交给mutations
      if (result.code ===0) {
        const adress = result.data
        commit(RECEIVE_ADDRESS, address)
      }
   },

   async getCategorys({commit}){
    const {longitude, latitude} = state

    //发异步请求
    const result = await reqCategorys(longitude, latitude)
    //请求成功后，提交给mutations
    if (result.code ===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
      typeof callback === 'function' && callback()
    }
   },

  async getShops({commit}){
    const {longitude, latitude} = state

    //发异步请求
    const result = await reqShops(longitude, latitude)
    //请求成功后，提交给mutations
    if (result.code ===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  }
} 