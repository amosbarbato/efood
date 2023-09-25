import styled from 'styled-components'
import { Logo, color } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${color.cream};
  text-align: center;
  padding: 40px 0;

  ${Logo} {
    margin-bottom: 33px;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 80px;

    li {
      cursor: pointer;
    }
  }

  p {
    font-size: 10px;
    font-weight: 400;
  }
`
