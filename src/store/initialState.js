import { suggestions } from '../utils/helper'

const InitialState = {
  allSuggestions: suggestions,
  filteredSuggestions: [],
  filter: '',
  activeSelectedIndex: 0
}

export default InitialState
