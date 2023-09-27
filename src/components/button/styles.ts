import styled from 'styled-components'
import { Props } from '.'
import { color } from '../../styles'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'red' ? color.red : color.cream};
  color: ${(props) => (props.variant === 'red' ? color.cream : color.red)};
  border: none;
  padding: 4px 6px;

  font-size: 14px;
  font-weight: 700;

  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`
