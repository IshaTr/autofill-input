import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import debounce from 'lodash/debounce'

import Options from './Options'
import Flex from '../common/Flex'

import {
  setFilterSuggestion,
  closeDropDown,
  decreaseActiveIndex,
  increaseActiveIndex
} from '../../store/actions'

const Wrapper = styled.div`
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  z-index: 1;
  padding: 0 16px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  z-index: 1;
`

const StandardInput = styled.input`
  font-size: 16px;
  background: #fff;
  padding: 0;
  height: 100%;
  padding-left: 60px;
  padding-right: 24px;
  background: transparent;
  appearance: none;
  color: #0d0c22;
  transition: background-color 200ms ease, outline 200ms ease, color 200ms ease,
    box-shadow 200ms ease, -webkit-box-shadow 200ms ease;
  outline: none;
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
`

const InputWrapper = styled(Flex)`
  background: #fff;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  border-radius: 8px;
  height: 64px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  max-width: 628px;
  width: 100%;
  margin: 0 auto;
  transform: translateY(-50%);
  z-index: 1;
`

const Input = () => {
  const dispatch = useDispatch()
  const suggestions = useSelector((state) => state.filteredSuggestions)
  const activeIndex = useSelector((state) => state.activeSelectedIndex)
  const [inputValue, setInputValue] = useState({ value: '' })

  // eslint-disable-next-line
  const debounceLoadOptions = useCallback(
    debounce((filter) => dispatch(setFilterSuggestion(filter)), 1000),
    [dispatch]
  )

  const setFilter = (event) => {
    const { value } = event.target

    setInputValue({ value })
    debounceLoadOptions(value)
  }

  const handleSelect = (value) => {
    setInputValue({ value })
    dispatch(closeDropDown(value))
  }

  const checkKey = (e) => {
    const event = e || window.event

    if (event.keyCode === 38) {
      dispatch(decreaseActiveIndex(activeIndex))
    } else if (event.keyCode === 40) {
      dispatch(increaseActiveIndex(activeIndex))
    } else if (event.keyCode === 13) {
      const selectedOption = suggestions[activeIndex]

      setInputValue({ value: selectedOption })
      dispatch(closeDropDown(selectedOption))
    }
  }
  document.onkeydown = checkKey

  return (
    <Wrapper>
      <InputWrapper jusify="center" alignItems="center" direction="column">
        <StandardInput
          data-testid="search-input"
          value={inputValue.value || ''}
          type="search"
          placeholder="Search..."
          onChange={setFilter}
        />
      </InputWrapper>
      {suggestions.length > 0 && (
        <Options
          options={suggestions}
          handleSelect={handleSelect}
          filterValue={inputValue.value}
        />
      )}
    </Wrapper>
  )
}

export default Input
