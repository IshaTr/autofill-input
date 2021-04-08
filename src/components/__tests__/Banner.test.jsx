import React from 'react'
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

import Banner from '../Banner'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn()
}))

const useSelectorMock = useSelector
const useDispatchMock = useDispatch

const mockStore = []

describe('<Banner />', () => {
  const handleSelect = jest.fn()

  beforeEach(() => {
    useDispatchMock.mockReturnValue(jest.fn())
    useSelectorMock.mockImplementation(() => mockStore)
    render(<Banner />)
  })

  afterEach(cleanup)

  it('should render Banner without breaking', () => {
    expect(screen.getByTestId('banner')).toBeTruthy()
  })

  it('should contain banner slogan', () => {
    expect(
      screen.getByText('No copays. No hidden fees. No insurance mark-ups.')
    ).toBeTruthy()
  })
})
