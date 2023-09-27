import styled from 'styled-components'
import { color } from '../../styles'
import { ButtonContainer } from '../button/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const FormContent = styled.div`
  display: block;
  color: ${color.cream};
  font-weight: 700;
  padding-top: 16px;

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .margin-bottom {
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    width: 100%;
    margin-top: 8px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  display: grid;
  grid-gap: 8px;
  margin-top: 8px;

  label {
    font-size: 14px;
  }

  input {
    background-color: ${color.cream};
    color: #4b4b4b;
    border: none;
    font-size: 14px;
    padding: 8px;
    max-width: ${(props) => props.maxWidth || 'auto'};
  }
`
