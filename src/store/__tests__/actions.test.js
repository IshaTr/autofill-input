import * as actions from '../actions'
import * as types from '../types'
describe('Actions', () => {
  it('setFilterSuggestion', () => {
    const expectedAction = {
      type: types.SET_FILTER_SUGGESTIONS
    }

    expect(actions.setFilterSuggestion()).toEqual(expectedAction)
  })

  it('closeDropDown', () => {
    const expectedAction = {
      type: types.CLOSE_DROPDOWN
    }

    expect(actions.closeDropDown()).toEqual(expectedAction)
  })

  it('increaseActiveIndex', () => {
    const expectedAction = {
      type: types.INCREASE_ACTIVE_INDEX
    }

    expect(actions.increaseActiveIndex()).toEqual(expectedAction)
  })

  it('decreaseActiveIndex', () => {
    const expectedAction = {
      type: types.DECREASE_ACTIVE_INDEX
    }

    expect(actions.decreaseActiveIndex()).toEqual(expectedAction)
  })
})
