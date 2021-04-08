import * as types from './types'

export const setFilterSuggestion = (inputValue) => ({
  type: types.SET_FILTER_SUGGESTIONS,
  payload: inputValue
})

export const closeDropDown = () => ({
  type: types.CLOSE_DROPDOWN
})

export const increaseActiveIndex = (index) => ({
  type: types.INCREASE_ACTIVE_INDEX,
  payload: index
})

export const decreaseActiveIndex = (index) => ({
  type: types.DECREASE_ACTIVE_INDEX,
  payload: index
})
