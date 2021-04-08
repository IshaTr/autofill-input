import React from 'react'
import styled from 'styled-components'

import Flex from './common/Flex'

import BannerImage from '../images/banner.png'
import StandardInput from './AutoFill/Input'

const Wrapper = styled.div`
  width: 100%;
  height: 360px;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`

const Overlay = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;

  h1 {
    ${'' /* text-transform: uppercase; */}
    text-align: center;
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 0;
  }
`

const Span = styled.span`
  margin-right: 0.5rem;
  color: rgb(89, 33, 207);
`

const Text = styled.p`
  margin: 0;
`

const Banner = (props) => (
  <React.Fragment>
    <Wrapper src={BannerImage} data-testid="banner">
      <Overlay justify="center" alignItems="center" direction="column">
        <h1>
          <Span>Best Doctors</Span> Unbeatable Prices
        </h1>
        <br />
        <Text>No copays. No hidden fees. No insurance mark-ups.</Text>
      </Overlay>
    </Wrapper>
    <StandardInput />
  </React.Fragment>
)

export default Banner
