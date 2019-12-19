
import Vue from 'vue'

import {
  reqInfo,
  reqRatings,
  reqGoods
} from '@/api'

import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from '../mutation-types'

export default {
  state:{
    goods:[],
    ratings:[],
    info:{}
  },
  mutations:{
    [RECEIVE_GOODS](state,{goods}){
      state.goods = goods
    },
    [RECEIVE_RATINGS](state,{ratings}){
      state.ratings = ratings
    },
    [RECEIVE_INFO](state,{info}){
      state.info = info
    },
  },
  actions:{
    // 异步获取商家信息
    async getShopInfo({commit}, cb) {
      const result = await reqInfo()
      if(result.code===0) {
        const info = result.data
        commit(RECEIVE_INFO, {info})

        typeof cb=== 'function' && cb()
      }
    },

    // 异步获取商家评价列表
    async getShopRatings({commit}, cb) {
      const result = await reqRatings()
      if(result.code===0) {
        const ratings = result.data
        commit(RECEIVE_RATINGS, {ratings})

        typeof cb=== 'function' && cb()
      }
    },

    // 异步获取商家商品列表
    async getShopGoods({commit}, cb) {
      const result = await reqGoods()
      if(result.code===0) {
        const goods = result.data
        commit(RECEIVE_GOODS, {goods})
        // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
        typeof cb=== 'function' && cb()
      }
    },

  },
  getters:{

  },

}