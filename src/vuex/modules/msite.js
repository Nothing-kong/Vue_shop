import{
  reqAddress,
  reqCategorys,
  reqShops
} from '@/api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from '../mutation-types'

export default{
  state:{
    latitude: 40.10038, // 纬度
    longitude: 116.36867, // 经度
    address: {}, // 地址信息对象
    categorys: [], // 分类数组
    shops: [], //商家数组
  },

  mutations:{
    [RECEIVE_ADDRESS] (state, address) {
      state.address = address
    },
    [RECEIVE_CATEGORYS] (state, categorys) {
      state.categorys = categorys
    },
    [RECEIVE_SHOPS] (state, shops) {
      state.shops = shops
    },
  },
  actions:{
      /*
    获取当前地址信息对象的异步action
    */
    
    async getAddress({commit, state}){
      const {longitude, latitude} = state

      //发异步请求
      const result = await reqAddress(longitude, latitude)
      //请求成功后，提交给mutations
      if (result.code ===0) {
        const address = result.data
        commit(RECEIVE_ADDRESS, address)
      }
    },

    async getCategorys({commit}, callback){

      //发异步请求
      const result = await reqCategorys()
      //请求成功后，提交给mutations
      if (result.code ===0) {
        const categorys = result.data
        commit(RECEIVE_CATEGORYS, categorys)
        typeof callback === 'function' && callback()
      }
    },

    async getShops({commit, state}){
      const {longitude, latitude} = state

      //发异步请求
      const result = await reqShops({longitude, latitude})
      //请求成功后，提交给mutations
      if (result.code ===0) {
        const shops = result.data
        commit(RECEIVE_SHOPS, shops)
      }
    }
  }

} 