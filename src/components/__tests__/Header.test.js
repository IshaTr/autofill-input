import React from 'react'
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../Header'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}))

const useSelectorMock = useSelector
const useDispatchMock = useDispatch

const mockStore = []

describe('<Options />', () => {
  const handleSelect = jest.fn()

  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn())
    useSelectorMock.mockImplementation(() => mockStore)
    render(<Header />)
  })

  afterEach(cleanup)

  it('should render Options without breaking', () => {
    expect(screen.getByTestId('header')).toBeTruthy()
  })

  it('should render logo without breaking', () => {
    expect(screen.getByTestId('logo')).toBeTruthy()
  })
})
