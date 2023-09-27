import styled from 'styled-components'
import { color } from '../../styles'
import { ButtonContainer } from '../button/styles'

import trash from '../../assets/trash.png'

export const CartModal = styled.div`
  ${ButtonContainer} {
    width: 100%;
  }
`

export const ItemList = styled.ul`
  width: 100%;

  li {
    position: relative;
    display: flex;
    padding: 8px;
    background-color: ${color.cream};
    color: ${color.red};
    margin-top: 16px;

    img {
      height: 80px;
      width: 80px;
      object-fit: cover;
    }

    > div {
      display: block;
      margin-left: 8px;

      h4 {
        margin-bottom: 16px;
      }

      span {
        font-size: 14px;
      }
    }

    button {
      background-image: url(${trash});
      width: 16px;
      height: 16px;
      border: none;
      background-color: transparent;
      position: absolute;
      top: 8px;
      right: 8px;
    }
  }
`

export const Remove = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 8px;
  bottom: 8px;
`

export const Quantity = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 40px 0 16px;
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

export const Empyt = styled.p`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`
