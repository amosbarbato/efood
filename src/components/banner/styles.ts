import styled from 'styled-components'
import bgHeader from '../../assets/images/fundo-banner.png'
import { Logo } from '../../styles'

export const HeaderContainer = styled.header`
  background-image: url(${bgHeader});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  height: 384px;
  width: 100%;

  ${Logo} {
    margin: 40px 0;
    margin-bottom: 138px;
  }
`
