import React from 'react'
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'
import Input from '../AutoFill/Input'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}))

const useSelectorMock = useSelector
const useDispatchMock = useDispatch

const mockStore = []

describe('<Input />', () => {
  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn())
    useSelectorMock.mockImplementation(() => mockStore)
  })

  afterEach(cleanup)
  it('should render Input without breaking', () => {
    render(<Input />)
    expect(screen.getByTestId('input')).toBeTruthy()
  })

  it.only('should call setFilter on change of value', () => {
    const { getByTestId } = render(<Input />)
    const input = getByTestId('search-input')
    fireEvent.change(input, { target: { value: 'an' } })

    expect(input.value).toBe('an')
  })
})
