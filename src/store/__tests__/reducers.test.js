import { suggestions } from '../../utils/helper'
import reducer from '../reducers'
import * as types from '../types'

const initialState = {
  allSuggestions: suggestions,
  filteredSuggestions: [],
  filter: '',
  activeSelectedIndex: 0
}

describe('Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SET_FILTER_SUGGESTIONS', () => {
    const state = reducer(
      { ...initialState },
      { type: types.SET_FILTER_SUGGESTIONS, payload: 'Banana' }
    )

    expect(state).toEqual({
      ...initialState,
      filteredSuggestions: ['Banana']
    })
  })

  it('should handle CLOSE_DROPDOWN', () => {
    const state = reducer({ ...initialState }, { type: types.CLOSE_DROPDOWN })

    expect(state).toEqual({
      ...initialState,
      filteredSuggestions: [],
      filter: null,
      activeSelectedIndex: 0
    })
  })

  it('should handle INCREASE_ACTIVE_INDEX', () => {
    const state = reducer(
      { ...initialState },
      { type: types.INCREASE_ACTIVE_INDEX, payload: 0 }
    )

    expect(state).toEqual({
      ...initialState,
      activeSelectedIndex: 1
    })
  })

  it('should handle DECREASE_ACTIVE_INDEX', () => {
    const state = reducer(
      { ...initialState },
      { type: types.DECREASE_ACTIVE_INDEX, payload: 1 }
    )

    expect(state).toEqual({
      ...initialState,
      activeSelectedIndex: 0
    })
  })
})
