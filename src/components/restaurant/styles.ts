import { styled } from 'styled-components'
import { color } from '../../styles'
import { ButtonContainer } from '../button/styles'

export const Card = styled.div`
  background-color: ${color.white};
  border: 1px solid ${color.red};
  position: relative;

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  .tags {
    display: flex;
    gap: 8px;
    position: absolute;
    top: 16px;
    right: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    padding: 8px;
  }

  ${ButtonContainer} {
    margin-left: 8px;
    margin-bottom: 8px;
  }
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  > div {
    display: flex;
    justify-content: center;
    gap: 8px;

    span {
      font-size: 18px;
      font-weight: 700;
    }
  }
`
