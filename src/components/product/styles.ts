import { styled } from 'styled-components'
import { color } from '../../styles'
import { ButtonContainer } from '../button/styles'

export const Card = styled.div`
  background-color: ${color.red};
  width: 320px;
  padding: 8px;
  color: ${color.lightCream};

  img {
    width: 304px;
    height: 167px;
    object-fit: cover;
  }

  h4 {
    margin-top: 8px;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
    line-height: 22px;
  }

  ${ButtonContainer} {
    width: 100%;
  }
`
