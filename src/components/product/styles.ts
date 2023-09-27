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
  display: none;
  justify-content: center;
  align-items: center;

  &.enable {
    display: flex;
  }
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 24px;

    ${ButtonContainer} {
      width: 230px;
    }
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }
`

export const Close = styled.button`
  border: none;
  background: transparent;
  top: 8px;
  right: 8px;
  position: absolute;

  img {
    width: 16px;
    height: 16px;
  }
`
