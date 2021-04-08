import React from 'react'
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

import Options from '../AutoFill/Options'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}))

const useSelectorMock = useSelector
const useDispatchMock = useDispatch

const mockStore = ['a', 'b', 'c']

describe('<Options />', () => {
  const handleSelect = jest.fn()

  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn())
    useSelectorMock.mockImplementation(() => mockStore)
    render(<Options options={mockStore} handleSelect={handleSelect} />)
  })

  afterEach(cleanup)

  it('should render Options without breaking', () => {
    expect(screen.getByTestId('options')).toBeTruthy()
  })

  it('should call the select function onClick', () => {
    const option = screen.getByTestId('option-1')

    fireEvent.click(option)
    expect(handleSelect).toHaveBeenCalledTimes(1)
  })
})
