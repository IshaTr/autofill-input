import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { getHighlightedText } from '../../utils/helper'

const Wrapper = styled.ul`
  width: 100%;
  background: #fff;
  border: 1px solid rgba(89, 33, 207, 0.3);
  border-radius: 8px;
  max-width: 628px;
  margin: 0 auto;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  transform: translateY(-16px);
  color: rgb(89, 33, 207);
  list-style-type: none;
  padding: 0;
`

const Text = styled.li`
  margin: 0;
  padding: 12px 0;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background: ${(props) => (props.isActive ? '#eceff1' : '#fff')};
  color: #000;
  font-weight: 500;

  &:hover {
    background: #eceff1;
  }

  span {
    font-weight: bolder;
    color: rgba(89, 33, 207);
  }
`

const Options = ({ options, handleSelect, filterValue }) => {
  const activeIndex = useSelector((state) => state.activeSelectedIndex)

  return (
    <Wrapper data-testid="options">
      {options.map((option, index) => (
        <Text
          data-testid={`option-${index}`}
          key={option}
          onClick={() => handleSelect(option)}
          isActive={index === activeIndex}
          id="suggestion-text"
        >
          {getHighlightedText(option, filterValue)}
        </Text>
      ))}
    </Wrapper>
  )
}

export default Options
