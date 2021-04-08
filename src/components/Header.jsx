import React from 'react'
import styled from 'styled-components'

import Logo from '../images/logo.svg'

import Flex from './common/Flex'

const Wrapper = styled(Flex)`
  align-items: center;
  height: 80px;
  box-shadow: inset 0px -1px 0px #f3f3f4;
  padding-left: 3rem;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`

const LogoImage = styled.img`
  width: 90px;
  height: 100%;
`

const Header = (props) => (
  <Wrapper data-testid="header" alignItems="center" justify="space-between">
    <LogoImage data-testid="logo" src={Logo} alt="Sesame" />
  </Wrapper>
)

export default Header
