import * as types from './types'
import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER_SUGGESTIONS:
      const pattern = new RegExp(action.payload.toLowerCase())
      const newSuggestions =
        action.payload === ''
          ? []
          : state.allSuggestions.filter((option) =>
              pattern.test(option.toLowerCase())
            )
      return {
        ...state,
        filteredSuggestions: [...newSuggestions]
      }
    case types.CLOSE_DROPDOWN:
      return {
        ...state,
        filteredSuggestions: [],
        filter: null,
        activeSelectedIndex: 0
      }
    case types.DECREASE_ACTIVE_INDEX:
      const newIndex = action.payload === 0 ? 0 : action.payload - 1
      return {
        ...state,
        activeSelectedIndex: newIndex
      }
    case types.INCREASE_ACTIVE_INDEX:
      const { filteredSuggestions } = state
      const newIncreasedIndex =
        action.payload === filteredSuggestions.length - 1
          ? filteredSuggestions.length - 1
          : action.payload + 1
      return {
        ...state,
        activeSelectedIndex: newIncreasedIndex
      }

    default:
      return state
  }
}

export default reducer
