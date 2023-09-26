import { styled } from 'styled-components'
import bgHeader from '../../assets/images/fundo-banner.png'
import { Logo, color } from '../../styles'

export const HeaderContent = styled.header`
  background-image: url(${bgHeader});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: center;
  height: 186px;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${Logo} {
    margin: 64px 0;
  }

  a {
    font-size: 18px;
    font-weight: 900;
    color: ${color.red};
  }
`
