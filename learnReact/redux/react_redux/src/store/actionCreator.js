import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMENTD
} from './constans.js'

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num
})

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num
})

export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners
})

export const changeRecommendActon = (recommends) => ({
  type: CHANGE_RECOMMENTD,
  recommends
})
