import { styled } from 'styled-components'
import { color } from '../../styles'

export const Image = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 280px;
  width: 100%;
  display: block;
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }
`

export const Titles = styled.div`
  z-index: 1;
  position: relative;
  display: grid;
  gap: 147px;
  color: ${color.white};
  padding: 25px 0 32px;

  span {
    font-size: 32px;
    font-weight: 100;
    text-transform: capitalize;
  }

  h2 {
    text-transform: capitalize;
  }
`
