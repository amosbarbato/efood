import styled from 'styled-components'
import { color } from '../styles'
import { ButtonContainer } from '../components/button/styles'

export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const Modal = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
  background-color: ${color.red};
  padding: 32px;
  color: ${color.white};
  display: flex;
  z-index: 1;
  position: relative;

  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
  }

  > div {
    display: block;
    margin-left: 24px;

    p {
      font-size: 14px;
      line-height: 22px;
      margin: 16px 0;
    }

    ${ButtonContainer} {
      width: 218px;
    }
  }
`
